'use strict';

function dateToday() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  date = day + '/' + month + '/' + year
}
