import React from 'react';
import './App.css';
import Game from './components/Game';

// PUBLIC_INTERFACE
function App() {
  /** Top-level layout that hosts the Tic Tac Toe Game component. */
  return (
    <div className="App">
      <header className="app-header">
        <h1 className="title">Tic Tac Toe</h1>
      </header>
      <main className="app-main">
        <Game />
      </main>
      <footer className="app-footer" aria-label="Footer">
        <p>
          Built with React • Accessible and keyboard friendly
        </p>
      </footer>
    </div>
  );
}

export default App;
