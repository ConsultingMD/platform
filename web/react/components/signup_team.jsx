// Copyright (c) 2015 Spinpunch, Inc. All Rights Reserved.
// See License.txt for license information.

var ChoosePage = require('./team_signup_choose_auth.jsx');
var EmailSignUpPage = require('./team_signup_with_email.jsx');
var SSOSignupPage = require('./team_signup_with_sso.jsx');

export default class TeamSignUp extends React.Component {
    constructor(props) {
        super(props);

        this.updatePage = this.updatePage.bind(this);

        this.state = {page: 'choose', service: ''};
    }
    updatePage(page, service) {
        this.setState({page: page, service: service});
    }
    render() {
        if (this.state.page === 'email') {
            return <EmailSignUpPage />;
        } else if (this.state.page === 'service' && this.state.service !== '') {
            return <SSOSignupPage service={this.state.service} />;
        } else {
            return (
                <ChoosePage
                    services={this.props.services}
                    updatePage={this.updatePage}
                />
            );
        }
    }
}

TeamSignUp.defaultProps = {
    services: []
};
TeamSignUp.propTypes = {
    services: React.PropTypes.array
};
