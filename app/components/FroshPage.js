import React from 'react';
import Avatar from 'material-ui/Avatar';
import {Grid, Row, Col} from 'react-flexbox-grid';
import DocumentTitle from 'react-document-title';

import FroshDetailedCard from './FroshDetailedCard';
import CommentContainer from '../containers/CommentContainer';
import CommentFormContainer from '../containers/CommentFormContainer';
// import RatingContainer from '../containers/RatingContainer';
import RatingFormContainer from '../containers/RatingFormContainer';

const FroshPage = (props) => (
    <DocumentTitle title={props.frosh.displayName}>
        <Grid>
            <Row>
                <Col xs={12} sm={4} md={4}>
                    <FroshDetailedCard frosh={props.frosh}/>
                </Col>
                <Col xs={12} sm={8} md={8}>
                    <div style={{margin: "40px 20px 20px 20px"}}>
                        <RatingFormContainer
                            currentRating={props.currentRating}
                            updateRating={props.updateRating}
                        />
                    </div>
                    <div style={{margin: "20px"}}>
                        <CommentFormContainer addComment={props.addComment}/>
                        <br/>
                        {props.comments.map(function(comment, index){
                            return (
                                <CommentContainer
                                    key={index}
                                    author={comment.user}
                                    comment_id={comment.id}
                                    timestamp={comment.timestamp}
                                    rating={comment.rating}
                                    content={comment.content}
                                    comment_id={comment.id}
                                    deleteComment={props.deleteComment}
                                />
                            )
                        })}
                    </div>
                </Col>
            </Row>
        </Grid>
    </DocumentTitle>
);

export default FroshPage;