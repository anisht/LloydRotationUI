import React from 'react';

import CommentForm from '../components/CommentForm';

const CommentFormContainer = React.createClass({
    getInitialState() {
        return {
            text: "",
            snackBarOpen: false,
        };
    },
    componentWillReceiveProps: function(nextProps) {
        this.setState({
            text: "",
        });
    },
    handleSubmit: function(e) {
        e.preventDefault();
        this.props.addComment(this.state.text);
        this.setState({
            text: "",
            snackBarOpen: true,
        });
    },
    handleChange: function(e) {
        this.setState({text: e.target.value});
    },
    handleSnackBarClose: function() {
        this.setState({
            snackBarOpen: false,
        });
    },
    render() {
        return (
            <CommentForm
                text={this.state.text}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                snackBarOpen={this.state.snackBarOpen}
                handleSnackBarOpen={this.handleSnackBarOpen}
                handleSnackBarClose={this.handleSnackBarClose}
            />
        );
    }
});

export default CommentFormContainer;