// /where script.js

// Add National Forest Service maps

// Format: 201727
function getNFSShortDateYesterday() {
  var dt = new Date();
  var year = 1900 + dt.getYear()
  var day = dt.getDate() - 1
  return year.toString() + day.toString();
}
// console.log(getNFSShortDateYesterday());

// From https://stackoverflow.com/questions/23593052/format-javascript-date-to-yyyy-mm-dd
function getYYYYMMDD() {
  var d = new Date();
  var month = '' + (d.getMonth() + 1);
  var day = '' + d.getDate();
  var year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}
// console.log(getYYYYMMDD());

// Set NFS image links
function nfsSet(id, url_tpl, when) {
  var elm = document.querySelector("#" + id);
  elm.dataset.when = parseInt(when, "10");
  elm.src = url_tpl.replace(/%d/g, when);

  // tood: store and parse year, month, and day on elements
  // elm.onerror = function(event) {
  //   console.log(event);
  //   var when = elm.dataset.when
  //   elm.dataset.when = when - 1;
  // };
}

// Large Fire Incidents
nfsSet("nfs-lf-fire-img", "https://fsapps.nwcg.gov/data/lg_fire/lg_fire_nifc_" + getYYYYMMDD() + ".png");
document.querySelector("#nfs-lf-fire-a").href = "https://fsapps.nwcg.gov/data/lg_fire/lg_fire_nifc_" + getYYYYMMDD() + "_browse.png";
