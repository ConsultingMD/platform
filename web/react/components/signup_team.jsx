// Copyright (c) 2015 Spinpunch, Inc. All Rights Reserved.
// See License.txt for license information.


var utils = require('../utils/utils.jsx');
var client = require('../utils/client.jsx');

module.exports = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var team = {};
        var state = { server_error: "" };

        team.email = this.refs.email.getDOMNode().value.trim().toLowerCase();
        if (!team.email || !utils.isEmail(team.email)) {
            state.email_error = "Please enter a valid email address";
            state.inValid = true;
        }
        else {
            state.email_error = "";
        }

        if (state.inValid) {
            this.setState(state);
            return;
        }

        client.signupTeam(team.email,
            function(data) {
                if (data["follow_link"]) {
                    window.location.href = data["follow_link"];
                }
                else {
                    window.location.href = "/signup_team_confirm/?email=" + encodeURIComponent(team.email);
                }
            }.bind(this),
            function(err) {
                state.server_error = err.message;
                this.setState(state);
            }.bind(this)
        );
    },
    getInitialState: function() {
        return {  };
    },
    render: function() {

        var email_error = this.state.email_error ? <label className='control-label'>{ this.state.email_error }</label> : null;
        var server_error = this.state.server_error ? <div className={ "form-group has-error" }><label className='control-label'>{ this.state.server_error }</label></div> : null;

        return (
            <form role="form" onSubmit={this.handleSubmit}>
                <div className={ email_error ? "form-group has-error" : "form-group" }>
                    <input autoFocus={true} type="email" ref="email" className="form-control" placeholder="Email Address" maxLength="128" />
                    { email_error }
                </div>
                { server_error }
                <div className="form-group">
                    <button className="btn btn-md btn-primary" type="submit">Sign up</button>
                </div>
                <div className="form-group margin--extra-2x">
                    <span><a href="/find_team">{"Find my " + strings.Team}</a></span>
                </div>
            </form>
        );
    }
});


