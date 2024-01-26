import { useParams } from "react-router-dom";

export function Profile() {
  const { username } = useParams();

  return <h1>{`Olá, ${username}`}</h1>;
}
