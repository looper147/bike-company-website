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
    test: {
        maxWidth: 345,
        backgroundColor: "orangered",
        color: "white",
    },
    media: {
        width: 350,
        height: 210,

    },
    button: {
        color: "white",
    }
});

function BikeCardDemo(props) {
    const classes = useStyles();
    const { loading = false } = props;
    return (
        <Card className={classes.test}>

            <CardActionArea >
                {loading ? <Skeleton variant={"rect"} className={classes.media} /> :
                    <CardMedia
                        className={classes.media}
                        image={props.picSrc}
                        title={props.picTitle}
                    />
                }


                <CardContent>
                    <Typography variant="h5" component="h5">
                        {loading ? <Skeleton /> : props.bikeName}
                    </Typography>

                    <Typography variant="h5" component="h4">
                        {loading ? <Skeleton /> : props.bikePrice}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions >
                {loading ? <Skeleton variant={"button"} /> :
                    <Button size="small" className={classes.button}>
                        Purchase
                    </Button>
                }
                {loading ? <Skeleton variant={"button"} /> :
                    <Button size="small" className={classes.button}>
                        Check Specifications
                    </Button>
                }
            </CardActions>

        </Card>
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