import React from 'react';

import FroshPage from '../components/FroshPage';

const FroshPageContainer = React.createClass({
    getInitialState() {
        return {
            comments: [
                {
                    author: "Joon Hee Lee",
                    content: "This guy is cool!",
                },
                {
                    author: "Anish Thilagar",
                    content: "This guy is aite",
                },
                {
                    author: "Joon Hee Lee",
                    content: "This guy is cool!",
                }, 
            ],
        };
    },
    addComment(author, content){
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