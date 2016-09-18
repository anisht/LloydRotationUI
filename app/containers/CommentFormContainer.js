import React from 'react';

import CommentForm from '../components/CommentForm';

const CommentFormContainer = React.createClass({
    getInitialState() {
        return {
            text: ""
        };
    },
    handleSubmit: function(e) {
        e.preventDefault();
        this.props.addComment(this.state.text);
        this.setState({text: ""});
    },
    handleChange: function(e) {
        this.setState({text: e.target.value});
    },
    render() {
        return (
            <CommentForm
                text={this.state.text}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
            />
        );
    }
});

export default CommentFormContainer;