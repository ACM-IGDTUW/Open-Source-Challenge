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
  
Every time you make any change to any of the files in the project, you will have to terminate the node and restart the application to see those changes take effect. An alternative to this is installing nodemon which can be done by running
```sh
npm install -g nodemon
``` 
in your terminal.  
Once installed, you can run the application by running the command `nodemon` inside your project directory. Now all you have to do is refresh the localhost in your browser to reflect the changes you have made. The termination process will remain the same.
