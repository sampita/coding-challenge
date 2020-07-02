<p>
  <h3>Nimble Take Home Assignment (React)</h3>

  <p>
    Hello! Thank you for your interest in Nimble engineering. For this task, please implement a combination of React components to create a page with a list of candidates using the data found in src/data/candidates.json.
  </p>

  <p>
    Do as much as you can in 3 hours. Please host your code on Github and share the repo link (via email to wgray@hirenimble.com and lauren@hirenimble.com).
  </p>
</p>



<!-- ABOUT THE PROJECT -->
## About The Project

### Specification

1. When the user clicks a row, it should expand a list of that candidate's applications (Don't worry about schoolapplications). If the user clicks a row that is already expanded, it should close.
2. When the user clicks an application line item, bring up a modal/overlay that shows all of the candidate information and information specific to that application/role. Some modal code has been provided in ui-kit, but feel free to use your own if you'd like.
3. Candidate status should reflect the candidate's furthest <i>active</i> status. An active status is a status with status type <u>not</u> equal to Archived or Offer declined. Furthest status is determined by ```application.new_status._order```.
4. Please try to make the list UI as close as possible to the screenshots.
5. If you still have time left, implement sorting or some way to filter the list of candidates, such as text search or status filtering.

### Screenshots

![Product Screen Shot - original][product-screenshot-original]

![Product Screen Shot - expanded][product-screenshot-expanded]

### Notes

1. When in doubt, make an executive decision.
2. Your components should work correctly in Chrome, don’t worry about cross-browser compatibility.
3. Icons have been provided in ui-kit/icons.
4. When you're done, please write a quick post-mortem on how you approached the problem, what tradeoffs you made and why, things we should look for, etc.

### Bonus points
1. Use React hooks
2. Use Styled Components for css
3. Add additional functionality such as sorting, search, or filtering by status.
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
Angela Rodriguez - angela@hirenimble.com



<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot-original]: public/original.png
[product-screenshot-expanded]: public/expanded.png
