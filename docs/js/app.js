var app = new Vue({
  el: '#app',
  data: {
    projects:[
      {
        name: "2020",
        video: "https://www.bilibili.com/video/BV1xJ411G7ar/"
      },
      {
        name: "card",
        video: "https://www.bilibili.com/video/BV1bJ411s7rj/"
      }
    ]
  },
  methods: {
    getImagePath(pathName){
      return "https://raw.githubusercontent.com/zhangyingwei/html-css-only/master/"+pathName+"/image/profile.png"
    },
    getPagePath(pathName){
      return "http://htmlpreview.github.io/?https://github.com/zhangyingwei/html-css-only/blob/master/"+pathName+"/index.html"
    }
  }
})