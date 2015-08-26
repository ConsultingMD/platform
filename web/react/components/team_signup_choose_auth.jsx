// Copyright (c) 2015 Spinpunch, Inc. All Rights Reserved.
// See License.txt for license information.

var Constants = require('../utils/constants.jsx');

export default class ChooseAuthPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        var buttons = [];
        if (this.props.services.indexOf(Constants.GITLAB_SERVICE) !== -1) {
            buttons.push(
                    <a
                        className='btn btn-custom-login gitlab'
                        href='#'
                        onClick={
                            function clickGit(e) {
                                e.preventDefault();
                                this.props.updatePage('service', Constants.GITLAB_SERVICE);
                            }.bind(this)
                        }
                        >
                        <span className='icon' />
                        <span>Create new {strings.Team} with GitLab Account</span>
                    </a>
            );
        }

        if (this.props.services.indexOf(Constants.GOOGLE_SERVICE) !== -1) {
            buttons.push(
                    <a
                        className='btn btn-custom-login google'
                        href='#'
                        onClick={
                            function clickGoogle(e) {
                                e.preventDefault();
                                this.props.updatePage('service', Constants.GOOGLE_SERVICE);
                            }.bind(this)
                        }
                        >
                        <span className='icon' />
                        <span>Create new {strings.Team} with Google Apps Account</span>
                    </a>
            );
        }

        if (this.props.services.indexOf(Constants.EMAIL_SERVICE) !== -1) {
            buttons.push(
                    <a
                        className='btn btn-custom-login email'
                        href='#'
                        onClick={
                            function clickEmail(e) {
                                e.preventDefault();
                                this.props.updatePage('email', '');
                            }.bind(this)
                        }
                        >
                        <span className='icon' />
                        <span>Create new {strings.Team} with email address</span>
                    </a>
            );
        }

        if (buttons.length === 0) {
            buttons = <span>No sign-up methods configured, please contact your system administrator.</span>;
        }

        return (
            <div>
                {buttons}
            </div>
        );
    }
}

ChooseAuthPage.defaultProps = {
    services: []
};
ChooseAuthPage.propTypes = {
    services: React.PropTypes.array,
    updatePage: React.PropTypes.func
};
