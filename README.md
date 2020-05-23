# Group-12-White-Wolf: Group Calendar
[![Build Status](https://travis-ci.com/BennyChun/Group-12-White-Wolf.svg?token=97wroqvKxQfyzgcd2pHd&branch=master)](https://travis-ci.com/BennyChun/Group-12-White-Wolf)

## Getting Started

### Clone and install dependencies
`git clone https://github.com/BennyChun/Group-12-White-Wolf.git`  
`cd Group-12-White-Wolf`       
`npm install`       
`cd client`       
`npm install` 

### Set-up MongoDB
* Visit the [MongoDB website](https://www.mongodb.com/download-center/community) and download the current release version for your operating system.  
* Complete the installation process for MongoDB and MongoDBCompassCommunity  
* Under 'New Connection', paste the following connection string:  
`mongodb://localhost:27017/groupCalendars?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false` 
* Connect!            

### Set-up the Google API Client
* Navigate to the [Google Cloud Platform](https://console.developers.google.com)
* Go to `Select a project` &#8594; `New Project` and choose a desired Project Name, then click `Create`  
1. OAuth consent screen  
* Select User type as External then `CREATE`  
* Enter the Application name as 'Group Calendar' and add the Google Calendar API to your scopes 
2. Credentials  
* Click `Credentials` on the side bar on the left-hand side &#8594; `+ CREATE CREDENTIALS` &#8594; `OAuth client ID`
* Select the `Application Type` as Web Application, `Name` as 'Group Calendar' and add `http://localhost:10000/api/callback` as an authorized redirect URI, then click `CREATE`.
* Download the `credentials.json` file (rename it to this if necessary) and add it to the project's root directory

### Start the Application  
From the root directory, in one terminal:   
`npm start`  
Open another terminal, then:  
`cd client`  
`npm start`  

