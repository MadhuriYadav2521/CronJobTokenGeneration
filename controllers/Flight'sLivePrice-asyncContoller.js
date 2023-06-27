import axios from "axios";
import { CronJob } from "cron";
import SessionToken from "../modals/sessionToken.js"

let job = new CronJob('0 */5 * * *', () => {
  SessionToken.updateOne({}, { $unset: { token: 1 } }).exec();
});

job.start();



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
              originPlaceId: { iata: 'LHR' },
              destinationPlaceId: { iata: 'DXB' },
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
    // return res.send(response.data);
    const data = response.data.sessionToken;

    const checkdata = await SessionToken.findOne({}).exec();
    if (checkdata) {
      checkdata.token = data;
      await checkdata.save();
      return res.send("Token has been updated successfully.")
    }

    const token = new SessionToken({
      token: data
    });
    await token.save();
    return res.send("Token has been created successfully.");


  } catch (error) {
    return res.send(error);
  }
}

export const pollSearch = async (req, res) => {
  try {
    const { id } = req.body;
    const sToken = await SessionToken.find({ _id: id }).exec();
    const token = sToken[0].token;
    const options = {
      method: 'POST',
      url: `https://skyscanner-api.p.rapidapi.com/v3/flights/live/search/poll/${token}`,
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

export const getPollSearch = async (req, res) => {
  try {
    const { id } = req.body;
    const sToken = await SessionToken.find({ _id: id }).exec();
    const token = sToken[0].token;
    const options = {
      method: 'GET',
      url: `https://skyscanner-api.p.rapidapi.com/v3/flights/live/search/poll/${token}`,
      headers: {
        'X-RapidAPI-Key': 'ae7574a49bmshcb17d6076f70148p140c73jsnce838e5b10ce',
        'X-RapidAPI-Host': 'skyscanner-api.p.rapidapi.com'
      }
    };
    const response = await axios.request(options);
    return res.send(response.data);

  } catch (error) {
    return res.send(error)
  }
}