**USEFUL INFORMATION**
- npm: Is a node package manager 

*Compiling/Transpiling:*
- Use Babel to compile newer JS/React projects into backwards compatible JS projects
- Use Parcel (build tool) to utilize Babel in your project
- <https://babeljs.io/docs/en/>

*Packaging/Bundling:* 
- Use Parcel Bundler to package all JS code into a single JS file. <https://parceljs.org/>
- Browsers generally don't understand imports and exports within JS ... a bundler like Parcel handles packaging all the JS code into one overall JS script for the browser
- This makes it simpler for browsers to read your JS code and also generates a distributed project directory separate from the code
- Make sure to update the package.json to update the start script w/ the parcel command: "scripts": {"start": "parcel index.html"}

*Live Server*
- Can use live-server (through npm) to host a minimalistic live server for hosting our React web app
- This can be integrated into the package.json and start script to use live-server upon build, compile, and dist our project 
- Example following:
"scripts": {
    "dev": "parcel src/index.html",
    "build": "parcel build src/index.html",
    "start": "npm run build && live-server dist"
}

**USEFUL COMMANDS**

*Initialize a Project using Node JS:*
- npm init -y

*Auto Create a React App (Generates Base React Code)*
- npm create-react-app <project-name>

*Install Dependent Libraries:*
- npm i parcel@2.7.0 --save 
- npm i react@18.2.0 react-dom@18.2.0 --save
- npm i live-server@1.2.2 --save 

*Start a React Project:*
- npm run start