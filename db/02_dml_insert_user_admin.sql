DELETE FROM `electron_user` WHERE `id` = 1;
INSERT INTO `electron_user` (`id`, `code`, `password_hash`, `password_salt`, `nick_name`) VALUES('1','admin','d6caea28430a9fe5443558f03f1fefef','d41d8cd98f00b204e9800998ecf8427e','超级管理员');
