function renderLicenseBadge(license) {
    if (license !== 'None') {
      return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
    }
    return '';
  }
  
  function renderLicenseLink(license) {
    if (license !== 'None') {
      return `* [License](#license)`;
    }
    return '';
  }
  
  function renderLicenseSection(license) {
    if (license !== 'None') {
      return `## License
  
  This project is licensed under the ${license} license.`;
    }
    return '';
  }
  
  function generateMarkdown(data) {
    return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  If you have any questions, please open an issue or contact [${data.github}](https://github.com/${data.github}) directly at ${data.email}.
  `;
  }
  
  module.exports = generateMarkdown;
  