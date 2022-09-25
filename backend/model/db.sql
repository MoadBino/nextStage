DROP DATABASE catye;

CREATE DATABASE catye;

USE catye;
CREATE TABLE cat(
    cat_id INT AUTO_INCREMENT NOT NULL,
    Name VARCHAR(255),
    Breed VARCHAR(255) ,
    Description VARCHAR(255),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (cat_id)
);