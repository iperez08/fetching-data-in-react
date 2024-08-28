import { useState, useEffect } from "react"
import StarshipSearch from "./components/StarshipSearch"
import StarshipList from "./components/StarshipList"
import { index } from "./services/starshipService.js"

const App = () => {
  const [shipResults, setShipResults] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const shipData = await index()
      setShipResults(shipData)
    }
    fetchData()
  }, [])

  return (
    <>
      <StarshipSearch setShipResults={setShipResults} />
      <StarshipList shipResults={shipResults} />
    </>
  )


}

export default App


