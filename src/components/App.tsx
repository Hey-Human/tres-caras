import React from 'react';
import '../components/styles/App.css';
import Cuerpo from './Cuerpo';
import styled from 'styled-components';
import ButtonAppBar from "./ButtonAppBar";

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  }
`

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <ButtonAppBar/>
        <h1 className="My-Texto">My kids!</h1>
        <h2 className="My-Texto">We love having you here</h2>
        {/*<ButtonAppBar/>*/}
        <br/>
        <br/>
        <br/>
        <br/>
        <h3 className="My-Texto">Go and try our minimal viable product</h3>
        <h3>👇</h3>️
        <a href="https://mykids.ar/#/">
          <Button>Try it for free!</Button>
        </a>
      </div>
    </div>
  );
}

export default App;
