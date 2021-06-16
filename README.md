# Sam's Coding Challenge

### Setup Instructions:

- Open your terminal and run `git clone [ssh key here]` to clone down project
- Run `npm install` to update your packages
- Run `npm start` to start the React app locally
- Open a new terminal window, navigate to `/src/data` and run `json-server -p 5002 -w candidates.json` to start the JSON server

You should now be running the app!

### Screenshots

![Screen Shot 2021-06-15 at 8 12 22 PM](https://user-images.githubusercontent.com/42163390/122143731-a7388180-ce17-11eb-90de-bbe9cba406fa.png)
![Screen Shot 2021-06-15 at 8 15 05 PM](https://user-images.githubusercontent.com/42163390/122143735-a9024500-ce17-11eb-94a8-42131d254b9d.png)

### Notes from Sam

- With this limited time, I chose to focus on hitting MVP and create a basic file structure containing the table and modal components
- I used MaterialUI for my front-end components because it is both the React front-end framework I am most familiar with as well as includes built-in styling (great for this limited-time project)
- I used MaterialUI's modal instead of the Modal included in this file purely because I am familiar with it therefore it would be quick for me to implement in this challenge.
- I used JSON Server to serve up a fake rest API. This way I was able to make a request from the front-end to grab the data from the `candidates.json` file and parse the JSON to a javascript object
- I wish I had time to implement the Filter. I have implemented many, many tables and filters at my current company, both with redux and Context API. Happy to chat about how I would implement it.
- I did very basic styling but would have loved to add a bit more, including the red/yellow/green circle indicator next to the Statuses. Also happy to chat about how I would implement that if I had more time. I would either add a red/yellow/green `status_color` property on the backend since there are many variations of combinations of words + statuses, otherwise I would use a conditional statement on the front-end to render the correct color.




## Instructions provided:





# Nimble Technical Exercise (React)
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
- Enum mappings and some colors are provided in src/utils/enums.js.
- The styled-components library is included in the package.json file. Feel free to use that for styling if you'd like.
- For the Last Action column, moment.js is included if you want to use it, but feel free to display the date any way you prefer.
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
2. In the root directory of the repo, install NPM packages
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
