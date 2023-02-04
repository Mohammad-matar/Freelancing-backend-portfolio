const experience = require("../models/experience");

//getALl
class Controller {
    getAll(req, res, next) {
        experience.find(
            (err, response) => {
                if (err) return res.status(500).json({
                    message: `ERROR ${err}`,
                    success: false,
                });
                res.status(200).json({ data: response });
            }).populate("skill_id").sort({ startDate: -1 });
    }

    //get By Id
    getById(req, res, next) {
        let { id } = req.params;
        experience.findOne({ _id: id }, (err, response) => {
            if (err) return res.status(500).json({
                message: `ERROR ${err}`,
                success: false,
            });
            res.status(200).json({ success: true, response });
        });
    }

    //add
    post(req, res, next) {
        let body = req.body;
        let doc = new experience(body);
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
        let data = req.body;
        experience.updateOne({ _id: id }, data, (err, response) => {
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
        experience.findByIdAndDelete({ _id: id }, (err, response) => {
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