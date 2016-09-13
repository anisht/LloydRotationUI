import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';

import FroshCardContainer from '../containers/FroshCardContainer';

const FroshGrid = (props) => (
    <Grid fluid>
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