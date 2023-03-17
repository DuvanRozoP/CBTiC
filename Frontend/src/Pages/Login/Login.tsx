import './Login.css';

function Login() {
  return (
    <section className='ContainerLogin'>
      <section>
        <img src='/src/assets/Presentation/Unimeta 2.png' />
        <section>
          <h2>Usuario:</h2>
          <input type='email' placeholder='Ingrese el usuario'/>
          <h2>Contraseña:</h2>
          <input type='password' placeholder='Ingrese la contraseña'/>
          <h4>
            Haz Olvidado tu contraseña?, Haz click <a href=''>aqui</a>
          </h4>
          <button>Login</button>
        </section>
      </section>
      <section>
        <h1>carousel</h1>
      </section>
    </section>
  );
}

export default Login;
