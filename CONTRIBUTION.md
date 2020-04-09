# Contribution Guide

This article will give a brief of how the submissions for this challenge will be made. They will follow the basic protocol of how it works for Open Source so that you can get an idea of how a pull request is made.

The issues in this repo that have the label `Open Source Challenge` are the issues that you all will be working to solve. The issues will further give a step by step explaination of what is expected to be done, but they will all follow the same format for submission of a pull request as given here.

You are required to have installed git to move any further. After that install the project as guided below.

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
node index.js
```
This command is required to start the server. You can also run `npm start` instead.

* Now go to http://localhost:3000/ on your browser to see it running!

* To terminate the node, in your terminal press `ctr+C` for Windows or `cmd+c` for Mac.
  
Every time you make any change to any of the files in the project, you will have to terminate the node and restart the application to see those changes take effect. An alternative to this is installing `nodemon` which can be done by running
```sh
npm install -g nodemon
``` 
in your terminal.  
  
Once installed, you can run the application by running the command `nodemon` inside your project directory. `nodemon` is a npm package that keeps track of the changes made into a project code. Everytime the change is on the server side i.e. the backend, the `nodemon` restarts the server and then you refresh. On the other hand, if the change is in the front end, all you have to do is refresh the page. The termination process will remain the same.

### Testing

To test your code, so as to ensure that it does not break the server, run `npm test`.

## Creating a Pull Request

* Create a fork of this repo. It is the button on top right of the repository.

* Now make a local clone of this fork in your computer. You can do this by running:
```sh
git clone https://github.com/<username>/Open-Source-Challenge.git
```

* Enter the project directory using
```sh
cd Open-Source-Challenge
```

* Now create a branch so that you do not make changes to the default branch of the repository (Here it is the `master` branch). This is an important step as it is expected of you to not make any commits to your master branch of the fork. This keeps the history clean for you and avoids any future merge conflicts. If you want to learn more about it you can google what a branch does. Now to create this branch, run the following command in your terminal:
```sh
git checkout -b <new-branch-name>
```

* Now make all the changes corresponding to the issue you are solving in this branch.

* Once you have made the changes and tested the code to see if it runs, you will have to commit it so that it can be recorded in the history. You can do this by running:
```sh
git add .
git commit -m "commit message"
```
Here the `git add .` checks for all the files that have changes made to the them and adds it to the staging area. However if you only want to commit some files and not all that have been changed, you can do this by doing a `git add <file-name>` for each of those files.

* Once you have committed the changes, you will need to push it to your fork to make a pull request. You can do this by running:
```sh
git push origin <branch-name>
``` 
This will prompt you for your github user name and password for authorization.  
Note that if its your first time committing, you will be asked to first config git using the commands `git config --global user.name` and `git config --global user.email`. This is required to keep track of which person the commit is made by.

* Go to your fork on github. You will see a message that says a new branch has just been pushed. On the side of that message there will be a `compare and create pull request` button. Click on this button and submit the pull request for review.

* Once your pull request is reviewed by us, you will be awarded the points for finishing that particular pull request.  

Note: In your pull request, please mention the issue it is made for. For e.g. if the issue number was #5 then add a line that says `for #5` in your PR description. This will help us keep track of what your pull request is for.

If you come across any problems in any of the steps above, feel free to create an issue here so we can help you out! This article is made so detailed to help out all the new comers to this communtiy! We hope you have a good learning experience.
