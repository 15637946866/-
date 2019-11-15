var baseUrl = "https://www.stbz99.com/apps123/homePage/getHomePageInfo"
export function add() {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl,
      method: 'POST',
      data: {
        projectId:968
      },
      success: function (res) {
        resolve(res)
      },
      fail: function (res) {
        reject(res)
      }
    })
  })
}