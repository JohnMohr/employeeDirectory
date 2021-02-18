import './app.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import front from "./components/front"


function App() {
  return (
    <div>
      <Router>
        <Route exact path ="/" component={front}/>
      </Router>
    </div>
  );
}

export default App;
