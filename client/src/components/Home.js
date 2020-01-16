import React from "react";
import { graphql } from "react-apollo";
import query from "../queries/UserList";

const Home = props => {
  if (props.data.loading) return <div></div>;
  return (
    <div>
      {props.data.users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default graphql(query)(Home);
