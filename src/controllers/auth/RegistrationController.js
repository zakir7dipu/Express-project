const bcrypt = require('bcrypt');
const db = require('../../configs/db_config')
const User = db.user;

const storeClient = async (req, res) => {
    try {
        let {user_id, name, password} = req.body;
        let hashPassword = await bcrypt.hash(password, 10);
        let user = await User.create({
            user_id: user_id,
            name: name,
            password: hashPassword,
            role: "client"
        })

        res.status(201).json({
            status: "ok",
            data: user,
            message: "Registration successfully."
        })
    } catch (error) {
        res.status(500).json({
            status: "not ok",
            message: error.message
        })
    }
}

const storeEmployee = async (req, res) => {
    try {
        let {user_id, name, password} = req.body;
        let hashPassword = await bcrypt.hash(password, 10);
        let user = await User.create({
            user_id: user_id,
            name: name,
            password: hashPassword,
            role: "employee"
        })

        res.status(201).json({
            status: "ok",
            data: user,
            message: "Registration successfully."
        })
    } catch (error) {
        res.status(500).json({
            status: "not ok",
            message: error.message
        })
    }
}

const storeAdmin = async (req, res) => {
    try {
        let hashPassword = await bcrypt.hash("1234", 10);
        let user = await User.create({
            user_id: "nabhan",
            name: "Nabhan Abdullah",
            password: hashPassword,
            role: "admin"
        })

        res.status(201).json({
            status: "ok",
            data: user,
            message: "Registration successfully."
        })
    } catch (error) {
        res.status(500).json({
            status: "not ok",
            message: error.message
        })
    }
}

module.exports = {
    storeClient,
    storeEmployee,
    storeAdmin
}
