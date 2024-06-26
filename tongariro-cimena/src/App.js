import './App.css';
import NavBar from  './components/NavBar.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Store from './pages/Store.js';


function App() {

  /* this is a switch statement that will determine which component to render based on the current URL path */
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/home":
      Component = Home
      break
    case "/about":
      Component = About
      break
    case "/contact":
      Component = Contact
      break
    case "/store":
      Component = Store
      break


  }
  return (
    <div className="App">
      <header className="App-header">
        <title>Tongariro Cinemas</title>
      </header>
      <>
      <NavBar />
      <Component />
      </>
    </div>
  );
}

export default App;
