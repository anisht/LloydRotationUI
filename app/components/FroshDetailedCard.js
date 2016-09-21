import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styles = {
    cardStyle: {
        marginTop: "40px",
        marginLeft: "40px",
        width: "80%",
    },
}

const FroshDetailedCard = (props) => (
    <div>
        <Card style={styles.cardStyle}>
            <CardMedia>
                <img src={"static/" + props.frosh.photo_url} height="370" alt="No image :("/>
            </CardMedia>
            <CardTitle
                title={props.frosh.displayName}
                subtitle={<span>Preferred Name: {props.frosh.preferredName}
                          <br/>Rotating out of: {props.frosh.rotationHouse}</span>} 
            />
        </Card>
    </div>
);

export default FroshDetailedCard;