import logo from "./logo.svg";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { home } from "./routes/home/home";
import { about } from "./routes/aboutus/aboutus";
import { contact } from "./routes/contactus/contactus";
import { ProtectedRoute } from './router.config/protect.route';
function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={home} />
            <ProtectedRoute exact path="/about" component={about} />
            <Route path="/contact" component={contact} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
