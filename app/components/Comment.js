import React from 'react';
import Divider from 'material-ui/Divider';
import {lightBlue500} from 'material-ui/styles/colors';

const styles = {
    bold: {
        fontWeight: "bold",
        color: lightBlue500,
    },
}

const Comment = (props) => (
    <div>
        <p style={styles.bold}>{props.author}</p>
        <p>{props.content}</p>
        <Divider />
    </div>
);

export default Comment;