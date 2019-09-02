# Vagrant Multi VM Assignment

**FULL REPORT IS THE PDF IN LATEX FILES FOLDER**

## About

This is a project connecting three VM's together to form a collaborative to-do list web app.

The system consists of three Vagrant virtual machines. One VM is hosting a to-do list web app written in React. It communicates with the server VM to load, save, and delete tasks. There is another hosting a node server with an express.js API connected to a mongoDB database that serves and stores the tasks. A third uses a Node.js app and some PDF libraries to get the tasks from the server VM and print them to a PDF in list form. This VM is called from a script in the root directory of the repo.

**See GitHub issues and commit history for project work history.**

**I am implementing issue driven development somewhat, and so issues may contain features I want to add in the future.**

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

- Download and install Vagrant <https://www.vagrantup.com/downloads.html>
- Download and install Virtualbox <https://www.virtualbox.org/wiki/Downloads>

### Download and Setup Time Stats

- ~ 400MB for downloads of packages/dependencies during provisioning.

- ~ 270MB download for box file.

- Repo only 5MB (Zipped).

- `vagrant up` from scratch or `vagrant up --provision` takes 4.5 - 5 minutes to complete (this includes downloads and provisioning). Tested on University Library WiFi (50Mbps Download Speed).

- `vagrant up` any time after (without provisioning) only takes 1 minute.

### Setup & Starting

- After installing prerequisites, open up a terminal window.
- Change directory to the folder you want this project to be enclosed within.
- Then run `git clone https://github.com/bradwindy/vagrant-multi-VM.git`
- Next run `cd vagrant-multi-VM`
- The project is viewable and editable from this directory.
- The command `vagrant up` in terminal will run the project.
- You can now view the web app from <http://localhost:3001> and can enter and delete notes.

## Development

The setup for development and testing is as follows (for macOS):

### Initial Setup

- Install mongoDB by following instructions here: <https://treehouse.github.io/installation-guides/mac/mongo-mac.html>
- Install VSCode (or editor of choice): <https://code.visualstudio.com/>
- Install Node LTS version: <https://nodejs.org/en/download/>
- Open up a terminal window.
- Change directory to the folder you want this project to be enclosed within.
- Then clone the repository.
- This folder can now be opened in your editor of choice.

### Server
- First the server must be run. In a terminal window at the root directory of the project, enter `cd vm-2` which takes you to the server directory. Next enter `npm run start` to start the server.
- If any changes are made to the server code, you will need to stop the server process using Ctrl+C and restart it again using  `npm run start` before any changes are visible.

### Web App
- To run a version of the web app for development. First you must change all URLs in the code that mention the IP address and port 192.168.55.11:3000 to instead be localhost:3000
- Then open another terminal window at the root directory of the project, enter `cd vm-1` which takes you to the web app directory. Next enter `npm run start` to start the web app. Press 'y' when prompted about ports.
- The app is now viewable at: <http://localhost:3001> Changes made to any of the code in the web app directory will be automatically loaded on save.

### PDF printing program
- In a terminal window at the root directory of the project, enter `cd vm-3` which takes you to the PDF program directory. Next enter `npm run start` to run the PDF printing program.
- If any changes are made to the list of tasks, this program can just be run again to overwrite the file.

## Built With

- [MongoDB](https://github.com/mongodb/mongo) - Database used.
- [Express](https://github.com/expressjs/express) -Server/routing API for web app.
- [React](https://github.com/facebook/react) - Frontend JavaScript library.
- [Node](https://github.com/nodejs/node) - Backend JS runtime.
- [Bootstrap](https://github.com/twbs/bootstrap) - Frontend framework for website elements and styling.
- [Vagrant](https://github.com/hashicorp/vagrant) - Setup and provisioning of virtual machines.
- [Ubuntu Xenial](https://kernel.ubuntu.com/git/) - Underlying VM.

## Author

- **Bradley Windybank** - _All work_
