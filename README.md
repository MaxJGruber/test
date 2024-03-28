# SDG Index Technical Test

## The scope of the test

- You have to create a Pull Request on GitHub with your version of the assignment (_marked with your name_).
- This assignment should not take more than 4 hours.
- Do not stress. The evaluation parameters evolve past the realm of success or failure in completing this assignment. Understand by this that we will be judging your abilities to understand documentation, your design skills, and especially your ability to write "clean" code and so, if you don't complete the full assignment, we will still evaluate you on what you have completed.

## The assignment

You will be granted access to a GitHub repository to use as the basis for your code.
With the help of this data visualization template, you will:

1. Make an API GET request to the _Unstats_ database to get the bio information of all _17 Sustainable Development Goals_
2. Render the _17 Sustainable Development Goal_ Icons and the information/data you have collected from the API call. In the content section of the template.
   Here: ![here](/public/static/readme/content-section.png)
3. **BONUS:**

- Make an API GET request to get your 3 favorite Pokemons from the Pokemon API
- Display the three Pokemons with their respective name in the drawer
  Here: ![here](/public/static/readme/drawer-section.png)

4. **EXTRA BONUS: (optional)**

- Write 3 Cypress tests inside `./cypress/e2e/index.cy.js` that check the desired behavior of your code. _It can about anything! The validity of a background color of a div, does a certain title or text display correctly?, do the right amount of goals show up?_

## Useful links

Link UNSTATS API Documentation: [https://unstats.un.org/SDGAPI/swagger/](https://unstats.un.org/SDGAPI/swagger/)
Link to where you will find all the Pokemons! [https://pokeapi.co/](https://pokeapi.co/)

## Support

First of all, if you encounter any issues with the setup or something unfamiliar in our Next.Js configuration, please let us know ASAP. We'd be happy to schedule a quick call to walk you through aspects you might not know (totally OK to not know everything).

### Initial setup

Clone the repository locally using `git clone`.
Install dependencies with `npm install` or `npm i`
Run your localhost in the browser with `npm run dev`

### Help with the SDG icons

The _white_ SDG icons can be found in the public/static/icons/goals folder in the repo.
![here](/public/static/readme/icon-folder.png)

You'll be able to render the matching background color of each icon with the help of a function from our _sdgindex npm package_ called `getColor`([link](https://code.sdgindex.org/file/src/sdgs/getcolor.js#lineNumber8)).

### For the API call setup

Next has a very smooth way of loading props at page load thanks to a method called `getStaticProps` ([link](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props)). I have added an empty function so you know where to write this code in the repository:
I have already installed `axios` as a dependency to make your API requests but feel free to use any method you feel the most comfortable with.

### For styling

You will see that there are examples of syntax spread across the repository of how to style components (more info on this [here](https://emotion.sh/docs/styled)). The design is **ENTIRELY** up to you!

### The floor is yours!

Install whichever dependencies you need or feel comfortable using.
Use what design seems right for you.
Originality can be a key factor to distinguish yourself from other candidates.

### What are we looking for?

**Remember:**

- You will be evaluated on _HOW_ you display as much as your ability to display the data!
- Write **DRY** (Don't Repeat Yourself) code and use full advantage of React's component based programming.
- Comment your code where you feel it is necessary.
- **COMMIT WELL! :D**

## Handing in your assignment

In your Pull Request, please give us a brief (4-5 line) summary of what challenges you faced and if you managed to resolve all your issues.

**HINT:** Once you open a Pull Request on this repository, our team [Netlify](https://www.netlify.com/) Account automatically deploys your build which gives you a chance to see if your code is working in production as well as in development.

Once again, please contact us if you have any issues with the setup or if you need any further explanations. We want you to have all the cards to ace this test!
