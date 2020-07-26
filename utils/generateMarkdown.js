// function to generate markdown for README
function generateMarkdown (data) {
  const {
    title,
    description,
    installation,
    usage,
    credits,
    license,
    github,
    email
  } = data

  return `# ${data.title}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description
  ${description}
  ## Installation
  ${installation}
  ## Usage
  ${usage}
  ## Credits
  ${credits}
  ## License
  This application is covered wtih a ${license} license
  ## Tests
  ## Questions
  * Checkout my GitHub profile: ${github}
  OR  
  * Email me at: ${email}
`
}

module.exports = generateMarkdown
