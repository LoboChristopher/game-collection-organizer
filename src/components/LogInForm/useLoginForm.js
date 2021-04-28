import React, { useState } from "react";
import api from "../../services/api";
import Router from "next/router";
// import { Container } from './styles';

const useLoginForm = () => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
    await api
      .post("/auth/authenticate", {
        email: event.target[0].value,
        password: event.target[1].value,
      })
      .then((response) =>
        response.status === 200
          ? (localStorage.setItem("session", JSON.stringify(response.data)),
            Router.push("/home"))
          : console.log("Dados Errados")
      );
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};

export default useLoginForm;
