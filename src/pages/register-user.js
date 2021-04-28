import React, { useState } from "react";
import useSignUpForm from "../components/SignUpForm/useSignUpForm";
import api from "../services/api";
import Button from "@material-ui/core/Button";

export default function RegisterUser() {
  const signup = () => {
    alert(`Usuário ${inputs.name} criado com sucesso!`);
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signup);

  return (
    <>
      <h1>Registrar Usuário</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={inputs.name}
            required
          />
        </div>
        <div>
          <label>Email Address: </label>
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            value={inputs.email}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            value={inputs.password}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}
