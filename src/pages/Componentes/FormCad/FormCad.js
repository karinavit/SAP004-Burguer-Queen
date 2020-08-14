import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Radio from "../Radio/Radio";
import Button from "../Button/Button";
import firebase from "../../../fireconfig";
import "firebase/auth";
import "firebase/firestore";

function FormCad() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cargo, setCargo] = useState("");

  const register = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(() => {
        const userId = firebase.auth().currentUser.uid;
        firebase
          .firestore()
          .collection("user")
          .doc(userId)
          .set({
            id_user: userId,
            displayName: name,
            email: email,
            cargo: cargo,
          })
          .then(
            firebase
              .auth()
              .currentUser.updateProfile({
                displayName: name,
              })
              .then(alert("Cadastro efetuado, volte e faça o login."))
          );
      });
  };

  return (
    <>
      <form className="form-login">
        <h2>Cadastro</h2>
        <Input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <div className="btn-radio">
          <Radio
            className="radio"
            type="radio"
            text="Salão"
            value="salão"
            name="cargo"
            onChange={(e) => setCargo(e.target.value)}
          />
          <Radio
            className="radio"
            type="radio"
            text="Cozinha"
            value="cozinha"
            name="cargo"
            onChange={(e) => setCargo(e.target.value)}
          />
        </div>
        <div className="btn-btn">
          <Button onClick={(e) => register(e)}>Cadastrar</Button>
          <Button>
            <Link to="/">Voltar</Link>
          </Button>
        </div>
      </form>
    </>
  );
}

export default FormCad;
