import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: "Client-ID lYRX14A888hyj8DdD1FEIhruoLk_UUhUnyizyye8Bbg",
        },
        params: {
            query: term,
            per_page: 100
        }
    })

    return response.data.results;
};

export default searchImages;