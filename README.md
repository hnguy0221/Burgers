## Burgers

My name is Hai Nguyen. I created this application (Eat-Da-Burgers) as part of the homework assignment for the Full Stack Web Development class I am taking at the University of Denver. It is written in Node JavaScript, handlebars, express, and Ojects Relational Mapping (ORM). It uses MySql database to persist the data. When the app is first launched, it displays a list hamburgers that have not been devoured on the left and the corresponding "Devour it" buttons and a list of burgers that have been devoured on the right if there are hamburgers in the database. At the bottom are the input text field which allows the user to enter a new burger to devour and the submit button. After a new burger is entered in the input text field and the submit button is clicked, the new burger will be displayed on the left with the corresponding "Devour it" button. If you click on any of the "Devour it" button, the burger will be devoured and the hamburger gets displayed to the right. Please see image below.

![Image of Eat-Da-Burgers application](https://github.com/hnguy0221/Burgers/blob/master/public/assets/images/Eat-Da-Burgers.png)

If there are no hamburgers in the database, the application is displayed like the one below:

![Image of Eat-Da-Burgers application](https://github.com/hnguy0221/Burgers/blob/master/public/assets/images/Eat-Da-Burgers-No-Data.png)

* Live Demo: <https://guarded-brushlands-49347.herokuapp.com/>

## To install the application, please follow these steps:

* Git Clone the repository
* Navigate to the folder where the repository exists using Git Bash or Terminal.
* Run the command `npm install` to download the required dependencies.
* Then run the command `node server.js` to run the program.
