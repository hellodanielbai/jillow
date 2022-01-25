import React from "react";

const App = () => (
    <div>
        <header>
            <h1>Jillow</h1>
            <GreetingContainer />
        </header>

        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
);

export default App