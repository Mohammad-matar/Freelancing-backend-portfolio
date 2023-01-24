const project = require("../models/project");

//getALl
class Controller {
    getAll(req, res, next) {
        project.find((err, response) => {
            if (err) return res.status(500).json({
                message: `ERROR ${err}`,
                success: false,
            });
            res.status(200).json({ data: response });
        }).populate(["service_id", "skill_id"]);
    }

    //get By Id
    getById(req, res, next) {
        let { id } = req.params;
        project.findOne({ _id: id }, (err, response) => {
            if (err) return res.status(500).json({
                message: `ERROR ${err}`,
                success: false,
            });
            res.status(200).json({ success: true, response });
        }).populate("skill_id");
    }

    //add
    post(req, res, next) {
        let { filename } = req.file;
        let { title, description, date, demoURL, githubURL, skill_id, service_id } = req.body;
        let body = { title: title, description: description, date: date, demoURL: demoURL, githubURL: githubURL, skill_id: skill_id, service_id: service_id, image: filename };

        let doc = new project(body);
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
        let { title, description, date, demoURL, githubURL, skill_id, service_id } = req.body;
        let data = { title: title, description: description, date: date, demoURL: demoURL, githubURL: githubURL, skill_id: skill_id, service_id: service_id, image: filename };
        project.updateOne({ _id: id }, data, (err, response) => {
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
        project.findByIdAndDelete({ _id: id }, (err, response) => {
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