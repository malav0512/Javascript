const express=require('express');
const app=express();
const port=8080;
const path=require('path');
const mysql=require('mysql2');

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const pool=mysql.createConnection({
    host:'localhost',
    password:'Dev@123',
    user:'root',
    database:'job_application'
});
app.get('/',(req,res)=>{
    res.render("Job_Application_Task/form");
});
app.post('/',(req,res)=>{
    let{first_name,last_name,designation,add_one,email,add_two,phone,city,state,gender,zip_code,relationship,dob,coursearr,boardarr,passing_yeararr,resultarr,company_namearr,from_datearr,to_datearr,packagearr,reasonarr,rconatct_nobarr,rcontact_namearr,languagearr,tech,namearr,contactarr,relationarr,preferedloc,noticeperiod,expect_ctc,current_ctc,dept}=req.body;
    console.log(req.body);
    

})


app.listen(port,()=>{
    console.log(`Listening on http://localhost:${port}`);
});
