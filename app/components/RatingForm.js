import React from 'react';
import Slider from 'material-ui/Slider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import {amber500} from 'material-ui/styles/colors';
import {Grid, Row, Col} from 'react-flexbox-grid';

const styles = {
    submit: {
        textAlign: "right",
    },
    categoryFont: {
        color: amber500,
    },
    floatLeft: {
        float: "left",
    },
    floatRight: {
        float: "right",
    },
    clearFloat: {
        clear: "both"
    },
}

const SliderWidget = (props) => (
    <div>
        <div style={styles.categoryFont}>
                {props.category}
        </div>
        <div style={styles.floatLeft}>
            Current: {props.currentValue}
        </div>
        <div style={styles.floatRight}>
            New: {props.value}
        </div>
        <Slider
            step={0.10}
            value={props.value / 10.0}
            onChange={props.handleChange}
            style={styles.clearFloat}
        />
    </div>
)

const RatingForm = (props) => (
    <div>
        <Grid fluid>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <SliderWidget
                        category="Fit"
                        currentValue={props.currentRating
                                    ? props.currentRating.fit
                                    : "N/A"}
                        value={props.fit}
                        handleChange={props.handleChangeFit}
                    />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <SliderWidget
                        category="Comfort Level"
                        currentValue={props.currentRating
                                    ? props.currentRating.comfort_level
                                    : "N/A"}
                        value={props.comfort_level}
                        handleChange={props.handleChangeComfortLevel}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <SliderWidget
                        category="Would Participate"
                        currentValue={props.currentRating
                                    ? props.currentRating.would_participate
                                    : "N/A"}
                        value={props.would_participate}
                        handleChange={props.handleChangeWouldParticipate}
                    />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <SliderWidget
                        category="Camel"
                        currentValue={props.currentRating
                                    ? props.currentRating.camel
                                    : "N/A"}
                        value={props.camel}
                        handleChange={props.handleChangeCamel}
                    />
                </Col>
            </Row>
        </Grid>
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