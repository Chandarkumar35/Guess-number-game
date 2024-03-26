import inquirer from 'inquirer';
const randomNumber = Math.floor(Math.random()*10+1);
 const answer = await inquirer.prompt([{
name: "userguessnumber ",
type: "number",
massage: "please guess any number from 1 to 10 ",
 }])
 if(answer.userguessnumber === randomNumber){
    console.log("congratulation you enter correct number. ");


 }else{
    console.log("try another number");
 }