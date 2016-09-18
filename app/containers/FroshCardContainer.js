import React from 'react';

import FroshCard from '../components/FroshCard';

const FroshCardContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    handleClick: function(e) {
        e.preventDefault();
        this.context.router.push({
            pathname: '/frosh/' + this.props.frosh.id,
        });
        window.scrollTo(0, 0);
    },
    render() {
        return (
            <FroshCard
                frosh={this.props.frosh}
                handleClick={this.handleClick}
            />
        );
    }
});

export default FroshCardContainer;