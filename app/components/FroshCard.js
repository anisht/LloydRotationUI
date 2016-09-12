import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styles = {
    cardStyle: {
        cursor: 'pointer',
        margin: "15px",
    },
    overlayPadding: {
        padding: "0px 8px 8px 8px",
    },
    noPadding: {
        padding: "0px",
    },
    titleFont: {
        fontSize: 16,
        lineHeight: "25px",
    }

}

const FroshCard = (props) => (
    <Card style={styles.cardStyle} onTouchTap={props.handleClick}>
        <CardMedia
            overlay={
                <CardTitle 
                    title={props.frosh.displayName}
                    subtitle={"Preferred: " + props.frosh.preferredName}
                    titleStyle={styles.titleFont}
                    style={styles.overlayPadding}
                />
            }
            overlayContentStyle={styles.noPadding}
        >
            <img src={props.frosh.image}/>
        </CardMedia>
    </Card>
);

export default FroshCard;