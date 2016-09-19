import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
    </div>
);

export default CommentForm;