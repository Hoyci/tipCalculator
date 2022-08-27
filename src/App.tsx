import Content from "./components/Content";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import './app.css';

function App() {
  return (
    <div className="main-app">
      <GlobalStyles />
      <Header />
      <Content />
    </div>
  );
}

export default App;
