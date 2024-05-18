const express = require("express");
const app = express();
const port = 3000;
const router = require("./router");

//menggunakan express.router yang disimpan pada file router.js
//harus dalam directory yang sama
app.use("/", router);

//untuk menjalankan server pada port 3000
app.listen(port, () => {
  console.log(`Listening at http:localhost:${port}`);
});
