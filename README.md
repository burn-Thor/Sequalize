# Sequalize

The activity, on week 8 of the Code Nation bootcamp, was to intro using the sequelize ORM with a MySQL database. 

This is a movie database system taht uses each of the CRUD functions

To use each one you first need to run: 
 -> node src/app.js

 Then to perform each action type the following after the above:

 C (Add an entry to the database)
 --add --title "String required for movie entry" --actor "String required for actor for this movie entry" 

 R (list the database entries)
 --list 

 U (update a single database entry)
 --update --oldTitle "String of existing movie title" --newTitle "String of replacement movie" --newActor "Updated actor string"

 D (Delete a single database entry)
 --delete "String of movie title to delete" 
