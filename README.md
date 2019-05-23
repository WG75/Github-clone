

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



