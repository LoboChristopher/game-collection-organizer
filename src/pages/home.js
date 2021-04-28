import React from "react";

// import { Container } from './styles';

function Home() {
  const session = localStorage.getItem("session");
  const data = JSON.parse(session)

  return <p>BEM-VINDO! {data.user.name}</p>;
}

export default Home;
