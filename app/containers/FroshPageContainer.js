import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import FroshPage from '../components/FroshPage';
import apiClient from '../utils/apiClient';

const styles = {
    loading: {
        width: "100%",
        height: "70vh",
        textAlign: "center",
    },
    center: {
        marginTop: "10vh",
    },
}

const FroshPageContainer = React.createClass({
    getInitialState: function() {
        return {
            prefrosh_id: this.props.routeParams.prefrosh_id,
            frosh: null,
            comments: [],
            rating: null
        };
    },
    componentDidMount: function() {
        this.requestFrosh(this.state.prefrosh_id);
        this.requestComments(this.state.prefrosh_id);
        this.requestRating(this.state.prefrosh_id);
    },
    componentWillReceiveProps: function(nextProps) {
        this.setState({
            prefrosh_id: nextProps.routeParams.prefrosh_id,
            frosh: null,
            comments: [],
            rating: null
        });
        this.requestFrosh(nextProps.routeParams.prefrosh_id);
        this.requestComments(nextProps.routeParams.prefrosh_id);
        this.requestRating(nextProps.routeParams.prefrosh_id);
    },
    requestFrosh: function(prefrosh_id) {
        apiClient.getFrosh(prefrosh_id)
            .then(function (frosh) {
                this.setState({
                    frosh: frosh,
                });
            }.bind(this));
    },
    requestComments: function(prefrosh_id) {
        apiClient.getComments(prefrosh_id)
            .then(function (comments) {
                this.setState({
                    comments: comments,
                });
            }.bind(this));
    },
    requestRating: function(prefrosh_id) {
        apiClient.getRating(prefrosh_id)
            .then(function (rating) {
                this.setState({
                    rating: rating,
                });
            }.bind(this));
    },
    addComment: function(comment) {
        if (comment) {
            apiClient.postComment(this.state.prefrosh_id, comment)
                .then(function (response) {
                    this.requestComments(this.state.prefrosh_id);
                }.bind(this));
        }
    },
    updateRating: function(rating) {
        if (rating) {
            apiClient.updateRating(this.state.prefrosh_id, rating)
                .then(function (response) {
                    this.requestRating(this.state.prefrosh_id);
                }.bind(this));
        }
    },
    deleteComment: function(comment_id) {
        apiClient.deleteComment(comment_id)
            .then(function(response) {
                this.requestComments(this.state.prefrosh_id);
            }.bind(this));
    },
    render() {
        return (
            !this.state.frosh
            ?
                <div style={styles.loading}>
                    <CircularProgress style={styles.center} size={140}/>
                </div>
            :
                <FroshPage
                    frosh={this.state.frosh}
                    rating={this.state.rating}
                    comments={this.state.comments}
                    updateRating={this.updateRating}
                    addComment={this.addComment}
                    deleteComment={this.deleteComment}
                />
        );
    }
});

export default FroshPageContainer;