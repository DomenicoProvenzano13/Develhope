/*
Dataset: Titanic dataset
Schema: tested (PassengerId, Survived, Pclass, Name, Sex, Age, Parch, Ticket, Fare, Cabin, Embarked)
Link: here
List of tasks:

Display female passengers who survived and are older than 30.
Find the average age of men who didn't survive.
Display information for passengers who spent between $20 and $50 on their tickets and got on the ship at port 'C'."
Find the total number of the survivors in the first class.
Show the information of passengers who boarded from Cherbourg (port 'C') and spent more than $75 on their tickets.".
*/

-- TASK 1 - Display female passengers who survived and are older than 30.

SELECT * 
FROM tested 
WHERE Survived = 1 
AND Sex = 'female' 
AND Age > 30;

-- TASK 2 - Find the average age of men who didn't survive.

SELECT AVG(Age)
FROM tested
WHERE survived = 0
AND Sex = 'male'

-- TASK 3 - Display information for passengers who spent between $20 and $50 on their tickets and got on the ship at port 'C'."

SELECT *
FROM tested
WHERE Fare BETWEEN 20 AND 50
AND Embarked = 'C';

-- TASK 4 - Find the total number of the survivors in the first class.

SELECT SUM(Survived = 1) AS Survived_FirstClass
FROM tested
WHERE Pclass = 1;

-- Oppure

SELECT COUNT(*) AS Survived_FirstClass
FROM tested
WHERE survived = 1
AND Pclass = 1;

-- TASK 5 - Show the information of passengers who boarded from Cherbourg (port 'C') and spent more than $75 on their tickets.".

SELECT * 
FROM tested
WHERE Embarked = 'C'
AND Fare > 75;