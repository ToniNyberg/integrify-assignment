import React, { useState, useEffect } from 'react'
import userService from '../services/users'
import CardComponent from "./Card"
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        maxWidth: 900,
        margin: "0 auto"
    }
});

const Users = () => {
    const classes = useStyles();
    const [users, setUsers] = useState([])

    const fetchUserData = async () => {
        const response = await userService.getAll()
        setUsers(response.data)
    }
    useEffect(() => {
        fetchUserData()
    }, [])

    return (
        <div className={classes.root}>
            {users.map((user) => {
                const { id, name, username, website } = user

                return (
                    <div key={id} style={{ margin: '20px' }}>
                        <CardComponent id={id} name={name} username={username} website={website} />
                    </div>
                )

            })}
        </div>
    )

}

export default Users
