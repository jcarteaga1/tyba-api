
const got = require('got')

const getPlaces = async (req, res) => {
    try {
        const url = process.env.API_URL
        const url_places = process.env.API_URL_PLACES
        const apiKey = process.env.API_KEY
        const text = req.body.text

        const idPlaces = await getIdPlace(text, url, apiKey)
        const places = await getRestauransInPlace(url_places, apiKey, idPlaces)

        res.status(200).json(places)
    } catch (error) {
        res.status(500).send(error.message);
    }
};


async function getIdPlace(text, url, apiKey){
    const response = await got(url, { method: 'GET', 
        searchParams: {
            text:text,
            format:'json',
            apiKey:apiKey
        } 
    })

    const { results } = JSON.parse(response.body)
    const idPlaces = results.map(item => item.place_id)
    return idPlaces
}

async function getRestauransInPlace(url, apiKey, idPlaces){
    const places = []

    for (const id of idPlaces) {

        const response = await got(url, { method: 'GET', 
            searchParams: {
                categories:'catering.restaurant',
                filter:`place:${id}`,
                limit:20,
                apiKey:apiKey
            } 
        })

        const { features } = JSON.parse(response.body)
        
        const properties = features.map(item => item.properties)
        features.length > 0 && places.push(...properties)
    }
    return places
}


module.exports = { getPlaces }