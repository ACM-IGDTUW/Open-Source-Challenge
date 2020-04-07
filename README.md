# Open-Source-Challenge
Advaya'20 brings to you the Open Source Challenge. This will be a series of tasks provided to the participants to help them learn more about the ways of Open Source! Each task will have allotted points which will be awarded to all the participants that successfully complete the task. Everyday a new set of taks will be added. The participant with the highest points by the end of the Advaya'20 Tech Week will be the winner.  

For any issue, please create an issue in this repository and we will get back to you soon!

## Installation

### Requirements
* Node.js
* npm

You can follow this [article](https://phoenixnap.com/kb/install-node-js-npm-on-windows) for installation in Windows or this [article](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/#installation-on-a-mac-or-linux) for Mac or Linux. These articles provide a guide for installation of both Node.js and npm in the respective OS environments.

### Steps
* Fork the repository
* Clone the fork into your pc  
```sh 
git clone https://github.com/<username>/Open-Source-Challenge.git
```
* Inside the project directory in your terminal, run  
```sh 
npm install
```
This step installs all the dependencies into a new folder `node_modules`.
* Once all the dependencies are installed successfully, run
```sh
node app.js
```
* Now go to http://localhost:3000/ on your browser to see it running!
* To terminate the node, in your terminal press `ctr+C` for Windows or `cmd+c` for Mac.
  
Every time you make any change to any of the files in the project, you will have to terminate the node and restart the application to see those changes take effect. An alternative to this is installing `nodemon` which can be done by running
```sh
npm install -g nodemon
``` 
in your terminal.  
Once installed, you can run the application by running the command `nodemon` inside your project directory. `nodemon` is a npm package that keeps track of the changes made into a project code. Everytime the change is on the server side i.e. the backend, the `nodemon` restarts the server and then you refresh. On the other hand, if the change is in the front end, all you have to do is refresh the page. The termination process will remain the same.

### Testing

To test that your code does not break the server, run `npm test`.

## Participation

This contest will contain several issues that will come with some allotted points. For each issue, there will be a detailed explaination of what is to be done and how it is to be done. To look through the tasks that are given, please look through the issues in this repository that have an `Open Source Challenge` label. Once you solve an issue and submit a PR regarding the same, points will be allotted to you on the basis of your PR. For detailed instructions look [here](To be added).

For participating in this contest, please go through the [Contribution guidelines](https://github.com/ACM-IGDTUW/Open-Source-Challenge/blob/master/CONTRIBUTION.md) in order to get a gist of how to submit a PR. Once you have read that, you can start looking through the issues right away!
