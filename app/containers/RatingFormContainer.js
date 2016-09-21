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
            comfort_level: nextProps.currentRating ? nextProps.currentRating.comfort_level : 5,
            would_participate: nextProps.currentRating ? nextProps.currentRating.would_participate : 5,
            camel: nextProps.currentRating ? nextProps.currentRating.camel : 5,
        });
    },
    handleSubmit: function(e) {
        e.preventDefault();
        this.props.updateRating({
            fit: this.state.fit,
            comfort_level: this.state.comfort_level,
            would_participate: this.state.would_participate,
            camel: this.state.camel,
        });
        this.setState({
            snackBarOpen: true,
        });
    },
    handleChangeFit: function(e, value) {
        this.setState({fit: Math.round(value * 10)});
    },
    handleChangeComfortLevel: function(e, value) {
        this.setState({comfort_level: Math.round(value * 10)});
    },
    handleChangeWouldParticipate: function(e, value) {
        this.setState({would_participate: Math.round(value * 10)});
    },
    handleChangeCamel: function(e, value) {
        this.setState({camel: Math.round(value * 10)});
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
                comfort_level={this.state.comfort_level}
                would_participate={this.state.would_participate}
                camel={this.state.camel}
                handleSubmit={this.handleSubmit}
                handleChangeFit={this.handleChangeFit}
                handleChangeComfortLevel={this.handleChangeComfortLevel}
                handleChangeWouldParticipate={this.handleChangeWouldParticipate}
                handleChangeCamel={this.handleChangeCamel}
                snackBarOpen={this.state.snackBarOpen}
                handleSnackBarOpen={this.handleSnackBarOpen}
                handleSnackBarClose={this.handleSnackBarClose}
            />
        );
    }
});

export default RatingFormContainer;