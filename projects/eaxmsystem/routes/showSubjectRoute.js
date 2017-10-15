require('babel-polyfill');
let express = require('express');
let route = express.Router();
let showSubjectDB = require('../db/showSubjectDB');
let showSubject = require('../model/showSubject')
//获取类型
route.get('/getAllSubjectType',(req,resp)=>{
  showSubjectDB.getAllSubjectType().then((data)=>{
  	console.log(data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//获取方向
route.get('/getAllSubjectDepartment',(req,resp)=>{
  showSubjectDB.getAllSubjectDepartment().then((data)=>{
  	console.log(data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//获取难度
route.get('/getAllSubjectLevel',(req,resp)=>{
  showSubjectDB.getAllSubjectLevel().then((data)=>{
  	console.log(data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//获取知识点
route.get('/getAllTopics',(req,resp)=>{
  showSubjectDB.getAllTopics().then((data)=>{
  	console.log(data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//获取题目
route.get('/getAllSubjects',(req,resp)=>{
  showSubjectDB.getAllSubjects(req.query.department,req.query.type,req.query.level,req.query.topics).then((data)=>{
    console.log(data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//修改题目审核状态
route.post("/checkSubject",(req,resp)=>{
  var id=req.body.id;
  var checkState=req.body.checkState;
  //console.log(id);
  showSubjectDB.checkSubject(id,checkState).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//删除题目
route.post('/delSubject',(req,resp)=>{
  showSubjectDB.delSubject(req.body.id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//获取tal_exam_choice中content的值
route.post('/checkChoice',(req,resp)=>{
  var id=req.body.id;
  showSubjectDB.checkChoice(id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//关键字查询题干
route.post('/querystem',(req,resp)=>{
  showSubjectDB.querystem(req.body.keys).then((data)=>{
   resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});

//添加题目页面路由

//添加题目
route.post('/saveSubject',(req,resp)=>{
  // console.log("我来了");
  var analysis=req.body.analysis;
  var stem=req.body.stem;
  var topic_id=req.body.topic_id;
  var department_id=req.body.department_id;
  var subjectLevel_id=req.body.subjectLevel_id;
  var subjectType_id=req.body.subjectType_id;
  var content=JSON.parse(req.body.content);
  var time_now=new Date();
  var uploadTime =time_now.toLocaleDateString();
  //console.log("content",content);

  showSubjectDB.saveSubject(analysis,content,checkState="未审核",
    stem,department_id,subjectLevel_id,
    subjectType_id,topic_id).then((data)=>{
    console.log(data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});

//添加选项
route.post('/saveChoice',(req,resp)=>{
  var content=req.body.content;
  var correct=req.body.correct;
  var subject_id=req.body.subject_id;
  showSubjectDB.saveChoice(content,correct,subject_id).then((data)=>{
    console.log(data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  })
});
module.exports = route;