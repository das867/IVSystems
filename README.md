# IVSystems
SWE Spring 2016 Project - Menu Driven Inventory Management

# Getting Started
Vagrant
 * Follow download instructions for Vagrant and virtualbox
 * 'Git clone' the project from bitbucket.
 * 'vagrant init' inside the project root directory. This will create a base Vagrantfile.
 * Configure the Vagrantfile with these settings:

```
   config.vm.box = "bento/centos-7.1"
   config.vm.provision :shell, path: "bootstrap.sh"
   config.vm.network "forwarded_port", guest: 4200, host: 4200
   config.vm.network "forwarded_port", guest: 49153, host: 49153
   config.vm.network "forwarded_port", guest: 1337, host: 1337
```  
  replacing these base settings:

```
    config.vm.box = "base"
```

  everything after these settings should be commented out.

 * 'vagrant up' this will download the vagrant vm locally and set up your box accordingly.
 * 'vagrant ssh' to enter your virtualbox.
 * 'cd /vagrant' to move to project root folder.

# After downloading everything...
 * Make sure to have the newest version of ember 2.2.0 atleast
   * NODE 4.2.2
   * NPM 2.14
 * check that sails is atleast 0.11.2

# Installing Dependencies
```
    cd client
    npm install
    bower install

    cd ..
    cd server
    npm install
```
Things should now be ready to run

# Getting things finished off
 To get both Ember and Sails server going open two terminal windows and vagrant ssh into both
 In one
 ```
     cd /vagrant/client
     ember serve --watcher polling
 ```
 In the other
 ```
     cd /vagrant/server
     sails lift 2
 ```
  I can explain more later if needed but look at Vagrant, Ember, and Sails to familiarize yourself with the tech we are using

# MYSQL
To secure MYSQL we need to run
```
     sudo mysql_secure_installation
```
and set root password to root(when first asked just hit enter) and answer yes to the rest of the questions.  Next you need to create the DB in MYSQL. To do this
```
    mysql -u root -p

    create schema comicBookShop;
```
# Closing Vagrant
In order to prevent wiping everything, use
```
    vagrant halt
```
to prevent completely wiping your DB.
To get it back up and running after halting it just run
 ```
    vagrant up
```
