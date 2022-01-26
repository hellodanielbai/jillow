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
        this.props.processForm(user);
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
        return(
            <ul>
                <div className="login-form-container">
                    <form className="login-form-box" onSubmit={this.handleSubmit}>
                        <h1>Session Login</h1>
                        
                        <div className="login-form">
                            <label>Email:
                                <input type="text"
                                    className="login-input"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                />
                            </label>

                            <label>Password:
                                <input type="password"
                                    className="login-input"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </label>

                            <input className="session-submit" type="submit" value={this.props.formType} />
                        </div>
                    </form>
                </div>
            </ul>
        );
    };
};

export default SessionForm;