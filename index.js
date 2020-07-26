const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user
const questions = [
  // # Your Project Title
  {
    type: 'input',
    name: 'title',
    message: 'Pls enter your project title? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true
      } else {
        console.log('Please enter your project title!')
        return false
      }
    }
  },

  // ## Description
  {
    type: 'input',
    name: 'description',
    message: 'Pls enter description of your project? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true
      } else {
        console.log('enter description of your project!')
        return false
      }
    }
  },
  // ## Table of Contents

  // * [Installation](#installation)
  // * [Usage](#usage)
  // * [Credits](#credits)
  // * [License](#license)

  // ## Installation
  {
    type: 'input',
    name: 'installation',
    message: 'Pls enter installation steps of your project? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true
      } else {
        console.log('enter installation steps of your project!')
        return false
      }
    }
  },
  // ## Usage
  {
    type: 'input',
    name: 'usage',
    message: 'Pls provide usage example? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true
      } else {
        console.log('Pls enter usage example!')
        return false
      }
    }
  },
  // ## Credits
  {
    type: 'input',
    name: 'credits',
    message: 'Pls enter list of your collaborators? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true
      } else {
        console.log('Pls enter list of your collaborators!')
        return false
      }
    }
  },
  // ## License
  {
    type: 'checkbox',
    name: 'license',
    message: 'Pls provide information on licensing? (Required)',
    choices: [
      'MIT',
      'ISC',
      'GPL',
      'Apache License 2.0 (Apache-2.0)',
      'Mozilla Public License 2.0 (MPL-2.0)'
    ]
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter the GitHub link to your project. (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true
      } else {
        console.log('Please enter description of the project!')
        return false
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter the your email. (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true
      } else {
        console.log('Please enter your email!')
        return false
      }
    }
  }
]

// function to write README file
function writeToFile (fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) throw new Error(err)
    console.log('Page created! Check out fileName in this directory to see it!')
  })
}

// function to initialize program
function init () {
  inquirer.prompt(questions).then(readmeData => {
    const data = generateMarkdown(readmeData)
    console.log(data)
    writeToFile('./outdir/readme.md', data)
  })
}
// function call to initialize program
init()
