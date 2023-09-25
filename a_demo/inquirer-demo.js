import inquirer from "inquirer"

inquirer.prompt([
  {
    type: 'input',
    name: 'username',
    message: 'what is your username?'
  },
  {
    type: 'password',
    name: 'password',
    message: 'what is your password?'
  }
])
  .then(answer => {
    console.log(answer)
  })


