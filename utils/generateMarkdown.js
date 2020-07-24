// function to generate markdown for README
function generateMarkdown (data) {
  const { title, description, installation, usage, credits, license } = data

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
  * Checkout my GitHub profile: https://github.com/learnantino
  OR  
  * Email me at: learnantino@email.com
`
}

module.exports = generateMarkdown
