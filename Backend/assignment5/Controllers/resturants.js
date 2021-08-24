const Resturants = require('../Models/resturants');

exports.getresturnats = (req, res) => {
    Resturants.find().then(
        response => {
            res.status(200).json({ message: "Resturants Fetched Succesfully", Resturants: response })
        }
    ).catch(
        err => {
            res.status(500).json({ message: "Error", error: err })
        }
    )
}

exports.getResturantsByCity = (req, res) => {
    const ResturantsCity = req.params.resCity;
    Resturants.find( {city :ResturantsCity }).then(
        respon => {
            res.status(200).json({ message: "Resturants Fetched Succesfully", Resturant: respon })
        }
    ).catch(
        err => {
            res.status(500).json({ message: "Error", error: err })
        }
    )
}