# Nimble Take Home Assignment (React)
<p>
  <p>
    Thank you for your interest in Nimble! For this task, please implement a combination of React components to create a page with a list of candidates using the data found in src/data/candidates.json.
  </p>

  <p>
    Please host your code on Github (or something similar) and share the repo link via email to wgray@hirenimble.com and lauren@hirenimble.com. Good luck!
  </p>

<!-- ABOUT THE PROJECT -->
## About The Project

### Specification

1. When the user clicks a row in the list of candidates, it should expand a list of that candidate's applications. If the user clicks a row that is already expanded, it should close the list of that candidate's applications.
2. When the user clicks an application line item, bring up a modal/overlay that shows the candidate information and information specific to that application/role. Modal code has been provided in src/ui-kit/Modal.jsx, but feel free to use your own if you'd like.

### Screenshots

![Product Screen Shot - original][product-screenshot-original]

![Product Screen Shot - expanded][product-screenshot-expanded]

### Notes

- Icons have been provided in ui-kit/icons.
- Enum mapping and some colors are provided in src/utils/enums.js.
- The styled-components library is included in the package.json file, so feel free to use that for styling if you'd like.
- For the Last Updated column, moment.js is included if you want to use it, but don't worry about getting that section exactly right. Feel free to display the last updated date any way you prefer.
- When you're done, please write a quick post-mortem -- any tradeoffs you made and why, things we should look for, etc.
<br />


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these steps.

### Installation

1. Clone the repo
```sh
git clone https://github.com/NimbleHiring/coding-challenge.git
```
2. Install NPM packages
```sh
npm install
```
3. In the project directory, you can run:
```sh
yarn start
```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



<!-- CONTACT -->
## Contact

William Gray - wgray@hirenimble.com
<br />
Lauren Dachille - lauren@hirenimble.com
<br />
Sean Caetano Martin - sean@hirenimble.com



<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot-original]: public/original.png
[product-screenshot-expanded]: public/expanded.png
