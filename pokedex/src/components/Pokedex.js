import React, {useState} from 'react'
import { AppBar, Toolbar, Grid, Card, CardMedia, CardContent, CircularProgress} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import testData from "../testData"

const useStyles = makeStyles({
    pokedexContainer: {
        paddingTop: '20px',
        paddingLeft: '50px',
        paddingRight: '50px'
    }
})

const Pokedex = () => {
    const classes = useStyles()
    const [pokemonData, setPokemonData] = useState(testData)

    const getPokemonCard = (pokemonId) => {
        const {id, name} = pokemonData[`${pokemonId}`]
        const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

        return (
            <Grid item xs={4} key={pokemonId} >
            <Card>
            <CardMedia 
            className={classes.CardMedia}
            image={sprite}
            style = {{width: "130px", height: "130px"} }
            />

                <CardContent>Hi</CardContent>
            </Card>
        </Grid>
        )
    
    }
    return (
        <>
    <AppBar position="static">
        <Toolbar />


    </AppBar>
        {pokemonData ? (
            <Grid container spacing={3} className={classes.pokedexContainer}>

            {Object.keys(pokemonData).map(pokemonId => 
                getPokemonCard(pokemonId))}
            </Grid>
        ) : (
            <CircularProgress />
        )}


        </>
    )
}

export default Pokedex