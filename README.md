# checktheweather

## Running Locally

1. Download `nodejs` version `14.17.4` from [here](https://nodejs.org/en/download/) and then restart your machine.

2. Download `PostgreSQL` from [here](https://www.postgresql.org/download/). When prompted make sure to install all available components (`PostgreSQL Server, pgAdmin, Stack Builder and Command Line Tools`). At some point during installation you will be prompted to create a superuser password, keep this password handy as you will need it later.

3. Clone the repository.

4. Open the `check-the-weather` repository in your selected IDE (`VSCode` preffered).

5. Open the `.env` file found in the root directory. Enter your superuser password in the PG_PASSWORD field.

6. To start the frontend and backend concurrently open a terminal window, type `npm run dev`. Otherwise you can start the server and client individually with `npm start server` and `npm start client`.

7. For frontend development, go to `localhost:3000`. For backend development (API and database), go to `localhost:3001`.

---

## Web Environments

**Production:** https://cp3407-check-the-weather.herokuapp.com/ 

**Test:** https://cp3407-check-the-weather-test.herokuapp.com/

---