const res = require("express/lib/response");

exports.create =  (req, res) => {
    res.send({ message: "create handler" });
    };
    
    exports.findAll =  (req, res) => {
    res.send({ message: "findOne hander" });
    };
    
    exports.findOne =  (req, res) => {
    res.send({ message: "findOne hander" });
    };
    
    exports.update =  (req, res) => {
    res.send({ message: "update hander" });
    };
    
    exports.delete =  (req, res) => {
    res.send({ message: "delete hander" });
    };
    
    exports.deleteAll =  (req, res) => {
    res.send({ message: "deleteAll hander" });
    };
    exports.findAllFavorite =(req, res) => {
        res.send({message: "finAllFavorite handler"})
    };