// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
     info: [
    //   { workProperty:'2021年八月底到岗，十月家里男主人说从监控里看到她嘴对奶瓶吸 话称试温度，被男主人委婉说明后有摆正态度，后因十一月结算工资对男主压半年的假期补贴不满，拒绝做家务洗奶瓶，后来男主又帮忙调节好。春节初三后女主一直催她告知几号上班，她支支吾吾。后来二月28号才到岗，跟女主麻麻说男女主人的私事，挑拨离间'},
    // // { workProperty:'2021年八月底到岗，十月家里男主人说从监控里看到她嘴对奶瓶吸 话称试温度，被男主人委婉说明后有摆正态度，后因十一月结算工资对男主压半年的假期补贴不满，拒绝做家务洗奶瓶，后来男主又帮忙调节好。春节初三后女主一直催她告知几号上班，她支支吾吾。后来二月28号才到岗，跟女主麻麻说男女主人的私事，挑拨离间'},
    // // { workProperty:'2021年八月底到岗，十月家里男主人说从监控里看到她嘴对奶瓶吸 话称试温度，被男主人委婉说明后有摆正态度，后因十一月结算工资对男主压半年的假期补贴不满，拒绝做家务洗奶瓶，后来男主又帮忙调节好。春节初三后女主一直催她告知几号上班，她支支吾吾。后来二月28号才到岗，跟女主麻麻说男女主人的私事，挑拨离间'},
   
  ]
  },
  onLoad: function (options) {
    this.setData({
      isEmpty:!this.data.info.length>0
    })
  },

  write() {
    wx.navigateTo({
      url: '/pages/edit/edit'
    })
  }

})
