const jwt = require("jsonwebtoken");
const { User } = require("../models");

module.exports = {
    authorization: (req, res, next) => {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(" ")[1];
        try{
            if (token == null) return res.sendStatus(401);
            jwt.verify(token, "asdf12", async (err, userId) => {
                if (err) return res.sendStatus(403);
                const userIdRes = await User.findOne({ where: { id: userId.userId } });
                req.user = userIdRes;
                res.locals.user = userId;
                next();
            });
        }
        catch(err){
            res.status(400).send('Invalid token.');
        }
    },
};
