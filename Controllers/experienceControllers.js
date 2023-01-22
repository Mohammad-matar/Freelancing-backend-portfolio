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
            }).populate("skill_id");
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
        let { filename } = req.file;
        let { title, company, location, description, startDate, endDate, skill_id } = req.body;
        let body = { title: title, company: company, location: location, description: description, startDate: startDate, endDate: endDate, skill_id: skill_id, companyLogo: filename };

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
        let { filename } = req.file || {};
        let { title, company, location, description, startDate, endDate, skill_id } = req.body;
        let data = { title: title, company: company, location: location, description: description, startDate: startDate, endDate: endDate, skill_id: skill_id, companyLogo: filename };
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