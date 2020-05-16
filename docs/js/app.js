var app = new Vue({
  el: '#app',
  data: {
    projects:[
      {
        name: "card",
        video: "https://www.bilibili.com/video/BV1bJ411s7rj/"
      },
      {
        name: "login",
        video: "https://www.bilibili.com/video/BV1XJ411a7Mf/"
      },
      {
        name: "button",
        video: "https://www.bilibili.com/video/BV1dJ41157wH/"
      },
      {
        name: "2020",
        video: "https://www.bilibili.com/video/BV1xJ411G7ar/"
      },
      {
        name: "douyin",
        video: "https://www.bilibili.com/video/BV1zJ411E7Xt/"
      },
      {
        name: "jianzhi",
        video: "https://www.bilibili.com/video/BV1R7411v7Ah/"
      },
      {
        name: "border-button",
        video: "https://www.bilibili.com/video/BV17741147Lg/"
      },
      {
        name: "loading",
        video: "https://space.bilibili.com/163890510/channel/detail?cid=114891"
      },
      {
        name: "line-font",
        video: "https://www.bilibili.com/video/BV16p4y117k1/"
      },
      {
        name: "login2",
        video: "https://www.bilibili.com/video/BV1tA411h7id/"
      },
      {
        name: "login3",
        video: "https://www.bilibili.com/video/BV1Sz411b7CR/"
      },
      {
        name: "hetongxue-piantou",
        video: "https://www.bilibili.com/video/BV1h64y1T71F/"
      },
      {
        name: "page-404",
        video: "https://www.bilibili.com/video/BV1Ti4y1b79K/"
      },
      {
        name: "clock",
        video: "https://www.bilibili.com/video/BV18Q4y1N7Ft/"
      },
      {
        name: "todo-list",
        video: "https://www.bilibili.com/video/BV13K4y187Hn/"
      },
      {
        name: "switch-button",
        video: "https://www.bilibili.com/video/BV1vf4y1m7dC/"
      },
      {
        name: "split-font",
        video: "https://www.bilibili.com/video/BV1hf4y1U7fh/"
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