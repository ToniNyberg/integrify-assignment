import React, { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import userService from '../services/users'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: { display: "flex", flexWrap: "wrap" },
    card: { width: "240px", height: "300px", borderRadius: "8px" },
    cardContent: { padding: "20px", textAlign: "center", margin: "auto" }
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
        <div
            className={classes.root}
        // style={{ display: "flex", flexWrap: "wrap" }}
        >
            {users.map((user) => {
                const { id, name, username, website } = user

                return (
                    <div style={{ margin: '20px' }}>
                        <Card className={classes.card} >
                            <CardContent className={classes.cardContent}>
                                <Avatar sx={{ width: 100, height: 100, margin: "auto", fontSize: 30, color: "black" }}>{name[0].toUpperCase()}</Avatar>
                                <Typography sx={{ margin: "auto", paddingTop: "20px", fontWeight: "bold" }}>{name}</Typography>
                                <Typography sx={{ fontStyle: "italic", fontSize: "13px", paddingBottom: "12px", color: "gray" }}>@{username}</Typography>
                                <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">{`http://${website}`}</a>
                                <CardActions sx={{ margin: "auto", justifyContent: "center", paddingTop: "30px" }}>
                                    <Button variant="contained" component={RouterLink} to={`/users/${id}`}>MORE DETAILS</Button>
                                </CardActions>
                            </CardContent>
                        </Card>
                    </div>
                )

            })}
        </div>
    )

}

export default Users
