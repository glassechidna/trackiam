var state = {
  commits: [],
  start: moment().startOf('week'),
  end: moment()
}

const htmlBase = "https://github.com/glassechidna/trackiam"
const preferredEndpoint = "https://trackiam.geapp.io"
// const preferredEndpoint = "https://api.github.com/repos/glassechidna/trackiam"

function withPreferredEndpoint(url) {
  return url.replace("https://api.github.com/repos/glassechidna/trackiam", preferredEndpoint);
}

function convertDiffToChanges(diff) {
  return diff.chunks.map(x => x.changes).flat()
    .filter(x => x.type != 'normal')
    .filter(x => x.content.substring(1).match("[0-9a-zA-Z]+"))
}

function generateListItemDetails(fileDiff) {
  var fileChanges = convertDiffToChanges(fileDiff);
  if (fileDiff) {
    return fileChanges.map(x => {
      var color = (x.type == 'add') ? 'success' : 'danger'
      var content = x.content.substring(1)
      content = content.replace(/^  - Name: ([-\w]+:\w+)/, '$1');

      return `
      <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-${color}">
        ${content}
      </li>
    `});
  };
}

function generateListItem(name, htmlUrl, i, diff) {
  const listItemDetails = generateListItemDetails(diff);
  return `
  <div class="card m-1">
    <div class="card-header" id="header-${name}-${i}">
      <h5 class="mb-0 d-flex justify-content-between align-items-center">
        <span class="badge badge-primary badge-pill">${listItemDetails.length}</span>
        <a class="btn btn-link" target="_blank" href="${htmlUrl}#diff-${i}">
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

function doCompare(from, to) {
  var htmlUrl = `${htmlBase}/compare/${from}...${to}`
  $.get({
    url: `${preferredEndpoint}/compare/${from}...${to}`,
    headers: {
      Accept: "application/vnd.github.v3.diff"
    }
  }, (diff) => {
    var diff = diffparser(diff);
    var policies_list = $("#policies_list");
    var services_list = $("#services_list");

    policies_list.empty();
    services_list.empty();

    diff.forEach((value, i) => {
      var filename = value.to
      var name = filename.split("/").reverse()[0].split('.')[0];
      var isPolicy = filename.startsWith("policies");
      var isService = filename.startsWith("services");
      var element = generateListItem(name, htmlUrl, i, value);
      if (isPolicy) policies_list.append(element)
      else if (isService) services_list.append(element)
    });
    if ($("#policies_list").is(':empty')) $("#policies_list").append('<li class="list-group-item">No results</li>');
    if ($("#services_list").is(':empty')) $("#services_list").append('<li class="list-group-item">No results</li>');
  });
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

function getDateFromCommit(x) {
  if (x) {
    if (x.commit && x.commit.author && x.commit.author.date) return moment(x.commit.author.date)
    if (x.author && x.author.date) return moment(x.author.date)
  }
}

function getDateFromBaseCommit(x) {
  if (x) {
    if (x.base_commit.author && x.base_commit.author.date) return moment(x.base_commit.author.date)
    if (x.base_commit.commit.author && x.base_commit.commit.author.date) return moment(x.base_commit.commit.author.date)
  }
}

function filterCommitsBetweenDates(start, end) {
  return state.commits.filter(x => {
    const date = getDateFromCommit(x);
    return date && date.isBetween(start, end);
  });
}

function getShasFromDates(start, end) {
  var inScope = filterCommitsBetweenDates(start, end)
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
  $.get(`${preferredEndpoint}/commits`, data => {
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
