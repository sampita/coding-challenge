<br />
<p align="center">
  <h3 align="center">Nimble Take Home Assignment (React)</h3>

  <p align="center">
    Hello! Thank you for your interest in Nimble engineering. For this task, please implement a combination of React components to create a page with a list of candidates using the data found in src/data/candidates.json. See the <a href="#Specification">specification</a> and <a href="#Screenshots">screenshots</a> for more detail. Please host your code on Github and share the repo link (via email to wgray@hirenimble.com and lauren@hirenimble.com). Do as much as you can in 2 hours.
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Specification](#Specification)
  * [Screenshots](#Screenshots)
  * [Notes](#Notes)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

### Specification

1. When the user clicks a row, it should expand (or close) a list of that candidate's applications (Don't worry about schoolapplications).
2. When the user clicks an application line item, bring up a modal/overlay that shows all of the candidate information (profile information and information specific to that application/role).
3. Candidate status should reflect the candidate's furthest <i>active</i> status. An active status is a status with status type <u>not</u> equal to Archived or Offer declined.
4. If you still have time left, implement sorting or some way to filter the list of candidates, such as text search or status filtering.

### Screenshots
![Product Screen Shot - default][product-screenshot-closed]
![Product Screen Shot - expanded][product-screenshot-closed]

### Notes
1. Your components should work correctly in Chrome, don’t worry about cross-browser compatibility.
4. Don't worry about navbar functionality or filter functionality (unless you have extra time to add filters as mentioned above).
5. Don't worry about getting the colors or styles exactly right, but please try to make the UI similar to the screenshots.
6. When you're done, please write a quick post-mortem on how you approached the problem, what tradeoffs you made and why, things we should look for, etc.

### Bonus points
1. Using React hooks
2. Using Styled Components for css
3. Additional functionality such as sorting, search, or filtering.



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* [Node >= 8.10 and npm >= 5.6](https://nodejs.org/en/)
```sh
npm install npm -g
```

### Installation

1. Clone the repo
```sh
git clone https://github.com/NimbleHiring/coding-challenge.git
```
2. Install NPM packages
```sh
npm install
```



<!-- USAGE EXAMPLES -->
## Usage

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).



<!-- CONTACT -->
## Contact

William Gray - wgray@hirenimble.com
Lauren Dachille - lauren@hirenimble.com
Angela Rodriguez - angela@hirenimble.com



<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot-closed]: public/closed.png
[product-screenshot-expanded]: public/expanded.png
