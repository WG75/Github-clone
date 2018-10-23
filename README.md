# Waleed Gamal


### Usage

```sh
yarn start 

docker build -t waleed-gamal-task .

http://ec2-34-238-248-92.compute-1.amazonaws.com/
```






## Archeticture

- **Application:** As shown in the diagram below, requests sent from the client have to go first through the backend api than they are sent to github api and so forth.

<p align='center'>
<img src='https://preview.ibb.co/dfhXOA/task.png' width='600' alt='npm start'>
</p>


- **Client:** I used react to build the ui components and redux for managing the state of our application. for styling i used plain css and <a href="https://getbem.com/" target="_blank">bem</a> methodology as a naming convention for class names.

- **Server-side:** Our backend just acts as a restful api and maps all requests sent by the client to the github api. However i used nodejs & express to do so.




### Improvements

This is a list of things that i would improve if i had more time:

- **Testing**: due to lack of time i was not able to test everything thoroughly and i was only able to test some components, reducers and actions.
- **Type-checking**: I used flow to define the types of data that are passed into the components, of course i did not cover all of the code but i made sure to cover the more important parts. 
- **Authentication**: It was mentioned in the task file that the user should be able to login using a username and password so i used (basic authentication) but this method is not very secure so i would implement Oauth instead.
- **Github-api-limit**: there is a limit on how many requests you can send to github api and this limit is different depending if the user was authenticated or not, and due to the lack of security with basic authentication (i.e saving credentials in the browser) and the amount of work it would require to implement some sort of authentication on the backend i decided to only authenticate user when login in and any subsequent requests would be un-authenticated. i figured that won't be a problem since all the data i need to access is public until i found out about the api limit thing. so you should expect github to respond with 403 status code when sending many requests in a short amount of time.however i would take a look at this as well if i had more time.
