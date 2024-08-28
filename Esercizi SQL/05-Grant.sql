--l'esercizio non lo richiede ma prima creo l'utente
CREATE USER 'martin'@'localhost' IDENTIFIED BY 'insert-password';

GRANT SELECT, UPDATE ON Books TO 'martin'@'localhost'; 