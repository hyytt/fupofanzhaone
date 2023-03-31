// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)


    // const personinfos = wx.getStorageSync('personinfos')
    var personinfo = [{ 
      name:'张aa',
      photo: '../img/yiren.jpeg',
      birth:'1966.12',
      age:'56',
      nativePlace:'四川峨眉',
      positivenum:0,
      negativenum:0,
      workproperty: {
        positive:[] ,
        negative:[]
      }
    },
      { 
        name:'bbb波波波',
        photo: '../img/yiren.jpeg',
        birth:'1988.12',
        age:'56',
        nativePlace:'四川jiagyou',
        positivenum:0,
        negativenum:0,
        workproperty: {
          positive:[] ,
          negative:[]
        }}   ,
      { 
        name:'ccwwerr文',
        photo: '../img/yiren.jpeg',
        birth:'1988.12',
        age:'56',
        nativePlace:'四川jiagyou',
        positivenum:0,
        negativenum:0,
        workproperty: {       
          positive:[] ,
          negative:[]
        }} ,
      { 
        name:'Ddd都',
        photo: '../img/yiren.jpeg',
        birth:'1988.12',
        age:'56',
        nativePlace:'四川jiagyou',
        positivenum:0,
        negativenum:0,
        workproperty: {
          positive:[] ,
          negative:[]
        }}
        ,
      { 
        name:'e额鹅鹅鹅',
        photo: '../img/yiren.jpeg',
        birth:'1988.12',
        age:'56',
        nativePlace:'四川jiagyou',
        positivenum:0,
        negativenum:0,
        workproperty: {
          positive:[] ,
          negative:[]
        }}
  ]
    // personinfos.unshift(personinfos)
    wx.setStorageSync('personinfo', personinfo)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }


})
