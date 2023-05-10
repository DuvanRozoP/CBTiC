import './Login.css';
import Slider from '../../Components/Slider/Slider';
import { useAuthStore } from '../../store/auth';
import { requestAuth } from '../../api/auth';
import axios from 'axios'

const mockimgs = [
  "https://picsum.photos/id/1024/400",
  "https://picsum.photos/id/1020/400"
]

function Login() {

  const setToken = useAuthStore(state => state.setToken)
  const hadleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value

    // const resLogin = await loginRequest(email, password)
    const request = await axios.post('http://localhost:3003/auth/signin',{
      email: "rozoparraduvan@gmail.com",
      password: "0123456789Kk+"
    },{ withCredentials: true })
    console.log(request);
    // setToken(resLogin)
  }

  return (
    <section className='ContainerLogin'>
      <form onSubmit={hadleSubmit}>
        <img src='/src/assets/Presentation/Unimeta 2.png' />
        <section>
          <h2>Usuario:</h2>
          <input type='email' placeholder='Ingrese el usuario'/>
          <h2>Contraseña:</h2>
          <input type='password' placeholder='Ingrese la contraseña'/>
          <p>
            Haz Olvidado tu contraseña?, Haz click <a href=''>aqui</a>
          </p>
          <button className='BtnLogin'>Login</button>
        </section>
      </form>
      <section>
          <Slider imgs={mockimgs}></Slider>
      </section>
    </section>
  );
}

export default Login;
