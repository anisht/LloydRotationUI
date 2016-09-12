import React from 'react';
import Avatar from 'material-ui/Avatar';
import {Grid, Row, Col} from 'react-flexbox-grid';

import FroshDetailedCard from './FroshDetailedCard';
import CommentForm from './CommentForm';
import Comment from './Comment';

var commentsArray = [
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
    {
        author: "Anish Thilagar",
        content: "This guy is aite",
    },
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
    {
        author: "Anish Thilagar",
        content: "This guy is aite",
    },
    {
        author: "Joon Hee Lee",
        content: "This guy is cool!",
    },
    {
        author: "Anish Thilagar",
        content: "This guy is aite",
    },
 
];

const FroshPage = (props) => (
    <Grid>
        <Row>
            <Col xs={12} sm={4} md={4}>
                <FroshDetailedCard frosh={props.frosh}/>
            </Col>
            <Col xs={12} sm={8} md={8}>
                <div style={{margin: "20px"}}>
                    <CommentForm />
                    {commentsArray.map(function(comment, index){
                        return <Comment author={comment.author} content={comment.content} key={index} />
                    })}
                </div>
            </Col>
        </Row>
    </Grid>
);

export default FroshPage;