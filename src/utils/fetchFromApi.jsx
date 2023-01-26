import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    url: BASE_URL,
    params: { maxResults: '50' },
    headers: {
        // 'X-RapidAPI-Key': import.meta.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Key': 'b5760d4dbbmshc32cd71b404656ep1b216bjsn1653386f23c3',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    try {
        const res = await axios.get(
            `${BASE_URL}/${url}`,
            options
        );

        return res.data;
    } catch (error) {

    }
}