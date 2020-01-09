import React from 'react';
import './App.css';

import Header from './Header';
import withHover from './HOC';
import DifferentComponent from './DifferentComponent';

const HeaderWithHover = withHover(Header);
const DifferentComponentWithHover = withHover(DifferentComponent);

function App() {
  return (
    <div className="App">
      <HeaderWithHover />
      <DifferentComponentWithHover />
    </div>
  );
}

export default App;
