// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    // personproperty:{ 
    //   name:null,
    //   photo: null,
    //   birth:null,
    //   age:null,
    //   nativePlace:null,
    //   workproperty: {
    //     positivenum:null,
    //     negativenum:null,
    //     positive:[] ,
    //     negative:[]
    //   }
    
  },
  onLoad: function (options) {
    let personproperty = wx.getStorageSync('personproperty', this.data.personproperty)
    console.log(personproperty)
    console.log(personproperty.workproperty.positive.length)
    this.setData({ 
      isEmpty:!personproperty.workproperty.positive.length>0 ,
      photo:personproperty.photo,
      name:personproperty.name,
      age:personproperty.age,
      birth:personproperty.birth,
      nativePlace:personproperty.nativePlace,
      list:personproperty.workproperty.positive
    })
  },

  write() {
    wx.navigateTo({
      url: '/pages/edit/edit'
    })
  },
  onShow(){
    let personedit=wx.getStorageSync('personproperty')
    let list=personedit.workproperty.positive
    this.setData({
      list:list,
      isEmpty:!list.length>0
    })
  },

})

