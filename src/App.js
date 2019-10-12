import React, { Component } from 'react';
import CurrentMembers from './CurrentMembers';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>🍕🍕 Pizza Party 🍕🍕</h1>
          <ul>
            <li><a href="https://www.tcr.pizza">About</a></li>
            <li><a href="https://github.com/ethereum-classic-cooperative/pizzapartybot">Code</a></li>
            <li><a href="https://leadboard.tcr.pizza">Leaderboard</a></li>
          </ul>
        </header>
        <article>
          <p>
            Wondering what's going on here? Check out the <a href="https://www.tcr.pizza">about page</a>.
          </p>
        </article>
        <article>
          <CurrentMembers />
        </article>
        <div className="spacer" />
        <article className="tcr-info">
          Sourcing data from PizzaParty Registry at <span className="code">0x0ba217252e67ab3832fbfc6af9b0ab4132d6eb84</span> (Kotti network).
        </article>
      </div>
    );
  }
}

export default App;
