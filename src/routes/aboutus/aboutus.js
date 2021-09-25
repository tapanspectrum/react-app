import React from "react";
import auth from "../../common/auth";
export const about = (props) => {
  return <div>
    <h1>About Page</h1>
    <button onClick={() => auth.logout(()=>{
        props.history.push('/');
      })
        }>Log Out</button>
  </div>;
};
