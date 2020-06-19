# HumaniBase (was Zaatari Radio)

[![Build Status](https://travis-ci.com/fac19/Zaatari-Radio.svg?branch=master)](https://travis-ci.com/fac19/Zaatari-Radio)
[![codecov](https://codecov.io/gh/fac19/Zaatari-Radio/branch/master/graph/badge.svg)](https://codecov.io/gh/fac19/Zaatari-Radio)

## Introduction
This is an app where the product owner can upload workshops so that people from the NGO Action for Change who are on the ground in the Zaatari refugee camp in Jordan can find them and administer them to children.

Due to CV19 the product owner has not been able to go to Jordan so wants a way to provide workshops remotely.

## Features
### In the current state the website has the following features for voluteers to interact with. 

1. As the creator of an audio workshop you can upload the outline of the workshop (known as the workshop contents). You can also embed soundcloud links within the content allowing you to play back accompanying audio. You can also attach additional worksheets to the workshop which are downloadable for other users.

2. As a voluteer looking to administer a workshop you can browse a list of existing workshops. You can see the overview and content of workshops which also has accompanying audio examples to playback. You can also download worksheets. Once finished you can leave feedback, this includes any issues you may have with the workshop and includes a public comment which other voluteers can see when looking at the workshop overview.


### Things the website doesn't do
1. In the current state the workshop content is controlled via the Airtable database and tables, meaning there is no login / sign-up feature. All workshops are public and the ability to leave feedback is also public. A future feature would be to submit workshop content via the website and to implement authentication in order to leave feedback. 

2. Display multiple images per workshop. 

3. Search through the list of workshops.


## Code Review 
### Local deployment
As the Netlify CLI logins are needed please review the deployed version.

### Storybook
However, if you'd like to see storybook in action you can clone the repo, `npm i` and `npm run storybook`. Storybook is a place where we developed components in isolation.

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


### List of key dependencies and scripts.

## Story Book

## Netlify Dev

## run Lint

## Cypress open
