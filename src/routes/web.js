// import express from "express";
const express = require("express");
const homepageController = require("../controllers/homepageController");
const chatBotController = require("../controllers/chatBotController");
// import homepageController from "../controllers/homepageController";
// import chatBotController from "../controllers/chatBotController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homepageController.getHomepage);
  router.get("/webhook", chatBotController.getWebhook);
  router.post("/webhook", chatBotController.postWebhook);

  return app.use("/", router);
};

module.exports = initWebRoutes;
