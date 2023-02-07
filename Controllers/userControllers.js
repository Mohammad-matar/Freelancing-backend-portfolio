const User = require("../models/user");
const mongoose = require('mongoose');

class Controller {

    //Get all the Users
    getAll(req, res, next) {
        User.find((err, response) => {
            if (err) return res.status(500).json({
                message: `ERROR ${err}`,
                success: false,
            });
            res.status(200).json({ success: true, message: "Get User Successfully", data: response });
        })
    }

    //Add a User
    post(req, res, next) {
        const data = req.body;

        // find the users of the same email or username
        User.find({ email: data.email })
            .then((users) => {
                // check if the users length more than zero

                if (users.length > 0) {
                    res
                        .status(401)
                        .send({ success: false, message: "email is already token" });
                }
            })
            .catch(next);

        // create new user with the data added
        User.create(data)
            .then((user) => {
                // create JWT token and return it
                console.log(user)


                res.status(200).json({ success: true, message: "Add User Successfully", data: user });
            })
            .catch(next);

    }

    //Update a User
    put(req, res, next) {
        let { id } = req.params;
        let body = req.body;
        User.updateOne(
            { _id: id },
            {
                $set: body,
            },
            (err, response) => {
                if (err) return res.status(500).json({
                    message: `ERROR ${err}`,
                    success: false,
                });
                res.status(200).send({ success: true, message: "Category Updated Successfully", data: response });
            }
        );
    }
    //Delete an User
    delete(req, res, next) {
        let { id } = req.params;
        User.findByIdAndDelete({ _id: id }, (err, response) => {
            if (err) return res.status(500).json({
                message: `ERROR ${err}`,
                success: false,
            });
            res.status(200).send({ success: true, message: "Deleted Successfully", data: response });
        });
    }
}

const controller = new Controller();
module.exports = controller;