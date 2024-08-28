const BASE_URL = 'https://swapi.dev/api/starships'

// render all starships
const index = async () => {
    try {
        const response = await fetch(BASE_URL)
        const allShips = await response.json()
        return allShips.results
    } catch (error) {
        console.error(error)
    }
}

const filterShips = async (name) => {
    try {
        const response = await fetch(BASE_URL + `/?search=${name}`)
        const filteredShips = await response.json()
        return filteredShips.results
    } catch (error) {
        console.error(error)
    }
}

export { index, filterShips }