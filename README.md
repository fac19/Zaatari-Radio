# Zaatari Radio readme

# HumaniBase (previously Zaatari Radio)

[![Build Status](https://travis-ci.com/fac19/Zaatari-Radio.svg?branch=master)](https://travis-ci.com/fac19/Zaatari-Radio)
[![codecov](https://codecov.io/gh/fac19/Zaatari-Radio/branch/master/graph/badge.svg)](https://codecov.io/gh/fac19/Zaatari-Radio)

## Contents
- [Project Overview](#Project-Overview)
- [Meet the team ](#Meet-the-team)
- [Tech Stack](#Tech-Stack)
- [Features](#Features)
- [Handover](#Handover)
	- [Using the Application](#Using-the-Application)
	- [Further Development](#Further-Development)
	- [Airtable Content Management System ](#Airtable-Content-Management-System)
	- [Installation](#Installation)
	- [Testing](#Testing)
	- [Database schema](#Database-schema)

## Project Overview
![](https://i.imgur.com/gjIQp6X.gif)

### Introduction
Humanibase is a full stack web app which uses AWS Lambda functions to serve workshop data from Airtable using a React frontend styled with Styled Components.

### Background
After working in Zaatari Refugee Camp in Jordan for two years from Zaatari Radio station, the humanitarian project had to temporarily stop broadcasting due to the COVID-19 global pandemic. We wanted to build a solution to continue working remotely and support other people being able to administer the radio-based workshops.

Our solution is an open-source humanitarian platform where individuals and other organisations are free to access our workshops and resources in addition to uploading their our work.

The goal of HumaniBase is to create a platform to support and share knowledge among social projects worldwide so that we can make a bigger impact together.

## Meet the team  
- [Ivo](https://github.com/Ivo-Evans) - Scrum Master / Full Stack :clipboard: 
- [Joe](https://github.com/Joepock123) - UX & UI / Full Stack 🖌️
- [James](https://github.com/jamesj-0) - Dev Ops / Full Stack :desktop_computer: 
- [Vatsal](https://github.com/VatsKan) - Quality Assurance / Full Stack :heavy_check_mark:

## Tech Stack
![](https://i.imgur.com/WLodkpm.png)

### Technical
- **React**
    - Allows us to create a dynamic SPA.
- **Airtable**
    - Used as our database and doubled up as a CMS to update the current content on our website. 
- **Netlify Lambda**
    - Handles our HTTP requests between Airtable and our deployed website. There are currently GET and POST requests to create or read current rows in feedback, authors and workshop tables.
- **Storybook**
  - Used throughout the project to render individual components when building our pages.
- [**Markdown to JSX**](https://probablyup.com/markdown-to-jsx/)
	- Takes Github-flavored Markdown (GFM) and makes native JSX without dangerous hacks. 
- **Bootstrap**
  - Used in our nav bar.

### Testing 
- **Jest**
- **React Testing Library**

### Design UX & UI
- **Figma**
  - Used to design inital mockups and to conduct user testing with our prototype
- **Styled Components**
  - Used in conjuction with our figma mockups to design the working version of our web app using react components
- **Material UI icons**
  - Used in our workshop download page 

## Features
### The app can: 

1. As the creator of an audio workshop you can upload the outline of the workshop (known as the workshop contents). You can also embed soundcloud links within the content allowing you to play back accompanying audio. You can also attach additional worksheets to the workshop which are downloadable for other users.

2. As a voluteer looking to administer a workshop you can browse a list of existing workshops. You can see the overview and content of workshops which also has accompanying audio examples to playback. You can also download worksheets. Once finished you can leave feedback, this includes any issues you may have with the workshop and includes a public comment which other voluteers can see when looking at the workshop overview.

### Next features to add
1. In the current state the workshop content is controlled via the Airtable database and tables, meaning there is no login / sign-up feature. All workshops are public and the ability to leave feedback is also public. A future feature would be to submit workshop content via the website and to implement authentication in order to leave feedback.
2. Display multiple images per workshop. 
3. Search through the list of workshops.

# Handover
## Using the Application
[Detailed documentation on how to use the application can be found here](https://github.com/fac19/Zaatari-Radio/blob/master/handover/handover.md). It should be noted that for now only users with access to the AirTable account are able to add new workshops.

- **Required:** log in details for [Airtable](https://airtable.com/) to add new workshops

## Further Development
The project is deployed on [GitHub](https://github.com/) and [Netlify](https://www.netlify.com/). Future developers will require access to these accounts. Please [contact the team](#Meet-the-team) to arrange access.

- **Required:** Permission to contribute to the [GitHub Repo](https://github.com/fac19/Zaatari-Radio)
- **Required:** Log in details to the Netlify Account so developers can log in to the project on Netlify's Command Line Interface (CLI). 

## Airtable Content Management System 
Our web app runs off an airtable database. Once logged in, you have full read and write access to create or edit workshops.

When a GET request is made using the Netlify Lambda functions, our app parses the returned JSON object and converts this markdown into React components which are displayed on the page as HTML.

We use the NPM package [markdown-to-jsx](https://www.npmjs.com/package/markdown-to-jsx) to acheive this. 

![GIF](https://i.imgur.com/e6Rz6jO.gif) 

### Audio and Iframes
With the need to embed audio as part of the Radio workshops, content in the Airtable allows you to directly insert an Iframe. 


### Leaving Feedback
As part of the project there is the ability for users to leave feedback on workshops. This can be seen and reviewed in the Airtable in order to collect data about where the workshops have been administered and who has attented.

## Installation
### Local deployment
As the Netlify CLI logins are needed please review the deployed version.

Once cloned onto your local repo navigate to the folder root and run `npm i` to install all dependecies.


## Testing
### Cypress open
Without the Netlify CLI login you wont be able to run the correct local server and in turn wont be able to run the Cypress test suite.

There is currently no integration of Cypress into the code coverage.

### NPM Run Test

Within the corresponding react component folders there are Jest tests which run on the `Npm run test` command. The script runs all the react test files. All tests should be passing

### Storybook
Without the Netlify CLI logins you wont be able to deploy locally. However, if you'd like to see storybook in action you can clone the repo,`npm run storybook`. Storybook is a place where we developed components in isolation.

![stories](https://i.imgur.com/2e4L66y.png)

## Database schema

### workshop_authors

| title        | data                               |
| ------------ | ---------------------------------- |
| author_id    | autonumber                         |
| name         | single-line-text                   |
| email        | email                              |
| telephone    | single-line-text                   |
| organisation | single-line-text                   |
| workshops    | list of foreign keys (workshop_id) |

### workshops

| title             | data-type                 |
| ----------------- | ------------------------- |
| workshop_id       | autonumber                |
| workshop_authors  | integer foreign-key       |
| title             | single-line-text          |
| overview          | long-text with RTF        |
| content           | long-text with RTF        |
| carousel_pictures | list of attachments       |
| worksheets        | list of attachments       |
| feedback          | list of text foreign keys |
| average_rating    | integer                   |
| duration          | single-line-text          |
| date_created      | single-line-text          |

### feedback

| title                        | data                |
| ---------------------------- | ------------------- |
| workshop_id                  | integer foreign-key |
| public_comment               | long-text with RTF  |
| Name                         | single-line-text    |
| public_comment               | long-text with RTF  | 
| email 					   | single-line-text 	 |
| organisation 				   | single-line-text 	 |
| number_of_atendees		   | integer		 	 |
| star_rating	   			   | integer		 	 |
| students_enjoyed             | long-text with RTF  |
