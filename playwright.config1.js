const { devices } = require("@playwright/test")
const { trace } = require("console")

const config=({
  testDir:'./tests',
  retries:1,
  workers: 3,
  timeout:40*1000,
  expect:{
    timeout:30*1000
  },
  reporter:"html",
  projects:[
    {
      name:'safari',
  use:{
    browserName:'webkit',
    headless:true,
    screenshot:'on',
    trace:'on'

  }
},
{
  name:'chrome',
  use:{
    browserName:'chromium',
    headless:false,
    screenshot:'off',
    trace:'on',
    //viewport:{width:720,height:720}
    //...devices['Galaxy A55'],
    ignoreHttpsErrors: true,
    Permissions: ['geolocation'],
    video: 'retain-on-failure'
  }
}

  ]
})
module.exports=config