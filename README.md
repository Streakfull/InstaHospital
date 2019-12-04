# InstaHospital
The app connects patients to the nearest eligible hospitals.
Hospitals are eligible if they serve the patient’s needs and have free rooms to immediately accommodate the patient.
Each user will have a medical ID, that stores all important medical information, so that the hospital can make all necessary arrangements upon receiving the patient’s request.

# Local Installations
 * Install NodeJs (npm automatically installed with it) https://nodejs.org/en/
 * Install PostgreSQL https://www.postgresql.org/
 * Clone the repo
 * cd>server>npm install > npm start
 * cd>client>npm install > npm start

# Client Dependencies
 * Axios to issue HTTP Requets
 * Dotenv to use env files
 * Firebase to receive notifications
 * React UI framework
 * React-date-pick A date picker
 * React-dom Virtual DOM for react
 * React-google-maps A react wrapper for google maps library
 * React-Redux A state management tool for React
 * React-Router SPA Routing
 * React-Router-Dom 
 * React-Scripts to start the app
 * Redux A state management tool
 * Semantic-ui-css Predefined styles and classes
 * Semantic-ui-react UI Library for React
 
 # Server Dependencies
  * @molteni/coordinate-utils to randomly generate coordinates withing a given range
  * Axios to issue HTTP requests
  * BcryptsJs to encrypt/decrypt passwords
  * Cors Cross-Origin Resource Sharing 
  * Express-async-wrapper A wrapper to handle all errors using a middleware
  * Firebase-admin To send notifications
  * Joi A request validation library
  * JsonWebToken Parse/Decode tokens
  * Moment a date format library
  * Morgan To log requests
  * Nodemailer Sending emails
  * Passport Authorization library
  * pg DB driver for PostgreSQL
  * Sequelize ORM
  * wrap Route Wrapper
  
  # Configurations
  * There are the 3 Config files (Examples are provided)
  * client .env file (Example -> env.default), The PORT number and required API Credentials for Google maps and Firebase
  * server .env file (Example -> env.default) The required API credentials for the DB,JSON Token,Send Grid,Firebase,Google maps
  * server config -> adminKey.json (Example -> adminKey.example.json) The required API credentials for Firebase admin
  
  # Authors
  *  Philip Mouris
  * Youssef Sherif
  * Youssef Fathi
  
  # License
  * ISC
