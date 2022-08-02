const inquirer = require("inquirer");
let fs = require("fs");
const gen_html = require("./html-gen");


function Co_info(name,position,id, email,github){
    this.name = name;
    this.position = position;
    this.id = id;
    this.email = email;
    this.github = github;
}

const questions= [
    "what is your name?",
    "what is your ID?",
    "what is your email?",
    "waht is your user name in github?",
    "select your position.!"
]

let users = [];

function call_questions(){
    const dataSheet = new Promise((resolve,reject)=>{
        inquirer.prompt([
            {
                type:"input",
                name: "name",
                messege: questions[0]
            },
            {
                type:"list",
                name: "position",
                messege: questions[4],
                choices: ["Manager","Engineer","Intern"]
            },
            {
                type:"input",
                name: "id",
                messege: questions[1]
            },
            {
                type:"input",
                name: "email",
                messege: questions[2]
            },
            {
                type:"input",
                name: "github",
                messege: questions[3]
            }
        ]).then((data=>{
            resolve(data);
        }))

    });

    dataSheet.then((data)=>{
        const person = new Co_info(data.name,data.position,data.id,data.email,data.github);
        console.log(person);
        users.push(person)
        inquirer.prompt([
            {
                type:"list",
                name:"questions",
                message: "Would you like to add another user?",
                choices:["yes","no"]
            }
        ]).then((data)=>{
            if (data.questions === "yes"){
                call_questions()
            }else{
                console.log('thanks for using the app');
                console.log(users);
                fs.appendFile("Team-rock.html", gen_html(users),(err)=>
                err?console.log(err):console.log('todo bien'))
            }
        })
     })
    .catch((err)=>console.log(err));
}

call_questions();

module.exports = Co_info;






