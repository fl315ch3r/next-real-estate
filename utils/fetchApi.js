import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async ( url ) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'f53ce709eemsh2df50383350f348p18337ajsnfafefed8da8f',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })

    return data
} 