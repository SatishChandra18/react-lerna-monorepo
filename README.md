MonoRepos

React - Lerna Set Up Steps with server-api
1.	Create a folder lerna-monorepo
2.	npx create-react-app web-client
3.	npm i -D lerna (to install lerna) 
4.	npx lerna init (to initialize lerna)

If you are getting  error:
Then can run : npx lerna init --packages="packages/*"

5.	Move web-client folder in the packages folder
6.	Now can create server folder
•	Switch to create new folder 
cd .\packages\
mkdir server-api
7.	Switch to server-api folder and run: npm init –yes to initialize a package.json
8.	Create index.js file
9.	Install dependencies to run your node js code
•	npm install express body-parser
10.	Run command to remove node modules from sub folders, only keep it at root folder:
•	npx lerna clean -y
11.	To install dependencies at root level:
•	Delete existing node modules folder and as well package lock file
•	Paste below code from lerna json file in package json file.
 "workspaces": [
    "packages/*"
  ],


12.	Add in package.json of server folder
  "scripts":{
    "start": "node index.js",
    "test": "echo testing node server",
  }

13.	Add in package.json of root folder

  "scripts":{
   "start": "lerna run start",
    "test": "lerna run test",
    "new-version":"lerna version --conventional-commits --yes",
    "diff":"lerna diff"
  }

14.	Run at root level : npm run test
This will run test for both packages



React - Lerna Set Up Steps with common folder
1.	Create a folder lerna-monorepo
2.	npm i -D lerna (to install lerna) 
3.	npx lerna init --packages="packages/*"
4.	In lerna json file
"packages": [
    "packages/*"
  ],

In package.json file
"workspaces": [
    "packages/*"
  ]


5.	In packages folder create 
Web folder by : 
npx create-react-app web --template typescript

and,
common folder in same way

6.	Append ‘@demo/’ in name property in each of package json files 
7.	Add button component in common folder and refer the same in app js
8.	Export button component through index.js
9.	To use button component in web folder instead of common
In web folder,
•	Import button component in app.tsx
•	When you run server in we folder you will see error – ‘cannot find module’
•	To add dependency of common in web folder run:
               npm install @demo/common -w @demo/web
•	If still seeing same error , pls add in package json of common , main entry point:
"main": "./src/index.tsx",
•	If still seeing error install craco as dev dependency in web folder
Create React App Configuration Override
CRACO Customize your configurations ESLint, Babel, PostCSS, and many more with just a single configuration file at the root of your project.
Add crack.config.js file in web.



  
