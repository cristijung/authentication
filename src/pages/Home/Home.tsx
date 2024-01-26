import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <header>
        <nav>
          <Link to={'/login'}>Ir para o login</Link>
        </nav>
      </header>
      <h1>Home</h1>
    </>
  )
}
