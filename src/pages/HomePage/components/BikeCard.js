import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    test: {
        maxWidth: 345,
        backgroundColor: "orangered",
        color: "white",
    },
    media: {
        height: 210,

    },
    button: {
        color: "white",
    }
});

export default function BikeCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.test}>
            <CardActionArea >
                <CardMedia
                    className={classes.media}
                    image={props.picSrc}
                    title={props.picTitle}
                />

                <CardContent>
                    <Typography variant="h5" component="h5">
                        {props.bikeName}
                    </Typography>

                    <Typography variant="h5" component="h4">
                        {props.bikePrice}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions >
                <Button size="small" className={classes.button}>
                    Purchase
                </Button>

                <Button size="small" className={classes.button}>
                    Check Specifications
                </Button>
            </CardActions>
        </Card>
    );
}