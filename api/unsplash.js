import axios from "axios";
var express = require("express");
var app = express();

const headers = {
  Authorization: `Client-ID ${process.env.STEPZEN_API_KEY}`,
  "Content-Type": "application/json",
};

export default async (req, res) => {};

app.get("/unsplash", function (req, res) {
  const URL = `${process.env.STEPZEN_API_URL}`;
  const response = await axios.post(URL, req.body, { headers: headers });
  res.status(200).json({ data: response.data });
});
