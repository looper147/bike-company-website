import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Skeleton from "react-loading-skeleton/lib/";
import PropTypes from 'prop-types';
const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        backgroundColor: "lightgrey",
        color: "#2E3C42",
    },
    media: {
        width: 350,
        height: 210,
    },
    button1: {
        background: "green",
        color: "white",
        "&:hover": {
            background: "green",
            color: "orange",
        }
    },
    button2: {
        background: "blue",
        color: "white",
        "&:hover": {
            background: "blue",
            color: "orange",
        }
    },

});

function BikeCardDemo(props) {
    const classes = useStyles();
    const { loading = false } = props;
    return (
        <Card className={classes.card}>

            <CardActionArea >
                {loading ? <Skeleton variant={"rect"} className={classes.media} /> :
                    <CardMedia
                        className={classes.media}
                        image={props.picSrc}
                        title={props.picTitle}
                    />
                }


                <CardContent>
                    <Typography variant="body2" component="p">
                        {loading ? <Skeleton /> : props.bikeName}
                    </Typography>

                    <Typography variant="h5" component="h5" style={{ color: "#2E3C42" }}>
                        {loading ? <Skeleton /> : props.bikePrice}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions >
                {loading ? <Skeleton variant={"rect"} width="60px" height="30px" /> :
                    <Button size="small" className={classes.button1}>
                        Purchase
                    </Button>
                }
                {loading ? <Skeleton variant={"rect"} width="100px" height="30px" /> :
                    <Button size="small" className={classes.button2}>
                        Check Specifications
                    </Button>
                }
            </CardActions>

        </Card >
    );
}
BikeCardDemo.propTypes = {
    loading: PropTypes.bool,
};
export default function BikeCard(props) {
    return (
        <>
            <BikeCardDemo picSrc={props.picSrc} picTitle={props.picTitle} bikeName={props.bikeName} bikePrice={props.bikePrice} />
        </>
    );
}