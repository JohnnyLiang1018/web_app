import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

export default function TopNav(){

    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = event => {
        setAnchorEl(null)
    }

    const topnav = {
        backgroundColor: '#333',
        overFlow: 'hidden',
        marginBottom:'40px'
    }

    return (
            <div style={topnav}>
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
            </div>
        )
}