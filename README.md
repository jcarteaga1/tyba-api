# Tyba Backend Engineer Test

## Setup and Running
0. Rename `.env.example` to `.env` and fill the apiKey variable with the one i sent via email.
1. Run `npm install` to install all dependencies.
2. Run `npm run create:db` to create the database, this will use the default PostgreSQL user.
3. To run the migrations, run `npm run db:migrate`.
4. To create a root user run `npm run db:seed:all`

   The default password for this user is `123`.

5. Finally, to execute the project, run `npm run start`.

## Endpoints

* POST `/user/signup`

    This is the signing up endpoint. 
    All fields are
required:
    * firstName
    * lastName
    * email
    * password (at least 1 uppercase, 1 lowercase, 1 special character and 8 characters at least)

* POST `/login`
    * email
    * password

    This will return an authorization token.
* POST `/signout`

    For signing out the user.

* GET `/places/{text}`

    * Receives the city name and returns all restaurants near to the city.