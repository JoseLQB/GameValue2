CREATE DATABASE ng_games_db;

USE ng_games_db;

CREATE TABLE games(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200),
    platform VARCHAR(255), 
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    val INT(3),
    year INT(4)
);
