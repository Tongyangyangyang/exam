require('babel-polyfill');
var showSubjectDB = require('../db/showSubjectDB');
var showSubject = require('../model/showSubject');
// let epartmentDB = require('../db/epartmentDB');
// let epartment = require('../model/epartment')
//查询所有
showSubjectDB.getAllSubjects('1','1','3','1').then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错了 ！"+error);
});
// epartmentDB.getAllSubjectLevel().then(function(data){
//   console.log(data);
// }).catch(function(error){
//   console.log("报错了 ！"+error);
// });
