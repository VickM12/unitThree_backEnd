Spoofy (Music playlist app)

B-Dev
Team Members:

Vicktor Moberg - Lead Dev
Samuel Cherisme - Lead Front-End Dev
Brian Bickes - Lead Back-End Dev

## Steps

**Install Gulp Globally**
```bash
npm i -g gulp-cli
```

**Start the dev server**
```bash
npm run dev
```
### or
```bash
yarn dev
```

**Start the dev server with proxy**
```bash
npm run proxy
```

**Build files for production**
```bash
yarn build
```
### or

```bash
npm run build
```

**Deploy for production script**
```bash
npm start
```
### or
```bash
yarn start
```
=======
Team: Vicktor Moberg, Samuel Cherisme, Brian Bickes. 

Technologies Used: 

This project is a full MERN stack utilizing Node.JS, Express, React and Mongoose. We used Mongoose as our database, storing users login name and passwords and using bcrypt ot hash the passwords to safely ensure that user's passwords can't be viewed by others. We also use mongoose to store the information for user inputted information about their favorite artists and tracks. We are pulling from an external API for users to search for various artists and tracks that they can implement into their favorites section. 

Approach Taken: 

Our initial approach for this project was for users to pull information from the API and be able to add the information directly from the API into their favorites such as favorite artist and favorite track. Unfortunately, we had difficulties getting this to work and switched to users manually inputting their favorite artists and tracks into the favorites section and using the API as more of a search functionality for users to find tracks related to their favorite artists for example. 

Unsolved Problems: 


