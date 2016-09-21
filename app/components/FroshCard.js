import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styles = {
    cardStyle: {
        cursor: 'pointer',
        margin: "8px",
    },
    overlayPadding: {
        padding: "0px 8px 8px 8px",
    },
    noPadding: {
        padding: "0px",
    },
    titleFont: {
        fontSize: "120%",
        lineHeight: "25px",
        textAlign: "center"
    },
}

const FroshCard = (props) => (
    <Card style={styles.cardStyle} onTouchTap={props.handleClick}>
        <CardMedia
            overlay={
                <CardTitle 
                    title={props.frosh.displayName}
                    titleStyle={styles.titleFont}
                    style={styles.overlayPadding}
                />
            }
            overlayContentStyle={styles.noPadding}
        >
            <img src={"static/" + props.frosh.photo_url} height="250" alt="No image :("/>
        </CardMedia>
    </Card>
);

export default FroshCard;