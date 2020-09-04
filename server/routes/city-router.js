const express = require("express");

const CityCtrl = require("../controllers/city-ctrl");

const router = express.Router();

router.post("/city", CityCtrl.createCity);
router.delete("/city/:id", CityCtrl.deleteCity);
router.get("/cities", CityCtrl.getCities);

module.exports = router;
