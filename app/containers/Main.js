import React from 'react';

import Header from '../components/Header';

const Main = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    handleClickHome: function(e) {
        e.preventDefault();
        this.context.router.push('/');
        window.scrollTo(0, 0);
    },
    render: function() {
        return (
            <div>
                <Header handleClickHome={this.handleClickHome} />
                { this.props.children }
            </div>
        )
    }
});

export default Main;

