import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movie: [],
  };
  getMovies = async () => {
    const movies = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
    );
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state; //ES6 문법
    return <div>{isLoading ? "Loading" : "we are ready"}</div>;
  }
}

export default App;
