import { Outlet, Navigate } from "react-router-dom";

export function RotaFinanceiro() {
  const isCargoFinanceiro = false; //Verificar se o usuário contem cargo financeiro

  return isCargoFinanceiro ? <Outlet /> : <Navigate to="/area-logada" />;
}
