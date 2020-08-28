![alt text](https://github.com/solomondove/fullstack-project/blob/master/app/assets/images/logo.png "Strida Logo")<!-- .element  width="100" --> 



Welcome to Strida, the production level clone of the popular social-media, running, and cycling fitness tracker. This clone was originally developed as a test piece of my coding expertise and will be continuing to evolve over the coming months. The current version includes successfully and securely implemented user authorization, Google Maps API integration that allow for the creation of mapped running and cycling routes, and the ability to record workout sessions. Through this read-me, I will dive into some of the features including technology used and some of the pitfalls that were navigated through development. Thanks for taking the time to explore my site! 

Full site can be found [here](https://solomon-strida.herokuapp.com/#/) 



## Development 

Development of this project started in August of 2020 and is still continuing today. The backend was built on Ruby on Rails with React/Redux frontend. Google Maps API was integrated for route mapping, BCrypt was used to user protection, and assorted gems/libraries were used in the development including, but not limited to: pry-rails, annotate, figaro, babel, and webpack. 



#### User Auth

User auth was implemented between backend and frontend with a focus on user information safety. BCrypt, the popular and secure encryption hash, was chosen for its multileveled security protocols. Bcrypt hashes each password with a unique salt, current industry standard when it comes to protecting information. More can be read about it [here](https://auth0.com/blog/hashing-in-action-understanding-bcrypt/) When passwords are first created by a user, the database immediately creates a password digest from through BCrypt and only stores that encrypted code in the database, the password is never stored. This allows us to securely maintain people's access to the site and data from prying eyes. Below is the method that takes a person's password and sets the password digest from the return of the hashing function. 

![](https://github.com/solomondove/fullstack-project/blob/master/app/assets/images/bcrypt_generation.png)



#### Google Maps API

Google Maps API was used for development of the mapping feature. Being my first foray into a mapping API and Google Maps in particular, considerable time was spent navigating the choices of Google API services to include. I chose to utilize the Maps JavaScript API to render the API within my site with the Directions Services overlay was utilized to visualize routes and calculated distances traveled.

![alt text](https://github.com/solomondove/fullstack-project/blob/master/app/assets/images/render_map.png)

In the above snippet you can see the mapping functionality being incorporated to the presentational component. The map was instantiated with preset mapOptions that are coded into the components constructor function. The call to the Directions API is also initiated in this method as is the event listener that logs a person click and adds the clicked location to local state as a waypoint. Saving these waypoints to the database proved to a major hurdle. In the end a seperate table was built into the database that houses the indvidual waypoints and associates them to the route through a one to many association. Upon saving of the route, the controller creates each waypoint table entry. To update the route and associated waypoints, it proved easiest to delete out the preveious iteration of the route and all of the linked waypoints then create new instances of each. When retreiving a specific route, all waypoints were pulled from their table and packaged into the same JSON payload with the route information and sent to the front end together. This allowed the Directions Service to render previously saved routes once retreived. Below you see a route being displayed on the update page after being successfully retreived the directions rendered. 

![alt text](https://github.com/solomondove/fullstack-project/blob/master/app/assets/images/map_update_rendering.png)



#### Continued Development 

Moving forward there are more features that I would like to include, not limited to: adding the ability to search for and follow other users, a more robust user profile, the ability to upload more workout details including photos, increased generation of workout stats such as elevation change and calories being burned.  

Thanks for reading and please stay tuned for more updates!

![](https://github.com/solomondove/fullstack-project/blob/master/app/assets/images/favicon.ico)
