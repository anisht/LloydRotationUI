import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import FroshGrid from '../components/FroshGrid';
import apiClient from '../utils/apiClient';

const num_dinners = 8;

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

const FroshGridContainer = React.createClass({
    getInitialState: function() {
        return {
            froshList: [],
            filteredFroshList: [],
            filterValue: 0,
        }
    },
    componentDidMount: function() {
        this.requestFroshList();
    },
    requestFroshList: function() {
        apiClient.getFroshList()
            .then(function (froshList) {
                this.setState({
                    froshList: froshList,
                    filteredFroshList: froshList,
                });
            }.bind(this));
    },
    updateFroshList: function() {
        this.setState({
            filteredFroshList: this.state.froshList.filter((frosh) => frosh.dinner_id === 1),
        });
    },
    handleFilterValueChange: function(e, index, value) {
        if (value !== this.state.filterValue) {
            this.setState({
                filterValue: value,
                filteredFroshList: this.getFilteredFroshList(value),
            });
        }
    },
    getFilteredFroshList: function(filterValue)  {
        if (filterValue == 0) {
            return this.state.froshList;
        }
        else if (filterValue <= num_dinners) {
            return this.state.froshList.filter((frosh) => frosh.dinner_id === filterValue);
        }
        else {
            return this.state.froshList.filter((frosh) => frosh.dessert_id === filterValue - num_dinners);
        }
    },
    render: function() {
        return (
            this.state.filteredFroshList
            ?
                <FroshGrid
                    froshList={this.state.filteredFroshList}
                    filterValue={this.state.filterValue}
                    handleFilterValueChange={this.handleFilterValueChange}
                />
            :
                <div style={styles.loading}>
                    <CircularProgress style={styles.center}/>
                </div>
        );
    }
});

export default FroshGridContainer;