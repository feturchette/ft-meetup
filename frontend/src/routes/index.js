import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import MeetupForm from "../pages/Meetup/MeetupForm";
import View from "../pages/Meetup/View";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/meetup/:id" component={View} isPrivate />
      <Route path="/meetup" component={MeetupForm} isPrivate />
      <Route path="/view" component={View} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/" component={() => <h1>404 Not Found</h1>} />
    </Switch>
  );
}
