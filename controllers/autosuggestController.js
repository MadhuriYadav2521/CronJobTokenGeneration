import axios from "axios";

export const autosuggestFlights = async(req,res) => {
    try{
        const options = {
            method: 'POST',
            url: 'https://skyscanner-api.p.rapidapi.com/v3/autosuggest/flights',
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': 'ae7574a49bmshcb17d6076f70148p140c73jsnce838e5b10ce',
              'X-RapidAPI-Host': 'skyscanner-api.p.rapidapi.com'
            },
            data: {
              query: {
                market: 'UK',
                locale: 'en-GB',
                searchTerm: 'Lond'
              }
            }
          };
          
          const response = await axios.request(options);
          return res.send(response.data);

    }catch(error){
        return res.send(error)
    }
}

export const autosuggestHotels = async(req,res) => {
    try{
        const options = {
            method: 'POST',
            url: 'https://skyscanner-api.p.rapidapi.com/v3/autosuggest/hotels',
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': 'ae7574a49bmshcb17d6076f70148p140c73jsnce838e5b10ce',
              'X-RapidAPI-Host': 'skyscanner-api.p.rapidapi.com'
            },
            data: {
              query: {
                market: 'UK',
                locale: 'en-GB',
                searchTerm: 'Lond'
              }
            }
          };
          
          const response = await axios.request(options);
          return res.send(response.data);

    }catch(error){
        return res.send(error)
    }
}