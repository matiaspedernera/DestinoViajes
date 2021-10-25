import "./login.css";
import { useContext } from "react";
import UserContext from "../context/userContext";
import { useState } from "react/cjs/react.development";
import { useHistory } from "react-router-dom";

const MiPerfil = () => {
  const { loginUsuario, logoutUsuario, user } = useContext(UserContext);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const logIn = (e) => {
    e.preventDefault();

    const userInfo = {
      phone,
      name,
      email,
    };

    loginUsuario(userInfo);
    history.push("/");
    console.log(user);
  };

  const logOut = () => {
    logoutUsuario();
  };

  return (
    <div className="login-card">
      {user ? (
        <>
          <h4>Mi perfil</h4>
          <p>Usuario: {user.name}</p>
          <p>Mi e-mail: {user.email}</p>
          <button className="btn btn-danger" onClick={logOut}>
            Cerrar sesión
          </button>
        </>
      ) : (
        <form onSubmit={logIn}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Dirección de email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              required
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Nombre de usuario
            </label>
            <input
              className="form-control"
              id="exampleInputPassword1"
              value={name}
              onChange={({ target }) => setName(target.value)}
              required
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="inputTelefono" className="form-label">
              Teléfono
            </label>
            <input
              type="number"
              className="form-control"
              id="inputTelefono"
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
              required
            ></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Ingresar
          </button>
        </form>
      )}
    </div>
  );
};

export default MiPerfil;
