import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Skeleton from "react-loading-skeleton/lib/";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const PurButton = styled(Button)`
    &&{
        background: ${({ theme }) => theme.bikeCardBtBg1} ;
        color: white !important;
    }
    &:hover{
         opacity: 0.8;
         background: ${({ theme }) => theme.bikeCardBtBg1} !important;
    }
    
    `

const SpecButton = styled(Button)`
    &&{
        background: ${({ theme }) => theme.bikeCardBtBg2} ;
        color: white !important;
    }
    &:hover{
         opacity: 0.8;
         background: ${({ theme }) => theme.bikeCardBtBg2} !important;
    }
    
    `

const ThemedCard = styled(Card)`
    && {
        width:345px;
        max-width: 345 px !important;
        background: ${({ theme }) => theme.bikeCardBg}!important;
        color: ${({ theme }) => theme.text} !important;
    }
    
    
        
`
const useStyles = makeStyles({

    media: {
        width: 350,
        height: 210,
    },


});

function BikeCardDemo(props) {
    const classes = useStyles();
    const { loading = false } = props;
    return (
        <ThemedCard >

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

                    <Typography variant="h5" component="h5" >
                        {loading ? <Skeleton /> : props.bikePrice}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions >
                {loading ? <Skeleton variant={"rect"} width="60px" height="30px" /> :
                    <PurButton size="small" >
                        Purchase
                    </PurButton>
                }
                {loading ? <Skeleton variant={"rect"} width="100px" height="30px" /> :
                    <SpecButton size="small">
                        Check Specifications
                    </SpecButton>
                }
            </CardActions>

        </ThemedCard >
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