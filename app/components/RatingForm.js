import React from 'react';
import Slider from 'material-ui/Slider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import {amber500} from 'material-ui/styles/colors';

const styles = {
    submit: {
        textAlign: "right",
    },
    categoryFont: {
        fontWeight: 900,
        color: amber500,
    },
}

const RatingForm = (props) => (
    <div>
        <div style={styles.categoryFont}>
            Fit
        </div> <br/>
        Current: {props.currentRating ? props.currentRating.fit : "N/A"}
        <br/>
        New: {props.fit}
        <Slider
            step={0.10}
            value={props.fit / 10.0}
            onChange={props.handleChange}
        />
        <div style={styles.submit}>
            <RaisedButton
                label="update"
                onTouchTap={props.handleSubmit}
            />
        </div>
        <Snackbar
            open={props.snackBarOpen}
            message="Rating updated!"
            autoHideDuration={2000}
            onRequestClose={props.handleSnackBarClose}
        />
    </div>
);

export default RatingForm;