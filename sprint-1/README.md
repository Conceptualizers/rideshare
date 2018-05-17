## Sprint 1

Create REST APIs for our data models - Events, Orgs, Admins, and Vehicles  

The tutorials from [training sprint 5](https://github.com/TeamSublois/TSE-Training/tree/master/sprint-4) will be very helpful.

You will need to create a data schema file (`Event.js, Orgs.js`, etc) and a controller file (`EventController.js`).  
These files should go be inside their own folders, named after the data model. So `Event.js` and `EventController.js` would go in a folder called **Events**.  

This folder should go in the server directory.  

Your directory should look something like this:  
```
rideshare/server/
├── event
│   ├── Event.js
│   └── EventController.js
├── events
├── package-lock.json
├── package.json
└── server.js
```