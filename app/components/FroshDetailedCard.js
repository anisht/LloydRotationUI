import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styles = {
    cardStyle: {
        marginTop: "40px",
        marginLeft: "40px",
        width: "80%",
    },
}

const FroshDetailedCard = React.createClass({
    render() {
    return(
    <div>
        <Card style={styles.cardStyle}>
            <CardMedia>
                <img src={this.props.frosh.image}/>
            </CardMedia>
            <CardTitle
                title={this.props.frosh.displayName}
                subtitle={<span>Preferred Name: {this.props.frosh.preferredName}
                          <br/>Rotating out of: {this.props.frosh.curHouse}</span>} 
            />
        </Card>
    </div>);
    }
});

export default FroshDetailedCard;