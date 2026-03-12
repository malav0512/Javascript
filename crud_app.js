const express=require('express');
const app=express();
const path =require("path");
const port=4000;
const mysql=require("mysql2");

const pool=mysql.createConnection({
    host:'localhost',
    password:'Dev@123',
    user:'root',
    database:'crud_table'
});

app.set('view engine','ejs');
app.use((express.static('public')));
app.use(express.urlencoded({ extended: true }));




app.post('/insert',(req,res)=>{
    
const { enrollment_nob, applicant_name, applicant_email, gender, contact_nob, date_of_birth } = req.query;
    const query=`insert into applicant(enrollment_nob,applicant_name,applicant_email,gender,contact_nob,date_of_birth) values(?,?,?,?,?,?)`;
const result=[enrollment_nob,applicant_name,applicant_email,gender,contact_nob,date_of_birth];
pool.query(query,result,(err,data)=>{
    if(err) throw err;
    console.log(data);
     console.log("Inserted:", data);
        res.redirect('/');
})
})

app.get('/', (req, res) => {
    res.render("main page");
    
});






app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});