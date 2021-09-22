import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

const ButtonComponent = ({ id }) => {
    return (
        <Button variant="contained" component={Link} to={`/users/${id}`}>MORE DETAILS</Button>
    )
}

export default ButtonComponent
