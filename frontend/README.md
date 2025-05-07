# Quotes Of the Day

To run this app you will need to open two terminals for backend and frotnend 
The backend will run on 3000 and the frontend will run on 4200
## Backend

Add .env file under the backend folder with the api token for the variable ```RUN_QUOTE_TOKEN=<API_TOKEN>``` from Fav Quotes
---
Quick start
* ### `cd backend`
* ### `npm install`
And then run:
* ### `npm start`
or
* ### `npm run dev`

## Frontend
Quick start
### `cd frontend`
### `npm install`
### `npm start`
Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

## Quide
In the page you will see two buttons:
### Random Quotes
It will use the number from the input on the left of this button and will get a  list of 25 random quotes  
### Get Quotes By Tag
It will use the picklist from the left of the button and will use it to get the quotes with this Tag 
### It will cache the objects from [favqs.com](favqs.com) to imporve the reusablity
