// index.js

function parse(dateString) {
    return new Date(dateString);
  }
  
  function format(date, formatString) {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
  
  module.exports = {
    parse,
    format
  };
  