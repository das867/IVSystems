#/usr/bin/env bash

curl --silent --location https://rpm.nodesource.com/setup_4.x | bash -
yum -y install nodejs
yum install -y gcc-c++ make
sudo yum -y install gcc
sudo yum -y install git
wget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm
sudo rpm -ivh mysql-community-release-el7-5.noarch.rpm
yum update 
sudo yum -y install mysql-server
sudo systemctl start mysqld
sudo npm install -g bower
sudo npm install -g ember-cli@2.2.0-beta.1
sudo npm install -g sails@0.12.0
