import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {title, genre, date} = props;

  return (
    <Main
      title={title}
      genre={genre}
      date={date}
    />
  );
};


export default App;
