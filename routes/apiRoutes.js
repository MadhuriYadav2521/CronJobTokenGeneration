import express from "express";
import { getCurrencies, getLocals, getMarkets } from "../controllers/cultureAPIController.js";
import { getCarriers } from "../controllers/carriersAPIController.js";
import { getLocations } from "../controllers/geoAPIController.js";
import { createSearch, getPollSearch, pollSearch } from "../controllers/Flight'sLivePrice-asyncContoller.js";
import { createAndPollSearch } from "../controllers/Flight'sLivePrice-syncController.js";
import { livePriceSearch, pollPageFromSearch } from "../controllers/hotelsLivePriceController.js";
import { autosuggestFlights, autosuggestHotels } from "../controllers/autosuggestController.js";

var router = express.Router();

router.get('/getLocals',getLocals);
router.get('/getCurrencies',getCurrencies);
router.get('/getMarkets',getMarkets);
router.get('/getCarriers',getCarriers);
router.get('/getLocations',getLocations);
router.post('/createSearch',createSearch);
router.post('/pollSearch',pollSearch);
router.get('/getPollSearch',getPollSearch);
router.post('/createAndPollSearch',createAndPollSearch);
router.post('/livePriceSearch',livePriceSearch);
router.get('/pollPageFromSearch',pollPageFromSearch);
router.post('/autosuggestFlights',autosuggestFlights);
router.post('/autosuggestHotels',autosuggestHotels);




export default router;