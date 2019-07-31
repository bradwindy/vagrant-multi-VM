# Vagrant Multi VM Assignment

## About

This is a project connecting several VM's together to form a collaborative to-do list web app.

There is currently one VM hosting a to-do list web app written in React. There is another hosting a node server with an express.js API connected to a mongoDB database that serves and stores the tasks. A third will have some form of print to pdf tool or some similar bulk processing of forum posts/notes.

**See GitHub issues and commit history for project work history.**

**I am implementing issue driven development somewhat, and so issues may contain features I want to add in the future.**

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Download and install Vagrant <https://www.vagrantup.com/downloads.html>
- Download and install Virtualbox <https://www.virtualbox.org/wiki/Downloads>

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

- **Bradley Windybank** - *All work*
