/*Adding users to DB*/
INSERT INTO auth (user,id,username,password) VALUES(1,null,'shopowner','$2a$10$pIihiWSRtvqlKAojIA7IxugI90AVW1HRY/Ljr/A6pzjNIjYaSyCwe');
INSERT INTO user (auth,id,first_name,last_name,isAdmin) VALUES(1,null,'John','Doe',true);

INSERT INTO auth (user,id,username,password) VALUES(2,null,'employee1','$2a$10$Acm1F40ohRARO.s1MG03Me6LUcTE4qvPOKVKJPPajA26xW556x7fC');
INSERT INTO user (auth,id,first_name,last_name,isAdmin) VALUES(2,null,'Jane','Doe',false);

INSERT INTO auth (user,id,username,password) VALUES(3,null,'employee2','$2a$10$rp4qJ7qcpZa1kcAzf5r6q.EXct55dCGkqElp9uT3/J.1bbnaWHKwm');
INSERT INTO user (auth,id,first_name,last_name,isAdmin) VALUES(3,null,'Steve','Rogers',false);

INSERT INTO auth (user,id,username,password) VALUES(4,null,'employee3','$2a$10$kp0e.OlkkPuXu3fYyo/fuuT5WpGxreapZPDCApAiOwaMyqy7.8BUa');
INSERT INTO user (auth,id,first_name,last_name,isAdmin) VALUES(4,null,'Biblo','Baggins',false);

INSERT INTO auth (user,id,username,password) VALUES(5,null,'employee4','$2a$10$QNxXUdfjy1CZo0Sb7UFW9uFZdqg26.HpY/2naa83Phiu4ornnNCMe');
INSERT INTO user (auth,id,first_name,last_name,isAdmin) VALUES(5,null,'Random','Guy',false);
