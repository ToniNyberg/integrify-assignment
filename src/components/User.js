import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import userService from '../services/users'
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "600px"
    },
    content: {
        minHeight: "200px",
        border: "1px solid black",
        padding: "20px",
    }
});

const User = () => {
    const classes = useStyles();
    const [user, setUser] = useState()
    const { id } = useParams()

    const fetchUserData = async (id) => {
        const response = await userService.getUserById(id)
        setUser(response.data)
    }

    useEffect(() => {
        fetchUserData(id)
    }, [id])

    return (
        <>
            <section>
                <Grid style={{ display: "flex" }}>
                    <ArrowBackIcon fontSize="small" />
                    <Link to="/" style={{ textDecoration: "none" }}>Back Home</Link>
                </Grid>
                {user && <div className={classes.root}>
                    <div className={classes.content}>
                        <ul style={{ listStyle: "none", paddingInlineStart: "0px" }}>
                            <li>- name: {user.name}</li>
                            <li>- username: {user.username}</li>
                            <li>- email: {user.email}</li>
                            <li>- phone: {user.phone}</li>
                            <li>- company: {user.company.name}</li>
                            <li>- website: {user.website}</li>
                            <li>- address: </li>
                            <ul style={{ listStyle: "disc" }}>
                                <li>street: {user.address.street}</li>
                                <li>suite: {user.address.suite}</li>
                                <li>city: {user.address.city}</li>
                                <li>zipcode: {user.address.zipcode}</li>
                            </ul>
                        </ul>
                    </div>
                </div>}
            </section>
        </>
    )
}

export default User
