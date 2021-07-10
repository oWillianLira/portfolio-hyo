import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from './Views/Home';
import About from './Views/About';
import Contact from './Views/Contact';
import Static from './Views/Arts/Static';
import Animations from './Views/Arts/Animations';

export default function Routes() {
  function closeShadow() {
    let shadow = document.querySelector('.modal-backdrop');
    if (shadow) {
      shadow.remove();
      document.body.classList.remove('modal-open');
      document.body.removeAttribute('style', '');
    }
  }
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Switch location={location}>
              <Route path="/" exact onchange={closeShadow()} component={Home} />
              <Route path="/about/" onchange={closeShadow()} component={About} />
              <Route path="/contact/" onchange={closeShadow()} component={Contact} />
              <Route path="/static/" onchange={closeShadow()} component={Static} />
              <Route path="/animations/" onchange={closeShadow()} component={Animations} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    ></Route>
  );
}
