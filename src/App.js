import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Sidebar, Action } from "./components";
import { Home, Income, Expense, Chart } from "./pages";
import {
  Wrapper,
  SidebarWrapper,
  MainWrapper,
  ActionWrapper,
} from "./GlobalStyles";
import "./index.css";

function App() {
  return (
    <Router>
      <Wrapper>
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
        <MainWrapper>
          <Switch>
            <Route path="/income" exact component={Income} />
            <Route path="/expense" exact component={Expense} />
            <Route path="/chart" exact component={Chart} />
            <Route path="/" exact component={Home} />
          </Switch>
        </MainWrapper>
        <ActionWrapper>
          <Action />
        </ActionWrapper>
      </Wrapper>
    </Router>
  );
}

export default App;
