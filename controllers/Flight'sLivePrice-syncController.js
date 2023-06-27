import axios from "axios";

export const createAndPollSearch = async (req, res) => {
    try {
        const options = {
            method: 'POST',
            url: 'https://skyscanner-api.p.rapidapi.com/v3e/flights/live/search/synced',
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