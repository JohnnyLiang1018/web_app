import React, {useState, Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { TextField, Input } from '@material-ui/core';

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
}))


export default function Upload(){
    const classes = useStyles()
    const [file,setFile] = useState('')
    const [filename,setFilename] = useState('Upload Image')
    const [title,setTitle] = useState('')
    const [category,setCategory] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState(0)
    const [quantity,setQuantity] = useState(1)

    const handleChange = e => {
        setFile(e.target.files[0])
        setFilename(e.target.files[0].name)
    }

    const submit = async e =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('file',file)
        try{
            const res = await axios.post(`http://13.58.178.84:4000/upload?title=${title}&category=${category}&description=${description}&price=${price}&quantity=${quantity}`,formData,{
                header:{
                    'Content-Type': 'multipart/form-data'
                }
            })
        } catch (err){
            console.log(err)
        }
        // fetch('/upload',{
        //     method: 'POST',
        //     headers:{
        //         'Content-Type': 'application/json'
        //     },
        //     body: formData
        // })
        // .catch(err => {
        //     console.log(err.response.status)
        // }) 

    }

    return (
        <Fragment>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Title</InputLabel>
                <Select
                    native
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                >
                    <option value="" />
                    <option value="Rewrite">Rewrite</option>
                    <option value="Little Busters">Little Busters</option>
                    <option value="Summer Pockets">Summer Pockets</option>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Category</InputLabel>
                <Select
                    native
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                >
                    <option value="" />
                    <option value="Single">Single</option>
                    <option value="Foil">Foil</option>
                    <option value="Signed">Signed</option>
                    <option value="Deck">Deck</option>
                    <option value="Playset">Playset</option>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField id="standard-basic" label="Description" onChange={e => setDescription(e.target.value)} />
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Price</InputLabel>
                <Input
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Quantity</InputLabel>
                <Input
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
                    inputProps={{
                        step: 1,
                        min: 1,
                        type: 'number'
                    }}
                />
            </FormControl>
            <form>
                <div className='custom-file mb-4'>
                    <input type='file' className='custom-file-input' id='customFile' onChange={handleChange}/>
                    <label className='custom-file-label' htmlFor='customFile'>
                        {filename}
                    </label>
                </div>
                <input
                    type='submit'
                    value='Upload'
                    className='btn btn-primary btn-block mb-4'
                    onClick={submit}
                    />
            </form>
            
            {/* <input 
            value={title} 
            onChange={e => setTitle(e.target.value)} />
            <input
            value={category}
            onChange={e => setCategory(e.target.value)} />
            <input
            value={description}
            onChange={e => setDescription(e.target.value)} />
            <input
            value={price}
            onChange={e => setPrice(e.target.value)} />
            <input
            value={quantity}
            onChange={e => setQuantity(e.target.value)} /> */}
        </Fragment>
    )
}