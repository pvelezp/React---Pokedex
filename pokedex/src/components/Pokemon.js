import React from 'react'

const Pokemon = (props) => {
    const {match} = props
    const { params } = match
    const { pokemonId} = params
    return (
        <div>
            <p>This is the pokemon page for pokemon #{pokemonId}</p>   
        </div>
    )
}

export default Pokemon