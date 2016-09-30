import React from 'react';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import {lightBlue500} from 'material-ui/styles/colors';

const styles = {
    author: {
        fontWeight: "bold",
        color: lightBlue500,
        float: "left",
    },
    deleteButton: {
        float: "right",
        marginTop: "8px",
    },
    content: {
        clear: "both"
    },
}

const Comment = (props) => (
    <div>
        <p style={styles.author}>{props.comment_id} | {props.author} | {props.timestamp} | upvotes: {props.rating}</p>
        {
            // Only show delete if comment isn't from admin
            props.author !== "admin" &&
            <FlatButton
                label="Delete"
                secondary={true}
                style={styles.deleteButton}
                onTouchTap={props.handleDialogOpen}
            />
        }
        <p style={styles.content}>{props.content}</p>
        <Divider />
        <Dialog
            title="Delete Confirmation"
            actions={[
              <FlatButton
                label="Delete"
                secondary={true}
                onTouchTap={props.handleDelete}
              />,
              <FlatButton
                label="Cancel"
                onTouchTap={props.handleDialogClose}
              />,
            ]}
            modal={false}
            open={props.dialogOpen}
            onRequestClose={props.handleDialogClose}
        >
            Are you sure you want to delete this comment?
        </Dialog>
    </div>
);

export default Comment;