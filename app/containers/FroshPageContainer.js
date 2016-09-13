import React from 'react';

import FroshPage from '../components/FroshPage';
import apiClient from '../utils/apiClient';

const FroshPageContainer = React.createClass({
    getInitialState: function() {
        return {
            comments: [],
            loading: true,
        };
    },
    componentDidMount: function() {
        this.setState({
            comments: this.requestComments(),
            loading: false,
        });
    },
    requestComments: function() {
        return apiClient.getComments();
    },
    addComment: function(author, content){
        if (content) {
            this.setState({
                comments: this.state.comments.concat([{
                    author: author,
                    content: content,
                }]),
            });
        }
    },
    render() {
        return (
            <FroshPage
                frosh={this.props.location.state.frosh}
                comments={this.state.comments}
                addComment={this.addComment}
                username="Joon Hee Lee" // TODO: Need to keep track of logged in user somehow
            />
        );
    }
});

export default FroshPageContainer;