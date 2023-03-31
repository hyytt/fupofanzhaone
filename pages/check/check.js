// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    persons:null
  },
  onLoad: function (options) {
    var personinfos = wx.getStorageSync('personinfos')
    // this.data.persons=personinfos;
    this.setData({ 
      persons:personinfos,
    })
    console.log('------------>')
    console.log(this.data.persons)
    console.log(this.data.persons[1].workproperty)
    console.log(this.data.persons[1].workproperty.positivenum)
    console.log('------------>')
  },

  registerhao(e) {
    let index = e.currentTarget.dataset.index
    console.log(index)
    // let list = wx.getStorageSync('persons')||[]
    this.data.persons[index].workproperty.negativenum=this.data.persons[index].workproperty.negativenum+1
    wx.setStorageSync('personinfos', this.data.persons)
    
    wx.navigateTo({
      url: '/pages/detail-info/detail-info'
    })
  },

  registerbad(e) {
    let index = e.currentTarget.dataset.index
    console.log(index)
    wx.navigateTo({
      url: '/pages/detail-info/detail-info?index='+index
    })
  },
 
})
