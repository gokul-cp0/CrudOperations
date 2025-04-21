const StudentSchema = require("../models/StudentSchema");

exports.create = async (req, res) => {
    try {
        const data = await StudentSchema.create(req.body);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const data = await StudentSchema.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.findOne = async (req, res) => {
    try {
        const data = await StudentSchema.findById(req.params.id);  
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const data = await StudentSchema.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!data) return res.status(404).json({ message: "Id not found" });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteOne = async (req, res) => {
    try {
        const data = await StudentSchema.findByIdAndDelete(req.params.id);
        if (!data) return res.status(404).json({ message: "ID not found" });
        res.json({ message: "data deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteAll = async (req, res) => {
    try {
        const data = await StudentSchema.deleteMany({});
        res.json({ message: `${data.deletedCount} data deleted successfully` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
