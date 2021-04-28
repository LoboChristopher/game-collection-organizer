import React from "react";
import useLoginForm from "../components/LogInForm/useLoginForm";
import Button from "@material-ui/core/Button";
import Router from "next/router";

export default function HomePage() {
  const { inputs, handleInputChange, handleSubmit } = useLoginForm();
  

  function RedirectRegister() {
    Router.push("/register-user");
  }

  return (
    <>
    
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={handleInputChange}
            value={inputs.email}
            required
          />
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            value={inputs.password}
            required
          />
        </div>
        <div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disableElevation
          >
            Logar
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={RedirectRegister}
          >
            Registrar
          </Button>
        </div>
      </form>
    </>
  );
}
