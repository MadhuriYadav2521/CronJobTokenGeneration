import axios from "axios";

export const livePriceSearch = async(req,res) => {
    try{
        const options = {
            method: 'POST',
            url: 'https://skyscanner-api.p.rapidapi.com/v3e/hotels/live/search/create',
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': 'ae7574a49bmshcb17d6076f70148p140c73jsnce838e5b10ce',
              'X-RapidAPI-Host': 'skyscanner-api.p.rapidapi.com'
            },
            data: {
              query: {
                market: 'UK',
                locale: 'en-GB',
                currency: 'GBP',
                adults: 2,
                placeId: {
                  entityId: '27539564'
                },
                checkInDate: {
                  year: 2023,
                  month: 9,
                  day: 3
                },
                checkOutDate: {
                  year: 2023,
                  month: 9,
                  day: 12
                },
                rooms: 1,
                childrenAges: [4, 2],
                sortBy: 'RELEVANCE_DESC'
              }
            }
          };
          
          const response = await axios.request(options);
          return res.send(response.data);

    }catch(error){
        return res.send(error)
    }
}

export const pollPageFromSearch = async(req,res) => {
    try{
        const { page } = req.body;
        const options = {
            method: 'GET',
            url: `https://skyscanner-api.p.rapidapi.com/v3e/hotels/live/search/poll/${page}/WRlY5ET0fXGDpxpwsjQtwjuJsyjtcK893WJZgXpyXQBzdZctCuLxr0-rUn7IZ32AEhrf12eWJ62COPHAMHj8IQaGtf3NFBSTUEHSsWIKjCo7ll4HN1NhMEBbDTuwKcwxKI9gzaBEp0g1pcy_FCZnLDd3ijATJZXAxyPPHPCNvPjQYlQxkrylZDbTxVR3TVUvInsPxtR1pq7DetJcoppsGIwMdk4I4PrvH_3vtKLYEk5jpL3bPfsnbt4qdhH-PJr83SKXQkwAAfgtTJxXV0TmNXmrK5luZEt6BggHnoHZ-gavPOplWUF779fcMP48B8kRCEIiGiCeu601qkg4tOpbpZ5o8n3kP71i3gY3lpJ4PGTFGt7NiXxfhlT7AkMm3agu8GUaYMkq3mIR6dyQvJMfUGCbSPWOWRohUrvzX4ZQF7zLzmZc9YqtzAa8vR5sQ0lTE5ABVfVmzs2JX4mWoiEnuQ`,
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