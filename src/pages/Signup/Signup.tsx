import { useForm } from "react-hook-form";
import "./styles.css";
import { API_KEY } from "../../utils/Api";
import { useNavigate } from "react-router-dom";
import { IFormAuthValues } from "../../utils/interfaces";

export function Signup() {
  const { register, handleSubmit } = useForm<IFormAuthValues>();
  const navigate = useNavigate();

  async function registerUser(user: IFormAuthValues) {
    try {
      const response = await fetch(`${API_KEY}/auth/create`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Algo deu errado com a requisição.");
      }

      navigate("/login");
    } catch (error) {
      alert(error);
    }
  }

  function onSubmit(data: IFormAuthValues) {
    registerUser(data);
  }

  return (
    <>
      <h1>Cadastro</h1>
      <hr />

      <h2>Preencha seus dados</h2>

      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <input
          type="text"
          id="login"
          {...register("login")}
          placeholder="Seu login"
        />
        <input
          type="password"
          id="senha"
          {...register("senha")}
          placeholder="Sua senha"
        />
        <button type="submit">Efetuar cadastro</button>
      </form>
    </>
  );
}
