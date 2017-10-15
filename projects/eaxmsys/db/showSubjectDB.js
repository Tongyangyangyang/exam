let pool = require('./pool');
module.exports = {  
    //获取类型
    getAllSubjectType(){
      var sql = "select * from tbl_exam_subjecttype";
      return pool.execute(sql);
    },
    //获取方向
    getAllSubjectDepartment(){
      var sql = "select * from tbl_exam_epartment";
      return pool.execute(sql);
    },
    //获取难度
    getAllSubjectLevel(){
      var sql = "select * from tbl_exam_subjectlevel";
      return pool.execute(sql);
    },
    //获取知识点
    getAllTopics(){
    	var sql = "select * from tbl_exam_topic";
      return pool.execute(sql);
    },
    //获取题目
    getAllSubjects(did,sid,eid,tid){
       var sql = "select * from tbl_exam_subject where department_id="
       +did+" and subjectType_id="
       +sid+" and subjectLevel_id="
       +eid+" and topic_id="+tid;
      return pool.execute(sql);
    },
    //删除题目
    delSubject(id){
      var sql="delete from tbl_exam_subject where id="+id;
      return pool.execute(sql);
    },
    //审核(修改审核状态)
    checkSubject(id,value){
      var sql="update  tbl_exam_subject set checkState='"+value+"' where id="+id;
      return pool.execute(sql);
    },
    //获取选项
     checkChoice(id){
      var sql="select * from tbl_exam_choice where subject_id="+id;
      return pool.execute(sql);
    },
    //关键字查询
    querystem(keys){
      var sql="select * from tbl_exam_subject where stem like '%"+keys+"%'";
      return pool.execute(sql);
    },
//以下是添加题目页面方法（插入数据到数据库）
    //添加题干
    saveSubject(analysis,anwser,checkState="未审核",stem,department_id,subjectLevel_id,subjectType_id,topic_id){
      var sql = "insert into tbl_exam_subject values(null,'"+analysis+"','"
      +anwser.toString()+"','"
      +checkState+"','"
      +stem+"',null,"
      +department_id+","
      +subjectLevel_id+","
      +subjectType_id+","
      +topic_id+",null)";
      return pool.execute(sql);
    },
    //添加选项
    saveChoice(content,correct,subject_id){
      var sql="insert into tbl_exam_choice values(null,'"
      +content+"',"
      +correct+","
      +subject_id+")";
      return pool.execute(sql);
    }
}
