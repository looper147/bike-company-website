import React from 'react';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        }
    }
}))

export default function Carousel() {
    const classes = styles();
    return (
        <div className={classes.root}>
            <Paper />
        </div>

    );
}