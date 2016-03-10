/*id:DS.attr(),
price:DS.attr(),
name:DS.attr(),
lineitems:DS.hasMany('line-item'),
tags:DS.hasMany('item-tag'),
vendor_id:DS.belongsTo('vendor'),
brand:DS.belongsTo('brand'),
collects:DS.hasMany('item'),
//For Trades
trade:DS.attr('boolean'),
vol_num:DS.attr(),
Illustrators:DS.hasMany('illustrator'),
Writers:DS.hasMany('writer'),
quanity:DS.attr(),
bindingType:DS.attr(),
//For apparel
apparel:DS.attr('boolean'),
size:DS.attr(),
gender:DS.attr(),
//For Comics
comic:DS.attr('boolean'),
issue_num:DS.attr(),
includedIn:DS.hasMany('item'),
subscriptions:DS.hasMany('subscription_box'),
//For Figures
figure:DS.attr('boolean'),
figureType:DS.attr(),
materialType:DS.attr(),
//For games
game:DS.attr('boolean'),
gameType:DS.attr(),*/


/*Create Some Comics*/
INSERT INTO item (id,price,name,trade,apparel,comic,figure,game,issue_num) VALUES ('838383904','4.00','Civil War',false,false,true,false,false,'1');
INSERT INTO item (id,price,name,trade,apparel,comic,figure,game,issue_num) VALUES ('393849302','5.00','Civil War',false,false,true,false,false,'2');
INSERT INTO item (id,price,name,trade,apparel,comic,figure,game,issue_num) VALUES ('857393948','4.00','Civil War',false,false,true,false,false,'3');
INSERT INTO item (id,price,name,trade,apparel,comic,figure,game,issue_num) VALUES ('398584940','3.50','Civil War',false,false,true,false,false,'4');
INSERT INTO item (id,price,name,trade,apparel,comic,figure,game,issue_num) VALUES ('867499494','6.00','Civil War',false,false,true,false,false,'5');
INSERT INTO item (id,price,name,trade,apparel,comic,figure,game,issue_num) VALUES ('486940868','3.00','Civil War',false,false,true,false,false,'6');
INSERT INTO item (id,price,name,trade,apparel,comic,figure,game,issue_num) VALUES ('485994838','5.67','Civil War',false,false,true,false,false,'7');
INSERT INTO item (id,price,name,trade,apparel,comic,figure,game,issue_num) VALUES ('484994983','4.46','Justice League',false,false,true,false,false,'1');
INSERT INTO item (id,price,name,trade,apparel,comic,figure,game,issue_num) VALUES ('000000001','6.48','The Dark Knight Returns',false,false,true,false,false,'1');
INSERT INTO item (id,price,name,trade,apparel,comic,figure,game,issue_num) VALUES ('000000002','6.48','The Dark Knight Returns',false,false,true,false,false,'2');
INSERT INTO item (id,price,name,trade,apparel,comic,figure,game,issue_num) VALUES ('000000003','6.48','The Dark Knight Returns',false,false,true,false,false,'3');
INSERT INTO item (id,price,name,trade,apparel,comic,figure,game,issue_num) VALUES ('000000004','6.48','The Dark Knight Returns',false,false,true,false,false,'4');


INSERT INTO writer (id,first_name,last_name) VALUES (null,'Mark','Miller');
INSERT INTO writer (id,first_name,last_name) VALUES (null,'Frank','Miller');

/*
INSERT INTO writer (id,first_name,last_name) VALUES (null,'','');
INSERT INTO writer (id,first_name,last_name) VALUES (null,'','');
INSERT INTO writer (id,first_name,last_name) VALUES (null,'','');
INSERT INTO writer (id,first_name,last_name) VALUES (null,'','');
INSERT INTO writer (id,first_name,last_name) VALUES (null,'','');
INSERT INTO writer (id,first_name,last_name) VALUES (null,'','');
INSERT INTO writer (id,first_name,last_name) VALUES (null,'','');
INSERT INTO writer (id,first_name,last_name) VALUES (null,'','');
*/

INSERT INTO illustrator (id,first_name,last_name) VALUES (null,'Steve','McNiven');
INSERT INTO illustrator (id,first_name,last_name) VALUES (null,'Klaus','Janson');
/*
INSERT INTO illustrator (id,first_name,last_name) VALUES (null,'','');
INSERT INTO illustrator (id,first_name,last_name) VALUES (null,'','');
INSERT INTO illustrator (id,first_name,last_name) VALUES (null,'','');
INSERT INTO illustrator (id,first_name,last_name) VALUES (null,'','');
INSERT INTO illustrator (id,first_name,last_name) VALUES (null,'','');
INSERT INTO illustrator (id,first_name,last_name) VALUES (null,'','');
INSERT INTO illustrator (id,first_name,last_name) VALUES (null,'','');
*/
/*illustrator_items__item_illustrators
id           | varchar(255) for ITEMS
+-------------------+------------------+------+-----+---------+----------------+
| Field             | Type             | Null | Key | Default | Extra          |
+-------------------+------------------+------+-----+---------+----------------+
| id                | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
| illustrator_Items | int(11)          | YES  |     | NULL    |                |
| item_Illustrators | varchar(255)     | YES  |     | NULL    |                |
+-------------------+------------------+------+-----+---------+----------------+
 */

/*item_writers__writer_items
+--------------+------------------+------+-----+---------+----------------+
| Field        | Type             | Null | Key | Default | Extra          |
+--------------+------------------+------+-----+---------+----------------+
| id           | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
| item_Writers | varchar(255)     | YES  |     | NULL    |                |
| writer_Items | int(11)          | YES  |     | NULL    |                |
+--------------+------------------+------+-----+---------+----------------+
*/
