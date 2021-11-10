const axios = require("axios");
const express = require("express");
const app = express();
var cors = require("cors");
require("dotenv").config();

app.use(cors());

const headers = {
  Authorization: `apikey ${process.env.STEPZEN_API_KEY}`,
  "Content-Type": "application/json",
};

const URL = `${process.env.STEPZEN_API_URL}`;

let queryString = `query MyQuery { unsplash_Random_Photo {
    urls {
      full
    }
  }
}`;

let queryBody = { query: queryString };

app.get("/unsplash", async function (req, res, next) {
  req.body = queryBody;
  try {
    const response = await axios.post(URL, req.body, { headers: headers });
    res.status(200).json({ data: response.data });
  } catch (e) {
    return next(e);
  }
});

app.listen(`${process.env.PORT}`, function () {
  console.log(`Server starting on port ${process.env.PORT}`);
});
