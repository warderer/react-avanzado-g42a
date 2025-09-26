import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../../schemas/Login'
import { ToastContainer, toast } from 'react-toastify'
import { useAuthContext } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import './login.css'

const Login = () => {
  const { login } = useAuthContext()
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm(
    {
      resolver: yupResolver(loginSchema),
      defaultValues: {
        email: '',
        password: ''
      }
    }
  )

  const onSubmit = async (data) => {
    try {
      console.log('Datos del post:', data)

      const users = await fetch('https://jsonplaceholder.typicode.com/users')
      const usersData = await users.json()
      const user = usersData.find(user => user.email === data.email)
      if (!user) {
        throw new Error('Usuario no encontrado')
      }
      login(user)

      toast.success(
        '¡Inicio de sesión exitoso!',
        { closeButton: true, autoClose: 5000, position: 'top-right' }
      )

      setTimeout(() => {
        navigate('/newpost') // Redirigir a la página de nuevo post después de 1.5 segundos
      }, 1500)
    } catch (error) {
      console.error('Error al crear en el Login:', error)
      toast.error(
        <div>
          <h3>Error al iniciar sesión</h3>
          <p>Ha ocurrido un error:</p>
          <p>{error.message}</p>
        </div>,
        { closeButton: true, autoClose: 5000, position: 'top-right' }
      )
    }
  }

  return (
    <div className='login-container'>
      <div className='login-header'>
        <h1>Iniciar Sesión</h1>
        <p>Ingresa tus credenciales para acceder a tu cuenta</p>
      </div>

      <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label htmlFor='email' className='form-label'>
            Correo Electrónico *
          </label>
          <input
            type='email'
            id='email'
            className={`form-input ${errors.email ? 'error' : ''}`}
            placeholder='tu@email.com'
            {...register('email')}
          />
          {errors.email && (
            <span className='error-message'>{errors.email.message}</span>
          )}
        </div>

        <div className='form-group'>
          <label htmlFor='password' className='form-label'>
            Contraseña *
          </label>
          <input
            type='password'
            id='password'
            className={`form-input ${errors.password ? 'error' : ''}`}
            placeholder='••••••••'
            {...register('password')}
          />
          {errors.password && (
            <span className='error-message'>{errors.password.message}</span>
          )}
        </div>

        <div className='form-options'>
          <label className='remember-me'>
            <input type='checkbox' {...register('remember')} />
            <span>Recordar mi cuenta</span>
          </label>
          <a href='/forgot-password' className='forgot-password'>
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        <div className='form-actions'>
          <button
            type='submit'
            className='btn btn-primary'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </div>

        <div className='register-link'>
          ¿No tienes una cuenta? <a href='/register'>Regístrate aquí</a>
        </div>
      </form>

      <ToastContainer />
    </div>
  )
}
export default Login
