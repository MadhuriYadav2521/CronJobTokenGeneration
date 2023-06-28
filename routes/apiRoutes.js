import express from "express";
import { getLocations } from "../controllers/geoAPIController.js";
import { createSearch, getPollSearch, pollSearch } from "../controllers/Flight'sLivePrice-asyncContoller.js";
import { createAndPollSearch } from "../controllers/Flight'sLivePrice-syncController.js";

var router = express.Router();

router.get('/ping', (req, res) => {
    return res.send("Pong")
})


router.get('/getLocations',getLocations);
router.post('/createSearch',createSearch);
router.post('/pollSearch',pollSearch);
router.get('/getPollSearch',getPollSearch);
router.post('/createAndPollSearch',createAndPollSearch);






export default router;