const express = require("express");

const FavoriteCtrl = require("../controllers/favorite-ctrl");

const router = express.Router();

router.post("/favorite", FavoriteCtrl.createFavorite);
router.get("/favorite/:userId", FavoriteCtrl.getFavoriteByUserId);
router.put("/favorite/:userId", FavoriteCtrl.updateFavorite);

module.exports = router;
