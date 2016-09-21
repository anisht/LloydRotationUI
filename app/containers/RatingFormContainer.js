import React from 'react';

import RatingForm from '../components/RatingForm';

const RatingFormContainer = React.createClass({
    getInitialState() {
        return {
            fit: this.props.currentRating ? this.props.currentRating.fit : 5,
            snackBarOpen: false,
        };
    },
    componentWillReceiveProps: function(nextProps) {
        this.setState({
            fit: nextProps.currentRating ? nextProps.currentRating.fit : 5,
        });
    },
    handleSubmit: function(e) {
        e.preventDefault();
        this.props.updateRating({
            fit: this.state.fit,
        });
        this.setState({
            snackBarOpen: true,
        });
    },
    handleChange: function(e, value) {
        this.setState({fit: Math.round(value * 10)});
    },
    handleSnackBarClose: function() {
        this.setState({
            snackBarOpen: false,
        });
    },
    render() {
        return (
            <RatingForm
                currentRating={this.props.currentRating}
                fit={this.state.fit}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                snackBarOpen={this.state.snackBarOpen}
                handleSnackBarOpen={this.handleSnackBarOpen}
                handleSnackBarClose={this.handleSnackBarClose}
            />
        );
    }
});

export default RatingFormContainer;