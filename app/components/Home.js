import React from 'react';
import FroshCard from './FroshCard';

import {Grid, Row, Col} from 'react-flexbox-grid';

var arr = [
    {
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        image: "app/static/images/joon.jpeg",
    },
    {
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        image: "app/static/images/anish.jpeg",
    },
        {
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        image: "app/static/images/joon.jpeg",
    },
    {
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        image: "app/static/images/anish.jpeg",
    },
    {
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        image: "app/static/images/joon.jpeg",
    },
    {
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        image: "app/static/images/anish.jpeg",
    },
        {
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        image: "app/static/images/joon.jpeg",
    },
    {
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        image: "app/static/images/anish.jpeg",
    },
    {
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        image: "app/static/images/joon.jpeg",
    },
    {
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        image: "app/static/images/anish.jpeg",
    },
        {
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        image: "app/static/images/joon.jpeg",
    },
    {
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        image: "app/static/images/anish.jpeg",
    },
    {
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        image: "app/static/images/joon.jpeg",
    },
    {
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        image: "app/static/images/anish.jpeg",
    },
        {
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        image: "app/static/images/joon.jpeg",
    },
    {
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        image: "app/static/images/anish.jpeg",
    },
    {
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        image: "app/static/images/joon.jpeg",
    },
    {
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        image: "app/static/images/anish.jpeg",
    },
        {
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        image: "app/static/images/joon.jpeg",
    },
    {
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        image: "app/static/images/anish.jpeg",
    },
    {
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        image: "app/static/images/joon.jpeg",
    },
    {
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        image: "app/static/images/anish.jpeg",
    },
        {
        displayName: "Joon Hee Lee",
        preferredName: "Joon",
        image: "app/static/images/joon.jpeg",
    },
    {
        displayName: "Anish Thilagar",
        preferredName: "Anish",
        image: "app/static/images/anish.jpeg",
    },
]

const Home = () => (
    <Grid fluid>
        <Row>
            {arr.map(function(frosh) {
                return <FroshCard frosh={frosh}/>
            })}
        </Row>
    </Grid>
);

export default Home;