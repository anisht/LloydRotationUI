import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Col} from 'react-flexbox-grid';

const styles = {
    cardWidth: {
        cursor: 'pointer',
        margin: "20px",
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
    <Col xs={6} sm={3} md={3} lg={2}>
        <Card style={styles.cardWidth}>
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
    </Col>
);

export default FroshCard;