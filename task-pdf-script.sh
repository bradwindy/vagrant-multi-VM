#!/bin/bash

vagrant ssh pdf -- -t 'cd /vagrant/vm-3; node pdf-out.js; sleep 2; mv task-list.pdf ../task-list.pdf; exit'
echo Done