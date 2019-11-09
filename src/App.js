import React from "react";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Unsplash, { toJson } from "unsplash-js";
import "./App.css";
import "./reset.css";

class App extends React.Component {
  state = {
    photos: [],
    page: 0
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.getData();
    }
  }

  getData() {
    this.setState({ loading: true });
    const unsplash = new Unsplash({
      accessKey: process.env.REACT_APP_API_KEY
    });
    unsplash.photos
      .listPhotos(this.state.page, 15, "latest")
      .then(toJson)
      .then(json => {
        //console.log(json);
        this.setState({
          photos: [...this.state.photos, ...json],
          loading: false
        });
      });
  }

  handleClick = () => this.setState({ page: this.state.page + 1 });

  render() {
    const { loading, photos } = this.state;
    console.log(photos);
    return (
      <div className="app-container">
        <Header />

        <Landing photos={this.state.photos} />
        <button onClick={this.handleClick}>Update</button>
      </div>
    );
  }
}

export default App;
