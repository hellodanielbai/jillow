import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    };

    handleSubmit(e) {
        console.log(this.props)
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
    };

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul> 
        );
    };

    render() {
        let formInput = {}
        if (this.props.formType === 'login') {
            formInput['title'] = 'Sign in'
            formInput['className'] = 'login-form-container'
        } else {
            formInput['title'] = 'Signup'
            formInput['className'] = 'signup-form-container'
        }

        return(
            <ul>
                <div className={formInput['className']}>
                    <form className={formInput['className']} onSubmit={this.handleSubmit}>
                        <h1 className="jillow-title">Welcome to Jillow</h1>
                        <div>
                            <label id="email-password">Email
                                <input type="text"
                                    className="user-input"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                />
                            </label>
                            <br></br>
                            <label id="email-password">Password
                                <input type="password"
                                    className="user-input"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </label>

                            <input className="session-submit" type="submit" value={formInput['title']} />
                        </div>
                    </form>
                </div>
            </ul>
        );
    };
};

export default SessionForm;