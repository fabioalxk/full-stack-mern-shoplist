import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import AppNavBar from "./components/AppNavBar";
import { Container } from "reactstrap";
import ShopList from "./components/ShopList";
import AddItem from "./components/AddItem";
import { initialLoadingAction } from "./actions/itemActions";
import { userLoadingAction } from "./actions/authActions";
class App extends Component {
  componentDidMount() {
    store.dispatch(initialLoadingAction());
    store.dispatch(userLoadingAction());
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <Container>
            <AddItem />
            <ShopList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
