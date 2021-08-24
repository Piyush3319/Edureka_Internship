const mealtypes = require('../Models/mealtype');

exports.getMealTypes = (req, res) => {
    mealtypes.find().then(
        response => {
            res.status(200).json({ message: "Mealtype Fetched Succesfully", mealtypes: response })
        }
    ).catch(
        err => {
            res.status(500).json({ message: "Error", error: err })
        }
    )
}