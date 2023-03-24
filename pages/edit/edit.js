// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    content: null
  },
  onLoad: function (options) {
    this.setData({
      nowDate: this.getNowDate(),
      nowTime: this.getNowTime()
    })
  },
  getNowDate: function () {
    let dateTime
    let YYYY = new Date().getFullYear()
    let MM = new Date().getMonth() + 1
    let DD = new Date().getDate()
    dateTime = YYYY + '-' + MM + '-' + DD
    return dateTime
  },
  // 获取当前时间
  getNowTime: function () {
    let dateTime
    let HH = new Date().getHours()
    let mm = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() :
      new Date().getMinutes()
    dateTime = HH + ':' + mm
    return dateTime
  },

  bindContent: function (e) {
    this.data.content = e.detail.value
  },
  save() {
    let content = this.data.content
    console.log(content)
    if (this.isEmpty(content)) {
      wx.showToast({
        title: '内容不能为空',
        icon: 'error',
        duration: 2000
      })
      return
    }
    wx.showToast({
      title: '提交成功',
      icon: 'success',
      duration: 2000
    })
      let personedit=wx.getStorageSync('personproperty')
      let list=personedit.workproperty.positive
      // let data={
      //   content: content,
      //   date: this.getNowDate(),
      //   time: this.getNowTime()
      // }
      content: content,
      list.unshift(content)
      personedit.workproperty.positive=list
      wx.setStorageSync('personproperty', personedit)
      wx.navigateBack()
  },

  // 判断字符串是否为空
  isEmpty(str) {
    if (str != null && str.trim().length > 0) {
      return false;
    }
    return true;
  }


})