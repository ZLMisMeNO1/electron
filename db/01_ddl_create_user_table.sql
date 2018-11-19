CREATE TABLE IF NOT EXISTS electron_user (
    id BIGINT(20) PRIMARY KEY COMMENT 'id',
    `code` VARCHAR(30) NOT NULL COMMENT '登录名',
    password_hash VARCHAR(256) NOT NULL COMMENT '密码hash',
    password_salt VARCHAR(256) NOT NULL COMMENT '密码salt',
    `nick_name` VARCHAR(30) NOT NULL  COMMENT '昵称',
    unique index user_code(code)
) ENGINE = INNODB DEFAULT CHARSET=utf8 COMMENT '用户表';

