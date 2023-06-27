import axios from "axios";
import { CronJob } from "cron";

export const createSearch = async (req, res) => {
    try {
        const options = {
            method: 'POST',
            url: 'https://skyscanner-api.p.rapidapi.com/v3/flights/live/search/create',
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': 'ae7574a49bmshcb17d6076f70148p140c73jsnce838e5b10ce',
              'X-RapidAPI-Host': 'skyscanner-api.p.rapidapi.com'
            },
            data: {
              query: {
                market: 'UK',
                locale: 'en-GB',
                currency: 'EUR',
                queryLegs: [
                  {
                    originPlaceId: {iata: 'LHR'},
                    destinationPlaceId: {iata: 'DXB'},
                    date: {
                      year: 2023,
                      month: 9,
                      day: 20
                    }
                  }
                ],
                cabinClass: 'CABIN_CLASS_ECONOMY',
                adults: 2,
                childrenAges: [3, 9]
              }
            }
          };
          
        const response = await axios.request(options);
        return res.send(response.data);

    } catch (error) {
        return res.send(error);
    }
}

export const pollSearch = async (req, res) => {
    try {
        const options = {
            method: 'POST',
            url: 'https://skyscanner-api.p.rapidapi.com/v3/flights/live/search/poll/XkWFWlxaWI6rkJi-iQAkXSIKedArnTB9uKBlgFczv87gMgfgk6ZpRxhtl5gq6BPkRLxrv4nrnSgTZ_SfDbuDB2jGbuSufa1GkhGh4GBj9qYry48biE4kMRaDsxsPnKynLmJhdmRG3NOIpw_OFGvB0rnv2B9qXYjWU_RHXQwAS3mBF9U_oegimgt7pEN9x9nTJGVH4Pis90Q1MVgC1U9hDplmPgFR9J5lo01AC4yTCG-JN5LxRSDJi7_pYdt5JMLIM7LMhBfT3f1ag-Zr3VwpEXWxI2bsdPvkEp2kI6H4b16WvM5IY2vdllNFK5Go3zph0vqSX05NO3Du0ZRcsVxB3BaQmjQwlmNDNK0A9kbR2I9rzlydaFrkseLLWexlesSDW21luh392-4GTipmdfNujJbXYsqFTnGTfTQPabQiJcbR0vRQbup9VMEAIDwqtCZtuPJFrfF0Pmk2QMnGBZ_f8yrD--C9uC2mhgc6F-tbQw30iSJhuIcdDc_gm2-tGKG6oC74MZEYGLUbpMf_gbjVUQ',
            headers: {
              'X-RapidAPI-Key': 'ae7574a49bmshcb17d6076f70148p140c73jsnce838e5b10ce',
              'X-RapidAPI-Host': 'skyscanner-api.p.rapidapi.com'
            }
          };

        const response = await axios.request(options);
        return res.send(response.data);

    } catch (error) {
        return res.send(error);
    }
}

export const getPollSearch = async(req,res) => {
    try{
        const options = {
            method: 'GET',
            url: 'https://skyscanner-api.p.rapidapi.com/v3/flights/live/search/poll/XkWFWlxaWI6rkJi-iQAkXSIKedArnTB9uKBlgFczv87gMgfgk6ZpRxhtl5gq6BPkRLxrv4nrnSgTZ_SfDbuDB2jGbuSufa1GkhGh4GBj9qYry48biE4kMRaDsxsPnKynLmJhdmRG3NOIpw_OFGvB0rnv2B9qXYjWU_RHXQwAS3mBF9U_oegimgt7pEN9x9nTJGVH4Pis90Q1MVgC1U9hDplmPgFR9J5lo01AC4yTCG-JN5LxRSDJi7_pYdt5JMLIM7LMhBfT3f1ag-Zr3VwpEXWxI2bsdPvkEp2kI6H4b16WvM5IY2vdllNFK5Go3zph0vqSX05NO3Du0ZRcsVxB3BaQmjQwlmNDNK0A9kbR2I9rzlydaFrkseLLWexlesSDW21luh392-4GTipmdfNujJbXYsqFTnGTfTQPabQiJcbR0vRQbup9VMEAIDwqtCZtuPJFrfF0Pmk2QMnGBZ_f8yrD--C9uC2mhgc6F-tbQw30iSJhuIcdDc_gm2-tGKG6oC74MZEYGLUbpMf_gbjVUQ',
            headers: {
              'X-RapidAPI-Key': 'ae7574a49bmshcb17d6076f70148p140c73jsnce838e5b10ce',
              'X-RapidAPI-Host': 'skyscanner-api.p.rapidapi.com'
            }
          };
          const response = await axios.request(options);
          return res.send(response.data);

    }catch(error){
        return res.send(error)
    }
}