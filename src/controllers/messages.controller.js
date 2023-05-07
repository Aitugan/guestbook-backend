const Message = require('../models/message.model');

class Controller {
    async getAll(req, res) {
        try {
            const messages = await Message.find();
            console.log("here messages")
            res.status(200).json(messages);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async create(req, res) {
        console.log("creating")
        const message = new Message({
            name: req.body.name,
            text: req.body.text,
        });
        try {
            const newMessage = await message.save();
            req.io.emit('newMessage', newMessage);
            console.log("asdHere4");

            res.status(200).json(newMessage);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

}

module.exports = new Controller();