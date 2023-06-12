// test4.js

var calc=require("./calc");
console.log("모듈분리후" + calc.add(10,5))

var calc2=require("./calc2")
console.log("모듈분리후" + calc2.divide(10,5))

// 내장모듈과 외장모듈
// npmjs.org
// nconf 모듈 시스템 환경변수에 접근할 수 있는 모듈

var nconf=require("nconf")
nconf.env()
console.log("OS환경변수", nconf.get('OS'))

