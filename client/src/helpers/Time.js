function addHoursToDate(date, hours) {
  return new Date(new Date(date).setHours(date.getHours() + hours));
}

function addMinutesToDate(date, minutes) {
  return new Date(new Date(date).setMinutes(date.getMinutes() + minutes));
}

function subtractMinutesFromDate(date, minutes) {
  return new Date(new Date(date).setMinutes(date.getMinutes() - minutes));
}
 


export {addHoursToDate, addMinutesToDate, subtractMinutesFromDate}


