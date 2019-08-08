# Vagrant Multi VM Assignment

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
