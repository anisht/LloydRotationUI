import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    rightAlign: {
        textAlign: "right"
    },
}

const CommentForm = () => (
    <div>
        <TextField
            fullWidth
            floatingLabelText="Comment"
            multiLine
            rowsMax={4}
        />
        <div style={styles.rightAlign}>
            <RaisedButton label="Submit" />
        </div>
    </div>
);

export default CommentForm;