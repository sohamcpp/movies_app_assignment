import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Latest from "./Pages/Latest/Latest";
import Popular from "./Pages/Popular/Popular";
import Toprated from "./Pages/Toprated/Toprated";
import Upcoming from "./Pages/Upcoming/Upcoming";

function App() {
  return (
    <BrowserRouter>
    <Header />
    
    <div className="app">
        
          <Switch>
            <Route path="/" component={Latest} exact />
            <Route path="/popular" component={Popular} />
            <Route path="/toprated" component={Toprated} />
            <Route path="/upcoming" component={Upcoming} />
          </Switch>
      
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
