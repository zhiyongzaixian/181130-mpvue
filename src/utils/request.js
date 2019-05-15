import config from './config'
// 发送各种ajax请求
function request(url, data={},method='GET') {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      data,
      method,
      success: (res) => {
        // 更新状态
        // res.data
        console.log(res);
        resolve(res)
      },
      fail: (error) => {
        reject(error)
      }
    })
  })
}

export default request;