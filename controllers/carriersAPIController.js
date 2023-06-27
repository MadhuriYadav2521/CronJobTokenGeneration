import axios from "axios";

export const getCarriers = async (req, res) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://skyscanner-api.p.rapidapi.com/v3/flights/carriers',
            headers: {
              'X-RapidAPI-Key': 'ae7574a49bmshcb17d6076f70148p140c73jsnce838e5b10ce',
              'X-RapidAPI-Host': 'skyscanner-api.p.rapidapi.com'
            }
          };
        const response = await axios.request(options);
        console.log(response.data);
        return res.send(response.data);

    } catch (error) {
        return res.send(error);
    }
}