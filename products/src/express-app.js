const express = require("express");
const cors = require("cors");
const { products } = require("./api");
const { CreateChannel } = require("./utils");

module.exports = async (app) => {
  app.use(express.json());
  app.use(cors());
  app.use(express.static(__dirname + "/public"));
  
  const channel = await CreateChannel();

  products(app, channel);
};