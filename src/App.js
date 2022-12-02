import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      Hello Welcome To My React App Using JavaScript as FrameWork
      <form>
        <label>Enter Your Name Here</label>
        <input type="text" id="fname" name="fname"></input>

        <a href='UserInterface/HomePage.html'>homePage</a>
      </form>
      <form>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>Hello This is the first React App created By me</div>
      
    </div>
      </form>
    </div>
  );
}

export default App;
