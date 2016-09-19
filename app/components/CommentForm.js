import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

const styles = {
    submit: {
        textAlign: "right",
    },
}

const CommentForm = (props) => (
    <div>
        <TextField
            fullWidth
            floatingLabelText="Comment"
            multiLine
            rowsMax={4}
            value={props.text}
            onChange={props.handleChange}
        />
        <div style={styles.submit}>
            <RaisedButton
                label="submit"
                onTouchTap={props.handleSubmit}
            />
        </div>
        <Snackbar
            open={props.snackBarOpen}
            message="Comment added!"
            autoHideDuration={2000}
            onRequestClose={props.handleSnackBarClose}
        />
    </div>
);

export default CommentForm;