import React from 'react';
import { Link } from 'react-router'

import FroshCard from '../components/FroshCard';

const FroshCardContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    render() {
        return (
            <Link to={`/frosh/${this.props.frosh.id}`}>
                <FroshCard
                    frosh={this.props.frosh}
                />
            </Link>
        );
    }
});

export default FroshCardContainer;