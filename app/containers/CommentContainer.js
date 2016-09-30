import React from 'react';

import Comment from '../components/Comment';

const CommentContainer = React.createClass({
    getInitialState: function() {
        return {
            dialogOpen: false,
        }
    },
    componentWillReceiveProps: function(nextProps) {
        this.setState({
            dialogOpen: false,
        });
    },
    handleDialogOpen: function() {
        this.setState({
            dialogOpen: true,
        });
    },
    handleDialogClose: function() {
        this.setState({
            dialogOpen: false,
        });
    },
    handleDelete: function() {
        this.props.deleteComment(this.props.comment_id);
    },
    render() {
        return (
            <Comment
                author={this.props.author}
                timestamp={this.props.timestamp}
                comment_id={this.props.comment_id}
                rating={this.props.rating}
                content={this.props.content}
                dialogOpen={this.state.dialogOpen}
                handleDelete={this.handleDelete}
                handleDialogOpen={this.handleDialogOpen}
                handleDialogClose={this.handleDialogClose}
            />
        );
    }
});

export default CommentContainer;