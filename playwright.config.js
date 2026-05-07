const { TIMEOUT } = require("node:dns");

const config = ({
  testDir: './tests',
  timeout: 40*1000,
  expect: {
    timeout: 30*1000,
  },
  reporter:"html",
  use:{
    browserName:'chromium',
    headless: false,
    testIdAttribute: 'data-test',

  }
  
})
module.exports=config