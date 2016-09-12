import React from 'react';

import FroshCardContainer from '../containers/FroshCardContainer';

import {Grid, Row, Col} from 'react-flexbox-grid';

const arr = [
    {
        id: 1,
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        curHouse: "Lloyd",
        image: "app/static/images/joon.jpeg",
    },
    {
        id: 2,
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        curHouse: "Lloyd",
        image: "app/static/images/anish.jpeg",
    },
    {
        id: 3,
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        curHouse: "Lloyd",
        image: "app/static/images/joon.jpeg",
    },
    {
        id: 4,
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        curHouse: "Lloyd",
        image: "app/static/images/anish.jpeg",
    },
    {
        id: 5,
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        curHouse: "Lloyd",
        image: "app/static/images/joon.jpeg",
    },
    {
        id: 6,
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        curHouse: "Lloyd",
        image: "app/static/images/anish.jpeg",
    },
    {
        id: 7,
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        curHouse: "Lloyd",
        image: "app/static/images/joon.jpeg",
    },
    {
        id: 8,
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        curHouse: "Lloyd",
        image: "app/static/images/anish.jpeg",
    },
    {
        id: 9,
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        curHouse: "Lloyd",
        image: "app/static/images/joon.jpeg",
    },
    {
        id: 10,
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        curHouse: "Lloyd",
        image: "app/static/images/anish.jpeg",
    },
    {
        id: 11,
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        curHouse: "Lloyd",
        image: "app/static/images/joon.jpeg",
    },
    {
        id: 12,
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        curHouse: "Lloyd",
        image: "app/static/images/anish.jpeg",
    },
    {
        id: 13,
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        curHouse: "Lloyd",
        image: "app/static/images/joon.jpeg",
    },
    {
        id: 14,
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        curHouse: "Lloyd",
        image: "app/static/images/anish.jpeg",
    },
    {
        id: 15,
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        curHouse: "Lloyd",
        image: "app/static/images/joon.jpeg",
    },
    {
        id: 16,
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        curHouse: "Lloyd",
        image: "app/static/images/anish.jpeg",
    },
    {
        id: 17,
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        curHouse: "Lloyd",
        image: "app/static/images/joon.jpeg",
    },
    {
        id: 18,
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        curHouse: "Lloyd",
        image: "app/static/images/anish.jpeg",
    },
    {
        id: 19,
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        curHouse: "Lloyd",
        image: "app/static/images/joon.jpeg",
    },
    {
        id: 20,
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        curHouse: "Lloyd",
        image: "app/static/images/anish.jpeg",
    },
    {
        id: 21,
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        curHouse: "Lloyd",
        image: "app/static/images/joon.jpeg",
    },
    {
        id: 22,
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        curHouse: "Lloyd",
        image: "app/static/images/anish.jpeg",
    },
    {
        id: 23,
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        curHouse: "Lloyd",
        image: "app/static/images/joon.jpeg",
    },
    {
        id: 24,
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        curHouse: "Lloyd",
        image: "app/static/images/anish.jpeg",
    },
]

const FroshGrid = () => (
    <Grid fluid>
        <Row>
            {arr.map(function(frosh, index) {
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