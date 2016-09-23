import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import DinnerGrid from '../components/DinnerGrid';
import apiClient from '../utils/apiClient';

const styles = {
    loading: {
        width: "100%",
        height: "70vh",
        textAlign: "center",
    },
    center: {
        marginTop: "10vh",
    },
}

const DinnerGridContainer = React.createClass({
    getInitialState: function() {
        return {
            froshList: [],
            loading: true,
            dinner_id: this.props.routeParams.dinner_id
        }
    },
    componentDidMount: function() {
        this.requestFroshList(this.state.dinner_id);
    },
    componentWillReceiveProps: function(nextProps) {
        this.setState({
            froshList: [],
            dinner_id: nextProps.routeParams.dinner_id,
            loading: true
        });
        this.requestFroshList(nextProps.routeParams.dinner_id);
    },
    requestFroshList: function(dinner_id) {
        apiClient.getDinnerList(dinner_id)
            .then(function (froshList) {
                this.setState({
                    froshList: froshList,
                    loading: false,
                });
            }.bind(this));
    },
    render: function() {
        return (
            this.state.loading
            ?
                <div style={styles.loading}>
                    <CircularProgress style={styles.center} size={140}/>
                </div>
            :
                <FroshGrid froshList={this.state.froshList}/>
        );
    }
});

export default DinnerGridContainer;