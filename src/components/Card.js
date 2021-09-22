import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';
import ButtonComponent from './Button';

const useStyles = makeStyles({
    card: {
        width: "240px",
        height: "300px",
        borderRadius: "8px"
    },
    cardContent: {
        padding: "20px",
        textAlign: "center",
        margin: "auto"
    }
});

const CardComponent = ({ name, username, website, id }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card} >
            <CardContent className={classes.cardContent}>
                <Avatar sx={{ width: 100, height: 100, margin: "auto", fontSize: 30, color: "black" }}>{name[0].toUpperCase()}</Avatar>
                <Typography sx={{ margin: "auto", paddingTop: "20px", fontWeight: "bold" }}>{name}</Typography>
                <Typography sx={{ fontStyle: "italic", fontSize: "13px", paddingBottom: "12px", color: "gray" }}>@{username}</Typography>
                <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">{`http://${website}`}</a>
                <CardActions sx={{ margin: "auto", justifyContent: "center", paddingTop: "30px" }}>
                    <ButtonComponent id={id} />
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default CardComponent
