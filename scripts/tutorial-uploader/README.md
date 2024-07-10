# Tutorial uploader

This script uploads tutorials to IBM Quantum Learning.

## Developing

To work on this script, you'll need to set up the `saiba-api` project locally.

There are some extra steps you'll need to take to set up `saiba-api` for
developing this script:

- Follow the instructions in the README in the saiba-api repo. Don't forget the
  instructions to add the `PUBLIC_URL` entry to your `docker-compose.yaml`.

- Login into the local CMS (<http://0.0.0.0:8055/admin/>) using

  - email: `admin@example.com`
  - password: `password`

- Create a token for local testing.

  1. In the local CMS, go to "User directory" (in the leftmost navbar)
  2. Click "Create item"
  3. Create a new user with the "Content creator admin" role and generate a new
     static token. Copy the token to your clipboard. Then click the tick on the
     top-right of the page to save the user.
  4. To test the script in this repo, export the following environment
     variables.
     ```
     export LEARNING_API_URL=http://0.0.0.0:8055
     export LEARNING_API_TOKEN=<copied-token>
     ```
     Consider using [direnv](https://direnv.net/) to handle this.

- With the local database running, run the following command to add the topics
  and categories that we expect to exist.

  ```
  npm run tutorial:setup-testing
  ```
