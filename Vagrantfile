# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.define :server do |server|
    server.vm.box = "ubuntu/xenial64"
    server.vm.network "private_network", ip: "192.168.55.11"
    server.vm.hostname = "server"
    server.vm.provision "shell", inline: <<-SHELL
      curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
      sudo apt-get update
      sudo apt-get install -y nodejs
      sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
      echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
      sudo apt-get update
      sudo apt-get install -y mongodb-org --allow-unauthenticated
      sudo service mongod start &
      sudo npm install forever -g
      cd /vagrant/vm-2
      npm install
      forever start app2.js &
      sleep 5s
    SHELL
  end

  config.vm.define :webapp do |webapp|
    webapp.vm.box = "ubuntu/xenial64"
    webapp.vm.network "forwarded_port", guest: 3000, host: 3001, auto_correct: true
    webapp.vm.network "private_network", ip: "192.168.55.10"
    webapp.vm.hostname = "webapp"
    webapp.vm.provision "shell", inline: <<-SHELL
      curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
      sudo apt-get update
      sudo apt-get install -y nodejs
      cd /vagrant/vm-1
      npm install
      nohup npm start &
    SHELL
  end

  config.vm.define :pdf do |pdf|
    pdf.vm.box = "ubuntu/xenial64"
    pdf.vm.network "private_network", ip: "192.168.55.12"
    pdf.vm.hostname = "pdf"
    pdf.vm.provision "shell", inline: <<-SHELL
      curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
      sudo apt-get update
      sudo apt-get install -y nodejs
      cd /vagrant/vm-3
      npm install
      node pdf-out.js
      mv task-list.pdf ../task-list.pdf
    SHELL
  end
end
