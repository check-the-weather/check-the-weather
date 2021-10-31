# checktheweather

## Web Environments

**Production:** https://cp3407-check-the-weather.herokuapp.com/ 

**Testing:** https://cp3407-check-the-weather-test.herokuapp.com/

---

## Running Locally

1. Ensure you have version `14.17.4` of [`nodejs`](https://nodejs.org/en/download/) installed.

2. Download `PostgreSQL` from [here](https://www.postgresql.org/download/). When prompted make sure to install the following components: `PostgreSQL Server, pgAdmin and Command Line Tools`. At some point during installation you will be prompted to create a superuser password, keep this password handy as you will need it later.

3. Open a command prompt / terminal window and confirm that PostgreSQL command line tools is working correctly by typing `psql`. If you receive an error message, ensure that PostgreSQL has been added to your [PATH](https://sqlbackupandftp.com/blog/setting-windows-path-for-postgres-tools).

4. Clone the repositroy from GitHub and open it in your selected IDE (`VSCode` is preffered).

5. Open the `.env.example` file found in the root directory. Copy example file's contents into a new file named `.env` (in the root). Enter your PostgreSQL superuser password in the PG_PASSWORD field.

6. In command prompt window, ensure you are in the repository root directory. Type `psql -U postgres -f ./server/database.sql`, then enter your superuser password. 

7. In the same command promt window, type `npm run install-deps` to install all dependencies.

8. To start the frontend and backend concurrently open a check-the-weather command prompt, type `npm run dev`. Otherwise you can start the server and client individually with `npm start server` and `npm start client`.

---

## Contributing

Please complete all changes on a feature branch. Once the feature branch is ready, push that branch to GitHub. Create a pull request between your branch the `develop` branch. On the PR, request at least two reviewers for a code review. Do not merge into develop unless the PR has at least one approval!
