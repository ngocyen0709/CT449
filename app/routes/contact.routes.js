const express = require("express");
const contacts = require("../controllers/contact.controller");

module.exports = (app) => {
    const router = express.Router();

    router.get("/", contacts.findAll);
    router.post("/", contacts.create);
    router.get("/favorite", contacts.findAllFavorite);
    router.get("/:id", contacts.findOne);
    router.put("/:id", contacts.update);
    router.delete("/:id", contacts.delete);
    app.use("/api/contacts", router);
    router.delete("/", contacts.deleteAll);
};