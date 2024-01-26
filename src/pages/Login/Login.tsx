import { useForm } from 'react-hook-form'
import { IFormAuthValues } from '../../utils/interfaces'
import { Link, useNavigate } from 'react-router-dom'
import { API_KEY } from '../../utils/Api'

export function Login() {
  const { register, handleSubmit } = useForm<IFormAuthValues>()
  const navigate = useNavigate()

  async function loginUser(user: IFormAuthValues) {
    const response = await fetch(`${API_KEY}api/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    if (!response.ok) {
      const data = await response.json()
      alert(data.error)
      throw new Error(data.error)
    }

    const data = await response.json()
    const token = data.token
    localStorage.setItem('token', token)
    console.log(token)

    navigate('/area-logada')
  }

  async function onSubmit(userData: IFormAuthValues) {
    loginUser(userData)
  }

  return (
    <>
      <header>
        <nav>
          <Link to={'/'}>Ir para home</Link>
        </nav>
      </header>

      <h1>Login</h1>
      <hr />

      <h2>Preencha seus dados</h2>

      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <input
          type="email"
          id="email"
          {...register('email')}
          placeholder="email@email.com"
        />
        <input
          type="password"
          id="password"
          {...register('password')}
          placeholder="Sua senha"
        />
        <button type="submit">Efetuar Login</button>
      </form>
    </>
  )
}
