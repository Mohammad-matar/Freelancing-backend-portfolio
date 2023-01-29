var express = require("express");
var router = express.Router();

var { ImgurClient } = require("imgur");
const fs = require("fs");

router.post("/", async (req, res) => {
    let file = req.files.file;
    const imgur = new ImgurClient({ accessToken: process.env.TOKEN });
    let uploadPath = "./public/uploads/" + file.name;

    file.mv(uploadPath, async (err) => {
        if (err) {
            return res.status(500).send(err);
        }
        await imgur
            .upload({
                image: fs.createReadStream(uploadPath),
                type: "stream",
            })
            .then((response) => {
                fs.unlinkSync(uploadPath);
                if (response.success) {
                    return res.json({ image: response.data.link });
                } else {
                    return res.status(400).json({ error: response });
                }
            });
    });
});

module.exports = router;