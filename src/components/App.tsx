import React from 'react';
import '../components/styles/App.css';
import Cuerpo from './Cuerpo';
import styled from 'styled-components';
import ButtonAppBar from "./Example1";

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
          <ButtonAppBar/>
            <header className="App-header">
                <h1>Welcome to this journey. </h1>
                <h2>We are just starting and we <strong>love</strong> having you on our <strong>first steps</strong></h2>
                <h3>Go and try our minimal viable product</h3>
                 👇️
                <a href="https://mykids.ar/#/">
                    <Button>Try it for free!</Button>
                </a>
            </header>
        </div>
    );
}

export default App;
