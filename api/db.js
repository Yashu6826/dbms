import mysql2 from "mysql2"

export const db = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"yashraj@321",
    database:"blog"
});
db.connect((err)=>{
    if (err){ 
        throw err;
        console.log(err);
    }
    console.log("Connected to mysql!");
  });