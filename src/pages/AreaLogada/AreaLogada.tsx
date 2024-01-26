import { useNavigate } from 'react-router-dom'

export function AreaLogada() {
  const navigate = useNavigate()

  return (
    <>
      <h1>AreaLogada</h1>

      <button onClick={() => navigate('/area-logada/Agencia')}>
        Ver infos sobre Agencia
      </button>
      <button onClick={() => navigate('/area-logada/Saldo')}>
        Ver infos sobre seu Saldo
      </button>
      <button onClick={() => navigate('/area-logada/Pix')}>
        Ver infos sobre Pix
      </button>

      <button
        onClick={() => {
          localStorage.removeItem('token')
          navigate('/login')
        }}
      >
        Deslogar
      </button>
    </>
  )
}
