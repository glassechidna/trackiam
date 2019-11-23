var state = {
  diff: [],
  commits: [],
  start: moment().startOf('week'),
  end: moment()
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
  setLocation();
  var shas = getShasFromDates(state.start, state.end);
  doCompare(shas.start, shas.end);
}

function setLocation() {
  var loc = new URL(document.location);
  const start = moment(state.start).format()
  const end = moment(state.end).format()
  loc.searchParams.set('from', start)
  loc.searchParams.set('to', end)
  if (window.history.pushState) window.history.pushState({}, `${start}...${end}`, loc)
  else document.location = loc;
}

function getLocation() {
  var loc = new URL(document.location);
  var from = loc.searchParams.get('from');
  var to = loc.searchParams.get('to');
  if (moment(from, "YYYY-MM-DDTHH:mm:ssZ", true).isValid()) state.start = from
  else if (getDateFromSha(from)) state.start = getDateFromSha(from)
  else state.start = getDateFromSha(state.commits[state.commits.length - 1].sha);
  if (moment(to, "YYYY-MM-DDTHH:mm:ssZ", true).isValid()) state.end = to
  else if (getDateFromSha(to)) state.end = getDateFromSha(to);
  else state.end = getDateFromSha(state.commits[0].sha);
  setStartDate(state.start);
  setEndDate(state.end);
  updateDateDisplay();
}

function getShasFromDates(start, end) {
  var inScope = state.commits.filter(x =>
    moment(x.commit.author.date) || moment(x.author.date)
  .isBetween(start, end))
  start = inScope[inScope.length - 1] ? inScope[inScope.length - 1].sha : null;
  end = inScope[0] ? inScope[0].sha : null;
  return { start, end }
}

function getDateFromSha(sha) {
  const commit = state.commits.find(x => x.sha === sha);
  if (commit && commit.author && commit.author.date) return commit.author.date;
  if (commit && commit.commit && commit.commit.author && commit.commit.author.date) return commit.commit.author.date;
}

function updateFromCommitPicker() {
  var start = getDateFromSha($("#from_commit_select").val());
  var end = getDateFromSha($("#to_commit_select").val());
  state.start = start;
  state.end = end;
  updateDateDisplay();
}

function updateFromDatePicker(start, end) {
  const shas = getShasFromDates(start, end);
  $("#from_commit_select").val(shas.start);
  $("#to_commit_select").val(shas.end);
  state.start = start;
  state.end = end;
  updateDateDisplay();
}

function setStartDate(start) {
  $("#rangepicker").data('daterangepicker').setStartDate(moment(start))
}

function setEndDate(end) {
  $("#rangepicker").data('daterangepicker').setEndDate(moment(end))
}

function updateDateDisplay() {
  $('#rangepicker span').html(moment(state.start).format('MMMM D, YYYY') + ' - ' + moment(state.end).format('MMMM D, YYYY'));
}

function setupDatepicker() {

  $('#rangepicker').daterangepicker({
    startDate: state.start,
    endDate: state.end,
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    }
  }, updateFromDatePicker);

  updateFromDatePicker(state.start, state.end);
}

function main() {
  $.get(`https://trackiam.geapp.io/commits`, data => {
    var from = $("#from_commit_select")
    var to = $("#to_commit_select")
    if (data) state.commits = data.filter(x =>
      x && x.commit && x.commit.author && x.commit.author.email == "aidan.steele+bot@glassechidna.com.au");
    state.commits.forEach((commit) => {
      var el = `<option value="${commit.sha}">
                      ${moment(commit.commit.author.date)} (${moment(commit.commit.author.date).fromNow()})</option>`
      from.append(el)
      to.append(el)
    });
    setupDatepicker();
    getLocation();
  });
}

// Events
$(document).ready(main);
