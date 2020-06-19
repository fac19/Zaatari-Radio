# HumaniBase (was Zaatari Radio)

[![Build Status](https://travis-ci.com/fac19/Zaatari-Radio.svg?branch=master)](https://travis-ci.com/fac19/Zaatari-Radio)
[![codecov](https://codecov.io/gh/fac19/Zaatari-Radio/branch/master/graph/badge.svg)](https://codecov.io/gh/fac19/Zaatari-Radio)

## Introduction
This is an app where the product owner can upload workshops so that people from the NGO Action for Change who are on the ground in the Zaatari refugee camp in Jordan can find them and administer them to children.

Due to CV19 the product owner has not been able to go to Jordan so wants a way to provide workshops remotely.

## Features
- Learn more aboutHumaniBase on the landing page
- Find workshops on the Find Workshops page and look at the workshop overview page
- Submit feedback on the workshops
- See the workshop contents and listen to embedded audio
- Go to a worksheets page to download attachments for workshop
- Currently you cannot add a workshop on the FE

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
| content                      | number              |
| number_of_males              | number              |
| number_of_females            | number              |
| number_of_non_binary         | number              |
| number_no_gender_information | number              |
| star_rating                  | single-line-text    |
| comment_rating               | long text           |
| other_comment                | long text           |
| name                         | single-line-text    |
| email                        | email               |
| organisation                 | single-line-text    |

## Contributors

With some nice pictures of each of us.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
