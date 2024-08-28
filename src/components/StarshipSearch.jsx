import { useState } from "react"
import { filterShips } from "../services/starshipService"

function StarshipSearch({ setShipResults }) {
    const [inputData, setInputData] = useState('')

    const handleChange = (event) => {
        const newInputData = event.target.value
        setInputData(newInputData)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const newShipData = await filterShips(event.target.search.value)
        setShipResults(newShipData)
        setInputData('')
    }

    return (
        <>
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='search'>Search by Name: </label>
                <input id='search' name='search' value={inputData} onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default StarshipSearch