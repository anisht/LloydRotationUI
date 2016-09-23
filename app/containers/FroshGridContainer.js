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
        const filterValue = localStorage.filterValue ? Number(localStorage.filterValue) : 0;
        localStorage.filterValue = filterValue;

        return {
            froshList: [],
            filteredFroshList: [],
            filterValue: filterValue,
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
                    filteredFroshList: this.getFilteredFroshList(this.state.froshList, this.state.filterValue),
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
            localStorage.filterValue = value;
            this.setState({
                filterValue: value,
                filteredFroshList: this.getFilteredFroshList(this.state.froshList, value),
            });
        }
    },
    getFilteredFroshList: function(froshList, filterValue)  {
        if (filterValue == 0) {
            return froshList;
        }
        else if (filterValue <= num_dinners) {
            return froshList.filter((frosh) => frosh.dinner_id === filterValue);
        }
        else {
            return froshList.filter((frosh) => frosh.dessert_id === filterValue - num_dinners);
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