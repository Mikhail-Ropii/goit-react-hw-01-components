import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './components/App';


ReactDOM.render(<App />, document.querySelector('#root'));


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


