import React, { Component, Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles(theme => ({
    topnav: {
        backgroundColor: '#333',
        overFlow: 'hidden',
        marginBottom: '40px'
    }
}))

export default function TopNav(){

    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = event => {
        setAnchorEl(null)
    }


    return (
            <div className={classes.topnav}>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <font color="white">Menu</font>
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Account</MenuItem>
                    <MenuItem onClick={handleClose}>My Listing</MenuItem>
                    <MenuItem onClick={handleClose}>Notification</MenuItem>
                
                </Menu>
                <Button>
                    <font color="white">Login</font>
                </Button>
            </div>
        )
}