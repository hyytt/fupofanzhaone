// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    persons: [{ 
      name:'张xx',
      photo: '../img/yiren.jpeg',
      birth:'1966.12',
      age:'56',
      nativePlace:'四川峨眉',
      workproperty: {
        positivenum:0,
        negativenum:0,
        positive:['234','11233'] ,
        negative:['1111','444']
      }
    },
      { 
        name:'林领',
        photo: '../img/yiren.jpeg',
        birth:'1988.12',
        age:'56',
        nativePlace:'四川jiagyou',
        workproperty: {
          positivenum:0,
          negativenum:0,
          positive:['234','11233'] ,
          negative:['1111','444']
        }}   ,
      { 
        name:'wwerr文',
        photo: '../img/yiren.jpeg',
        birth:'1988.12',
        age:'56',
        nativePlace:'四川jiagyou',
        workproperty: {
          positivenum:0,
          negativenum:0,
          positive:['234','11233'] ,
          negative:['1111','444']
        }} ,
      { 
        name:'hahahha',
        photo: '../img/yiren.jpeg',
        birth:'1988.12',
        age:'56',
        nativePlace:'四川jiagyou',
        workproperty: {
          positivenum:0,
          negativenum:0,
          positive:['234','11233'] ,
          negative:['1111','444']
        }}
        ,
      { 
        name:'chenjj',
        photo: '../img/yiren.jpeg',
        birth:'1988.12',
        age:'56',
        nativePlace:'四川jiagyou',
        workproperty: {
          positivenum:0,
          negativenum:0,
          positive:['234','11233'] ,
          negative:['1111','444']
        }}
  ]
  },
  registerhao(e) {
    let index = e.currentTarget.dataset.index
    console.log(index)
    // let list = wx.getStorageSync('persons')||[]
    this.data.persons[index].workproperty.negativenum=this.data.persons[index].workproperty.negativenum+1
    wx.setStorageSync('personproperty', this.data.persons[index])
    wx.navigateTo({
      url: '/pages/detail-info/detail-info'
    })
  },

  registerbad() {
    let index = e.currentTarget.dataset.index
    console.log(index)
    wx.navigateTo({
      url: '/pages/detail-info/detail-info?index='+index
    })
  }
})
