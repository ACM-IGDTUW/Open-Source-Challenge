This article will give a brief of how the submissions for this challenge will be made. They will follow the basic protocol of how it works for Open Source so that you can get an idea of how a pull request is made.

The Issues in this repo that have the label `Open Source Challenge` are the issues that you all will be working to solve. The issues will further give a step by step explaination of what is expected to be done, but they will all follow the same format for submission of a pull request as given here.

You are required to have installed git to move any further. You should also look through the installations process in the [README.md](https://github.com/ACM-IGDTUW/Open-Source-Challenge/blob/master/README.md) to see how the code is to be run locally.

The steps are:

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
* Go to your fork and look for the branch that you have just pushed. You will see a `compare and create pull request` button. Click on this button and submit the pull request for review.
* Once your pull request is reviewed by us, you will be awarded the points for finishing that particular pull request.  
Note: In your pull request, please mention the issue it is made for. For e.g. if the issue number was #5 then add a line that says `for #5` in your PR description. This will help us keep track of what your pull request is for.

If you come across any problems in any of the steps above, feel free to create an issue here so we can help you out! This article is made so detailed to help out all the new comers to this communtiy! We hope you have a good learning experience.
