import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from './Views/Home';
import About from './Views/About';
import Contact from './Views/Contact';
import Static from './Views/Arts/static';
import Animations from './Views/Arts/animations';

export default function Routes() {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Switch location={location}>
              <Route path="/" exact component={Home} />
              <Route path="/about/" component={About} />
              <Route path="/contact/" component={Contact} />
              <Route path="/static/" component={Static} />
              <Route path="/animations/" component={Animations} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    ></Route>
  );
}
