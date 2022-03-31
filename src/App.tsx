import React from 'react';
// import componnents
import Nav from './components/nav';
import FirstPage from './pages/first-page';
import Recommended from './pages/recommended';
function App(): JSX.Element {

  return (
    <div className="App flex">
      <Nav/>
      <FirstPage/>
      <Recommended/>
    </div>
  );
}

export default App;
