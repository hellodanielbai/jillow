import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            signInTabClicked: true,
            signUpTabClicked: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        // only if there are no errors
        // this.props.closeModal();
    };

    handleClick(state) {
        return (e) => {
            console.log(state)
            e.preventDefault()
            this.props.openModal(state)
            if (state === 'login') {
                this.setState({signInTabClicked: true})
                this.setState({signUpTabClicked: false})
            } else if (state === 'signup') {
                this.setState({signInTabClicked: false})
                this.setState({signUpTabClicked: true})
            }
        };
    };

    handleDemo() {
        let DemoUser;
        DemoUser = { email: "demo", password: "password"}  ;  
        return (e) => {
            e.preventDefault()
            this.props.login(DemoUser)
            this.props.closeModal();
        };
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
            formInput['className'] = 'modal-child-login'
        } else {
            formInput['title'] = 'Submit'
            formInput['className'] = 'modal-child-signup'
        }

        return(
            <div>
                <form className={formInput['className']} onSubmit={this.handleSubmit}>
                    <div className="modal-content">
                        <div className="header-tab-container">
                            <h1 className="jillow-title">Welcome to Jillow</h1>
                            <div className="signinnout">
                                <div className={`${this.state.signInTabClicked ? "tab-clicked" : ""}`}>
                                    <button id="sign-in" onClick={this.handleClick('login')}>Sign In</button>
                                </div>
                                <div className={`${this.state.signUpTabClicked ? "tab-clicked" : ""}`}>
                                    <button id="sign-up" onClick={this.handleClick('signup')}>New Account</button>
                                </div>
                            </div>
                        </div>

                        <hr className="divider"></hr>
                        <br></br>

                        <div className="input-parent">
                            <label id="email-password">Email</label>
                            <input type="text"
                                className="user-input"
                                value={this.state.email}
                                placeholder="Enter email"
                                onChange={this.update('email')}
                            />
                            <br></br>
                            
                            <div>
                                {this.renderErrors()}
                            </div>

                            <br></br>
                            <br></br>
                            <label id="email-password">Password</label>
                            <input type="password"
                                className="user-input"
                                value={this.state.password}
                                placeholder="Enter password"
                                onChange={this.update('password')}
                            />

                            <input className="modal-submit" type="submit" value={formInput['title']} />
                        </div>
                        <hr className="bottom-divider"></hr>

                        <input className="demo-submit" type="submit" onClick={this.handleDemo()} value="Demo Login" />
                    </div>
                </form>
            </div>
        );
    };
};

export default SessionForm;