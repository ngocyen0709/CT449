const express = require("express");
const contacts = require("../controllers/contact.controller");

module.exports = app => {
const router = express.Router();

router.post("/", contact.create);
router.get("/", contact.finAll);
router.get("/favorite", contact.finAllFavorite);
router.get("/:id", contact.finOne);
router.put("/:id", contact.update);
router.delete("/:id", contact.delete);
router.delete("/", contact.deleteAll);
app.use("/api/contacts", router);
};