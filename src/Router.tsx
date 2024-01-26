import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { Signup } from './pages/Signup/Signup'
import { AreaLogada } from './pages/AreaLogada/AreaLogada'
import { RotaPrivada } from './pages/layout/RotaPrivada/RotaPrivada'
import { RotaFinanceiro } from './pages/layout/RotaFinanceiro/RotaFinanceiro'
import { Profile } from './pages/Profile/Profile'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Signup />} />
        {/* Para que está logado */}
        <Route element={<RotaPrivada />}>
          <Route path="area-logada" element={<AreaLogada />} />
          <Route path="area-logada/:username" element={<Profile />} />

          <Route element={<RotaFinanceiro />}>
            <Route path="area-logada/transferencias" element={<AreaLogada />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
