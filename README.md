# TECH used in my Facebook Clone Personal Project build

1) React + React Hooks
2) React context API --> REDUX pattern
3) Material UI
4) Flexbox
5) Firebase's Firestore realtime Database
6) Firebase Hosting
7) Firebase Google Authentication (Full login!)
8) React flip move


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

1) npm install
2) npm start

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# My personal notes in developing this facebook clone project:
Make use of Widgets.js from facebook clone app

The reason why we delete some files is because we don't actually want anything on our build initially
we want like a clean canvas. Image you're about to paint something, you don't want anything on your
canvas. You want it to be completely clean. That's why we go ahead and delete those files

firebase.js file - we are going to be needing this file and this config file to actually go ahead and
set everything up later on.

Is it safe to put your firebase config in the frontend?

It is completely safe to do it as firebase has some protective security measures in place

Material-ui - is a library for css and the cool thing about it is that it's one of the most popular
css libraries. It brings really pristine really nice and clean icons that develipers can use. We can
get the snippets of code and then you can start using them on your projects 

flex - It will make everything go into a row

15px 20px; - 15px is top and bottom, 20 on left and right

justify-content: space-between - push all the elements apart from each other 


Bootstrap - it's very good if you have a lot of clients and you just need to get work out. You have
two problems with bootstrap in my opinion, one i tend to wrestle with it when i'm using flexbox.
I just prefer to use straight up flexbox as i can get the exact design i want as opposted to like near
the design that i want. Also the second thing is bootstrap kinda has a look to it like i know when 
a website's built with bootstrap whereas you just built it with just pure flexbox it has like a custom
clean finish to it.

Angular is a framework and React is a library. React is much easier to learn as it's much lighter weight
. It's also very performant and it's very fast. Your entry to get into the career is much easier than
angular and the job market is higher right now in react and the overall salary is higher in react.

Do i need to make html-css skills super
When i started learning react, my css skills sucked but i focused learning react and sort of the 
fundamentals behind it that's going to be a lot more important. Follow all these builds and my css
will naturally get better through pattern recognition. 

//Props - receive props inside of react, we can pretty much pass in different
//attributes so here if i passed in a title, for example: this one could be
//Instead of saying row what we could do is we could say props.title

/* MuiSvgIcon-root is what the icons get given as a class name by default */
.sidebarRow > .MuiSvgIcon-root

iframe - pulling the information live from facebook and it's actually working dynamically.

"storyReel" - camel casing

make whole page background color - height: 100vh;

flex-direction: column;

iFrame - is simply basically imagine like you had another tab open and you had a website on that tab but imagine
you're basically just rendering that just in a portion of your web page so it's like embedding another web page
into your web page.

<> </>
Whenever there are sibling components, we need to wrap it in either a div or a fragment so this is a jsx fragment.

/* grid is a neat trick to getting anything centered in vertically and horizontally*/

Data layer REDUX VS React Context API
It's the implementation effort. REDUX is extremely powerful but it's much more difficult to implement whereas
react api is extremely easy to implement but they both use the same pattern so there is overlap. 

When we log in every time, we push the user into the data layer then basically what happens is once they're
inside the data layer, we can access them inside of any component.

How do you maintain the user logged in even if we refresh the page?
We have to use the token to keep the persistence of the user

Firebase Collection - Think it this way, a collection is just like an array of objects. This case we have each
document so if i added more here it would resemble a post. 

useEffect - // This is a very powerful piece of code and what this does is by putting 
    // keeping [] empty, what it does is it only runs the code once the feed 
    // component loads 

snapshot is basically like a real time snapshot which means when basically anything is updated, added, changed.
 Anything inside this collection it will give us the real time sort of snapshot Example: you got a camera,
 you take a picture of it at that real time point and then actually go ahead and pull it into the code
