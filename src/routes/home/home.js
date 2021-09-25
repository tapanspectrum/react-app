import React from "react";
import auth from "../../common/auth";

export const home = (props) => {
  return (
    <div>
      <h1>Welcome to home page !!</h1>
      <button onClick={() => auth.login(()=>{
        props.history.push('/about');
      })
        }>Login</button>
    </div>
  );
};
