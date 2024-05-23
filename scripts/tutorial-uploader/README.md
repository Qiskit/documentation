# Tutorial uploader

This script uploads tutorials to IBM Quantum Learning.

## Developing

To work on this script, you'll need to set up the `saiba-api` project locally.

There are some extra steps you'll need to take to set up `saiba-api` for
developing this script:

* Add the following line  to the end of `docker-compose.yaml`. Do not commit
  this change.
  ```
  PUBLIC_URL: 'https://learning.www-dev.quantum-computing.ibm.com/'
  ```

* Login into the local CMS (<http://0.0.0.0:8055/admin/>) using
  - email: `admin@example.com`
  - password: `password`

* Create a token for local testing.
  1. In the local CMS, go to "User directory" (in the leftmost navbar)
  2. Click "Create item"
  3. Create a new user with the "Content creator admin" role and generate a new
     static token. Copy the token to your clipboard. Then click the tick on the
     top-right of the page to save the user.
  4. To test the script in this repo, export the following envrionment
     variables.
     ```
     export LEARNING_API_URL=http://0.0.0.0:8055
     export LEARNING_API_TOKEN=<copied-token>
     ```
     Consider using [direnv](https://direnv.net/) to handle this.

* Create two categories with names `Workflow example` and `How-to`; our script
  fails if these categories don't exist. To create a category:
  1. Go to <http://0.0.0.0:8055/admin/content/tutorials_categories/+>
  2. Add the name and click the tick in the top-right corner to save

* Create the following tutorial topics at <http://0.0.0.0:8055/admin/content/tutorials_topics>.
  > TODO: Can we automate this?
   * Chemistry
   * Dynamic circuits
   * Error mitigation
   * Optimization
   * Qiskit patterns
   * Scheduling
   * Scheduling
   * Transpilation
