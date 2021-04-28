import React, { useState } from "react";
import api from "../../services/api";
// import { Container } from './styles';

const useSignUpForm = (callback) => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = async (event) => {

    if (event) {
      event.preventDefault();
    }
    await api.post("/auth/register", {
      name:event.target[0].value,
      email:event.target[1].value,
      password:event.target[2].value
    }).then(response => console.log(response))
    callback();
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

export default useSignUpForm;
