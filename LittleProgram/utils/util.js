const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}


module.exports.loadConfig = function(configureUrl, successCallback){
  var loadedData = null;
  wx.request({
    url: configureUrl,
    headers: {
      'Content-Type': 'application/json'
    },
    success: successCallback,
    fail: function(res){
      console.log("Loaded Data failed from ", configureUrl);
      console.log("response: ", res);
    }
  });
}
