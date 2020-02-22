import React, { useState,useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty:{
        marginTop: theme.spacing(2)
    },
    nav:{
        margin: 'auto',
        width: '30%',
    },
    button:{
        marginTop: 20
    },
}))

export default function SelectBox(props){
    const classes = useStyles()
    const [title, setTitle] = useState('')
    const [category,setCategory] = useState('')
    const search = () => {
        console.log(title.length,category.length)
        fetch(`/search?title='${title}'&category='${category}'`)
        .then(response => response.json())
        .then(response => props.handler(response.data))
        .catch(err => console.error(err))
    }

    const clearSearch = () => {
        fetch(`/search`)
        .then(response => response.json())
        .then(response => props.handler(response.data))
        .catch(err => console.log(err))
    }
    // const inputLabel = React.useRef(null)
    // const [labelWidth, setLabelWidth] = React.useState(0)
    // React.useEffect(() => {
    //     setLabelWidth(inputLabel.current.offsetWidth)
    // }, [])

    // const handleChange = name => event => {
    //     setState({
    //         ...state,
    //         [name]: event.target.value,
    //     })
    //     console.log(state.search_title)
    //     console.log(state.search_category)
    // }

    return (
        <div className={classes.nav}> 
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Title</InputLabel>
                <Select
                    native
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    inputProps={{
                        name: 'search_title',
                        id: 'age-native-simple'
                    }}
                >
                    <option value="" />
                    <option value="Rewrite">Rewrite</option>
                    <option value="Little Busters">Little Busters</option>
                    <option value="Summer Pockets">Summer Pockets</option>
                </Select>
            </FormControl> 
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-helper">Category</InputLabel>
                <Select
                    native 
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    inputProps={{
                        name: 'search_category',
                        id: 'age-native-simple'
                    }}
                >
                    <option value=""/>
                    <option value="Single">Single</option>
                    <option value="Foil">Foil</option>
                    <option value="Deck">Deck</option>
                    <option value="Playset">Playset</option>
                    <option value="Signed">Signed</option>
                </Select>
            </FormControl>
            <Button className={classes.button} variant="contained" color="primary" onClick={search}>Search</Button>
            <Button variant="contained" color="primary" onClick={clearSearch}>Clear Search</Button>
        </div>
    )
}
