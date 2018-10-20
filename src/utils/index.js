const renderTime = (isoDate) => {
  const oldDate = new Date(isoDate);
  const DateNow = new Date();

  const millisecondsMargin = DateNow.getTime() - oldDate.getTime();

  const seconds = Math.ceil(millisecondsMargin / 1000);

  if (seconds > 60) {
    var minutes = Math.floor(seconds / 60);
  } else {
    return 'few seconds ago';
  }

  if (minutes > 60) {
    var hours = Math.floor(minutes / 60);
  } else {
    return `${minutes} ${minutes > 1 ? 'minutes' : 'minute'} ago`;
  }

  if (hours > 24) {
    var days = Math.floor(hours / 24);
  } else {
    return `${hours} ${hours > 1 ? 'hours' : 'hour'} ago`;
  }

  if (days > 14) {
    return `on ${oldDate.toLocaleString()}`;
  }
  return `${days} ${days > 1 ? 'days' : 'day'} ago`;
};

export { renderTime };
