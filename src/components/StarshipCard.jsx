function StarshipCard(props) {
    const { name, starshipClass, manufacturer, model } = props
    return (
        <div className='ship'>
            <p>{name}</p>
            <p>Class: {starshipClass}</p>
            <p>Manufacturer: {manufacturer}</p>
            <p>Model: {model}</p>
        </div>
    )

}

export default StarshipCard