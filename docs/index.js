function processData(data) {
  var policies_list = $("#policies_list");
  policies_list.empty();

  var services_list = $("#services_list");
  services_list.empty();

  data.files.forEach((value, i) => {
    var name = value.filename.split("/").reverse()[0].split('.')[0];
    var element = `<a href="${data.html_url + "#diff-" + i}" target="_blank" class="list-group-item list-group-item-action">${name}</a>`;
    if (value.filename.startsWith("policies")) {
      policies_list.append(element)
    }
    if (value.filename.startsWith("services")) {
      services_list.append(element)
    }
  });
  if ($("#policies_list").is(':empty')) $("#policies_list").append('<li class="list-group-item">No results</li>');
  if ($("#services_list").is(':empty')) $("#services_list").append('<li class="list-group-item">No results</li>');
}

function doCompare(from, to) {
  $.get(`https://api.github.com/repos/glassechidna/trackiam/compare/${from}...${to}`, processData);
}

function compareClick(ev) {
  var from = $("#from_commit_select")
  var to = $("#to_commit_select")
  setLocation(from.val(), to.val())
  doCompare(from.val(), to.val())
}

function setLocation(from, to) {
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

function main() {
  $.get("https://api.github.com/repos/glassechidna/trackiam/commits", data => {
    var from = $("#from_commit_select")
    var to = $("#to_commit_select")
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
