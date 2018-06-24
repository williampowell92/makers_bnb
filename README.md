[Motivation](#motivation) | [Specification](#specification) | [Approach](#approach) | [Features](#features) | [Installation](#installation) | [How to use?](#how-to-use) | [Tests](#tests) | [Further work](#further-work) | [Technologies](#technologies)

# MakersBnB

An application for renting and letting rooms.

### Motivation

This project has been created by a team of junior developers as part of our journey at Maker's Academy. The project was carried out by four developers over a week and was intended to be an introduction to creating web applications with JavaScript.

### Specification

#### Requirements

- Any signed-up user can list a new space.
- Users can list multiple spaces.
- Users should be able to name their space, provide a short description of the space, and a price per night.
- Users should be able to offer a range of dates where their space is available.
- Any signed-up user can request to hire any space for one night, and this should be approved by the user that owns that space.
- Nights for which a space has already been booked should not be available for users to book that space.
- Until a user has confirmed a booking request, that space can still be booked for that night.

#### User stories

```
As a user,
So that I can use a bnb account,
I would like to be able to sign up

As a user,
So that I can access my bnb account,
I would like to be able to sign in

As a user,
So that I can list my space,
I would like to enter its details in the website.

As a user,
So that my space stays on the website,
I would like it to be remembered.

As a user,
So that customers can choose from a selection of my spaces,
I would like to be able to list multiple spaces

As a user,
So that I can advertise my space,
I would like to be able to add a name to my space

As a user,
So that customers know what my space is like,
I would like to be able to add a description to my space

As a user,
So that I can attract the right customers,
I would like to be able to add a price per night to my space

As a User,
So that I can rent out my space when it is free
I would like to offer a range of dates when my space is available.

As a customer,
So that I can hire a space for one night,
I want to be able to submit a hire request

As a user with a property on the site,
I want to be able to approve customer requests submitted to my property

As a customer,
So that I only see spaces that are available on my specified nights,
I would like spaces that are already booked for those nights not to be available

As a customer,
So that I know I have the property I want,
I would like to be able to confirm a booking request

As a user,
So that I can continue to market my property until a booking is confirmed,
I would like it to still be bookable until a booking is confirmed

```

### Approach

This project was approached by following an agile methodology including:

* Daily stand ups to assess the group mood and prioritise the tasks that needed doing.
* Daily retrospectives to discuss what went well, what didn't go well and how we could improve.
* Planning sessions to discuss what work needed doing and who would be working on it.

### Features

- Users can submit their spaces for rent.

### Installation

This application was developed in JavaScript using Node.js. Anyone wishing to use this application should install Node.js from their website, and then download and install the application as follows:

```
git clone https://github.com/samworrall/MakersBnB
cd <repo>
npm install
```

The required databases can be set up by running the following command:

```
npm run easy_setup
```

This will also seed some example data into the development database.

### How to use?

Once the application is installed the server can be run from the command line using:

```
npm run dev_server
```

The server will boot up on localhost:3000 which can be accessed via your client. You should be redirected to the following screen:

![home page](https://i.imgur.com/dyOj2CK.png)

Click 'Submit space for rent' and fill in the form to add your space for rent.

### Tests

Unit testing was carried our using the Jasmine Node.js modules. This will be downloaded when the application is installed. Tests can be run from the project home directory as follows:

```
npm run unit_test
```

Integration testing was carried out using Cypress. To run the tests the test server must be running. To run the test server:

```
npm run test_server
```

Once the server is up run the following command to run the integration tests:

```
npm run feature_test
```

### Further work

- Add user sign-up.
- Add user sign-in.
- Restrict listing spaces to signed-in users.
- Link spaces to users.
- Let users request spaces to hire on available dates.
- Allow users to confirm booking requests they are happy with.
- Add additional unit testing for existing modules.
- Add CSS to home page and new space page.

### Technologies

This application was built using Javascript, Node.js, Express, Sequelize, PostgreSQL with Jasmine and Cypress for testing.
