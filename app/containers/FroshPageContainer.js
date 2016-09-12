import React from 'react';

import FroshPage from '../components/FroshPage';

const FroshPageContainer = React.createClass({
    render() {
        return (
            <FroshPage frosh={this.props.location.state.frosh}/>
        );
    }
});

export default FroshPageContainer;