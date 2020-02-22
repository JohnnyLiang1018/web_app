import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root:{
        maxWidth: 345,
        display: 'inline',
        float: 'left',
    },
    media:{
        height:350,
        width:500,
    },
})

export default function MediaCard(props){
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia 
                    className={classes.media}
                    image={`https://kagaribucket1.s3-us-west-1.amazonaws.com/images/${props.listing_id}.jpg`}
                    title={props.title} 
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Save
                </Button>
                <Button size="small" color="primary">
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    )
}

    // render(){
    //     return (
    //         <Card className="root">
    //             <CardActionArea>
    //                 <CardMedia 
    //                     className="media"
    //                     image="/assets/test.png"
    //                     title={this.props.title} 
    //                 />
    //                 <CardContent>
    //                     <Typography gutterBottom variant="h5" component="h2">
    //                         {this.props.title}
    //                     </Typography>
    //                     <Typography variant="body2" color="textSecondary" component="p">
    //                         {this.props.description}
    //                     </Typography>
    //                 </CardContent>
    //             </CardActionArea>
    //             <CardActions>
    //                 <Button size="small" color="primary">
    //                     Save
    //                 </Button>
    //                 <Button size="small" color="primary">
    //                     Add to Cart
    //                 </Button>
    //             </CardActions>
    //         </Card>
    //     ) 
    //     // <li style={item_block} key={this.props.listing_id}><img src={process.env.PUBLIC_URL + `/pic/${this.props.listing_id.toString()}.png`} alt={this.props.title}/>{this.props.title},{this.props.category},{this.props.description},${this.props.price}</li>
    // }


