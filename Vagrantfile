# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.define :alpha do |alpha|
    alpha.vm.box = "ubuntu/xenial64"
    alpha.vm.network "private_network", ip: "192.168.55.10"
    alpha.vm.hostname = "alpha"
  end

  config.vm.define :beta do |beta|
    beta.vm.box = "ubuntu/xenial64"
    beta.vm.network "private_network", ip: "192.168.55.11"
    beta.vm.hostname = "beta"
    beta.vm.provision "shell", inline: <<-SHELL
      curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
      sudo apt-get install -y nodejs
      sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
      echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
      sudo apt-get update
      sudo apt-get install -y mongodb-org --allow-unauthenticated
      sudo service mongod start &
      cd /vagrant/vm-2
      node app2.js &
    SHELL
  end
end

# How to operate these! 
# Can currently use curl 192.168.55.11:3000 from either alpha vm or host and get hello world back