const app = require("./src/app.js");
const { db } = require("./db/connection");
const port = 3000;


db.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}/users`);
    });
  })
  .catch((error) => {
    console.error('Error syncing the database:', error);
  });
