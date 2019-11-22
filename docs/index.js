var state = {
  diff: [],
  commits: []
}

function convertURLtoApi(url) {
  return url.replace("https://github.com/glassechidna/trackiam/", "https://api.github.com/repos/glassechidna/trackiam/");
}

function convertURLtoProxy(url) {
  url = url.replace("https://api.github.com/repos/glassechidna/trackiam/", "https://trackiam.geapp.io/");
  url = url.replace("https://github.com/glassechidna/trackiam/", "https://trackiam.geapp.io/");
  return url;
}

function convertDiffToChanges(diff) {
  return diff.chunks.map(x => x.changes).flat().filter(x => x.content.match(/^[\+\-]+[\S\s]+[A-Za-z0-9]+/))
}

function generateListItemDetails(name, type, data, i) {
  const exists = state.diff.find(x => x.to === data.files[i].filename);
  const isNew = exists.from == "/dev/null";
  const fileDiff = state.diff.find(x => x.to === data.files[i].filename);
  const fileChanges = convertDiffToChanges(fileDiff);
  if (exists) {
    return fileChanges.map(x => `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        ${x.content}
      </li>
    `);
  }
  // else {
  //   return `
  //     <ul class="list-group" id="item-${name}-${i}-list">
  //
  //     </ul>
  //   `;
  // };
}

function generateListItem(name, type, data, i) {
  const listItemDetails = generateListItemDetails(name, type, data, i);
  return `
  <div class="card m-1">
    <div class="card-header" id="header-${name}-${i}">
      <h5 class="mb-0 d-flex justify-content-between align-items-center">
        <span class="badge badge-primary badge-pill">${listItemDetails.length}</span>
        <a class="btn btn-link" target="_blank" href="${data.html_url}">
          ${name}
        </a>
        <button type="button" class="btn btn-light" data-toggle="collapse" data-target="#item-${name}-${i}" aria-expanded="true" aria-controls="item-${name}-${i}">...</button>
      </h5>
    </div>

    <div id="item-${name}-${i}" class="collapse" aria-labelledby="header-${name}-${i}">
      <div id="item-${name}-${i}-body" class="card-body">
        <ul class="list-group">
        ${listItemDetails.join('')}
        </ul>
      </div>
    </div>
  </div>
  `;
}

function processListData(data) {
  var diffUrl = convertURLtoApi(data.html_url) //convertURLtoProxy(data.html_url);
  $.get({
    url: diffUrl,
    headers: {
      Accept: "application/vnd.github.v3.diff"
    }
  }, (diff) => {
    state.diff = diffparser(diff);
    var policies_list = $("#policies_list");
    policies_list.empty();

    var services_list = $("#services_list");
    services_list.empty();

    data.files.forEach((value, i) => {
      var name = value.filename.split("/").reverse()[0].split('.')[0];
      var isPolicy = value.filename.startsWith("policies");
      var isService = value.filename.startsWith("services");
      var type = isPolicy ? 'policy' : isService ? 'service' : 'unknown';
      var element = generateListItem(name, type, data, i);
      if (isPolicy) policies_list.append(element)
      else if (isService) services_list.append(element)
    });
    if ($("#policies_list").is(':empty')) $("#policies_list").append('<li class="list-group-item">No results</li>');
    if ($("#services_list").is(':empty')) $("#services_list").append('<li class="list-group-item">No results</li>');
  });
}

function doCompare(from, to) {
  state.diff = [];
  $.get({
    url: `https://trackiam.geapp.io/compare/${from}...${to}`,
    headers: {
      Accept: "application/json"
    }
  }, processListData);
}

function compareClick(ev) {
  var from = $("#from_commit_select").val()
  var to = $("#to_commit_select").val()
  setLocation(from, to)
  if (from != "Select from commit") doCompare(from, to)
}

function setLocation(from, to) {
  if (to === "master") to = state.commits[0].sha
  var loc = new URL(document.location);
  loc.searchParams.set('from', from)
  loc.searchParams.set('to', to)
  if (window.history.pushState) window.history.pushState({}, `${from}...${to}`, loc)
  else document.location = loc;
}

function getLocation() {
  var loc = new URL(document.location);
  var from = loc.searchParams.get('from');
  var to = loc.searchParams.get('to');
  if (from) $("#from_commit_select").val(from);
  if (to) $("#to_commit_select").val(to);
  compareClick()
}

// function githubAuth() {
//   const client_id = "5f54fce357a399e3b20b";
//   const redirect_uri = document.location.href.includes('localhost')
//     ? 'http://localhost:8080/index.html'
//     : 'https://glassechidna.github.io/trackiam/';
//   const state = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
//   var code = document.location.searchParams.get('code');
//   if (code) {
//     $.post({
//       url: "https://github.com/login/oauth/access_token",
//       data: {
//           client_id,
//           redirect_uri,
//           state,
//           code
//         }
//       },
//       console.log
//     )
//   }
//   else {
//     document.location = `https://github.com/login/oauth/authorize?client_id=${client_id}&${redirect_uri}&${state}`;
//   }
// }

function main() {
  // githubAuth()
  $.get(`https://trackiam.geapp.io/commits`, data => {
    var from = $("#from_commit_select")
    var to = $("#to_commit_select")
    state.commits = data;
    data.forEach((commit) => {
      var el = `<option value="${commit.sha}">
                      ${moment(commit.commit.author.date)} (${moment(commit.commit.author.date).fromNow()})</option>`
      from.append(el)
      to.append(el)
    });
    getLocation();
  });
}

// Events
$(document).ready(main);
$("#from_commit_select").on('change', compareClick)
$("#to_commit_select").on('change', compareClick)
