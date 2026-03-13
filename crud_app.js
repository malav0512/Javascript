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
app.use(express.json());


app.get('/add-applicant', (req, res) => {
    
    res.render('crud'); // 'crud' is your EJS filename
});

app.get('/delete-applicant',(req,res)=>{
    
    res.render('delete');
})
app.get('/', (req, res) => {
    res.send("main page");
    
});
app.post('/delete',(req,res)=>{
    console.log("email",req.body.applicant_email);
    const email=req.body.applicant_email;
    const query=`delete from applicant where applicant_email=?`;
    pool.query(query,[email],(err)=>{
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).send("Database deletion failed.");
        }
    });
    res.redirect('/');
})


app.post('/insert',(req,res)=>{
    console.log("form data:",req.body)
const { enrollment_nob, applicant_name, applicant_email, gender, contact_nob, date_of_birth } = req.body;

    const query=`insert into applicant(enrollment_nob,applicant_name,applicant_email,gender,contact_nob,date_of_birth) values(?,?,?,?,?,?)`;
const result=[enrollment_nob,applicant_name,applicant_email,gender,contact_nob,date_of_birth];
pool.query(query,result,(err,data)=>{
     if (err) {
            console.error("Database Error:", err);
            return res.status(500).send("Database insertion failed.");
        }
    console.log(data);
     console.log("Inserted:", data);
        res.redirect('/');
})
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});