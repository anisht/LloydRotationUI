import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';

import FroshCardContainer from '../containers/FroshCardContainer';
import FroshFilterMenu from './FroshFilterMenu'

const styles = {
    filter: {
        margin: "0px 20px 20px 20px",
    }
};

const FroshGrid = (props) => (
    <Grid fluid>
        <div style={styles.filter}>
            Event Filter:
            <FroshFilterMenu
                value={props.filterValue}
                handleChange={props.handleFilterValueChange}
            />
        </div>
        <Row>
            {props.froshList.map(function(frosh, index) {
                return (
                    <Col xs={6} sm={3} md={3} lg={2} key={index}>
                        <FroshCardContainer frosh={frosh}/>
                    </Col>
                )
            })}
        </Row>
    </Grid>
);

export default FroshGrid;