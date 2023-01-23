const service = require("../models/service");

//getALl
class Controller {
    getAll(req, res, next) {
        service.find(
            (err, response) => {
                if (err) return res.status(500).json({
                    message: `ERROR ${err}`,
                    success: false,
                });
                res.status(200).json({ data: response });
            });
    }

    //get By Id
    getById(req, res, next) {
        let { id } = req.params;
        service.findOne({ _id: id }, (err, response) => {
            if (err) return res.status(500).json({
                message: `ERROR ${err}`,
                success: false,
            });
            res.status(200).json({ success: true, response });
        });
    }

    //add
    post(req, res, next) {
        let { filename } = req.file;
        let { title, description } = req.body;
        let body = { title: title, description: description, icon: filename };

        let doc = new service(body);
        doc.save((err, response) => {
            if (err) return res.status(500).json({
                message: `ERROR ${err}`,
                success: false,
            });
            res.status(200).send({ success: true, response });
        });
    }

    //edit
    put(req, res, next) {
        let { id } = req.params;
        let { filename } = req.file || {};
        let { title, description } = req.body;
        let data = { title: title, description: description, icon: filename };
        service.updateOne({ _id: id }, data, (err, response) => {
            if (err) return res.status(500).json({
                message: `ERROR ${err}`,
                success: false,
            });
            res.status(200).send({ success: true, response });
        });
    }

    //delete
    delete(req, res, next) {
        let { id } = req.params;
        service.findByIdAndDelete({ _id: id }, (err, response) => {
            if (err) return res.status(500).json({
                message: `ERROR ${err}`,
                success: false,
            });
            res.status(200).send({ success: true, response });
        });
    }
}

const controller = new Controller();
module.exports = controller;