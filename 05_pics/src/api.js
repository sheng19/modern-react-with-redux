import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: 'Client-ID TyFiGz38x0tFZREhk7uusEl0_Kh5xnIgLiQMWGA0Rsc'
        },
        params: {
            query: term,
        }
    });
    console.log(response)
    return response.data.results;
};

export default searchImages;