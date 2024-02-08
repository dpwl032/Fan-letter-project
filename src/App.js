import logo from "./logo.svg";
import "./App.css";
import Router from "./shared/Router";
import GlobalStyle from "components/GlobalStyle";
import LetterProvider from "context/LettersContext";

function App() {
  return (
    <>
      <LetterProvider>
        <Router />
      </LetterProvider>
    </>
  );
}

export default App;
