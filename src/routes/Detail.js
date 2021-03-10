import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props; //props가 전달될때 기본적으로 Detail객체 안에 있다.
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { state } = this.props.location;
    if (state) {
      return (
        <div style={{ textAlign: "center" }}>
          <img src={state.poster} alt={state.poster} title={state.title}></img>
          <div>{state.title}</div>
          <div>{state.year}</div>
          <ul>
            {state.genres.map((genre, index) => {
              return <li key={index}>{genre}</li>;
            })}
          </ul>
          <p style={{ width: "500px" }}>{state.summary}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
