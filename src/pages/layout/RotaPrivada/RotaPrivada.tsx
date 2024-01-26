import { Outlet, Navigate } from 'react-router-dom'

export function RotaPrivada() {
  const isTokenValid = localStorage.getItem('token') //Pegar o token do local storage e comparar;
  //const isTokenValid = false //Teste de 'segurança'

  return isTokenValid ? <Outlet /> : <Navigate to="/login" />
}
