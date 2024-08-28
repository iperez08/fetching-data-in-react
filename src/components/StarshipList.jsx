import StarshipCard from "./StarshipCard"

function StarshipList(props) {
    const { shipResults } = props
    return (
        <>
            <h2>Starships</h2>
            <p>Number of Results: {shipResults.length}</p>
            <div className='dock'>
                {shipResults.length > 0 ?
                    shipResults.map((ship) => {
                        return (
                            <StarshipCard
                                key={ship.name}
                                name={ship.name}
                                starshipClass={ship.starship_class}
                                manufacturer={ship.manufacturer}
                                model={ship.model} />
                        )
                    })
                    :
                    <p>There are no ships that match that name.</p>}
            </div>
        </>
    )
}

export default StarshipList