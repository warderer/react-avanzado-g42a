import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { postSchema } from '../../schemas/Post'
import { ToastContainer, toast } from 'react-toastify'
import './NewPost.css'

const NewPost = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm(
    {
      resolver: yupResolver(postSchema),
      defaultValues: {
        title: '',
        content: '',
        category: '',
        author: '',
        publishDate: ''
      }
    }
  )

  const onSubmit = async (data) => {
    try {
      // Simular envío de datos
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Datos del post:', data)
      toast.success(
        <div>
          <h3>¡Post creado exitosamente!</h3>
          <p>Título: {data.title}</p>
          <p>Autor: {data.author}</p>
          <p>Categoría: {data.category}</p>
          <p>Fecha: {new Date(data.publishDate).toLocaleString()}</p>
        </div>,
        { closeButton: true, autoClose: 5000, position: 'top-right' }
      )
      reset()
    } catch (error) {
      console.error('Error al crear el post:', error)
      toast.error(
        <div>
          <h3>Error al crear el post</h3>
          <p>Ha ocurrido un error:</p>
          <p>{error.message}</p>
        </div>,
        { closeButton: true, autoClose: 5000, position: 'top-right' }
      )
    }
  }

  const categories = [
    'Tecnología',
    'Programación',
    'Diseño',
    'Marketing',
    'Negocios',
    'Educación',
    'Estilo de vida',
    'Salud',
    'Viajes'
  ]

  return (
    <div className='newpost-container'>
      <div className='newpost-header'>
        <h1>Crear Nueva Entrada</h1>
        <p>Comparte tus ideas con el mundo</p>
      </div>

      <div className='newpost-form'>
        <div className='form-group'>
          <label htmlFor='title' className='form-label'>
            Título del Post *
          </label>
          <input
            type='text'
            id='title'
            className={`form-input ${errors.title ? 'error' : ''}`}
            placeholder='Ingresa un título para tu post'
            {...register('title')}
          />
          <span className='error-message'>{errors.title?.message}</span>

        </div>

        <div className='form-group'>
          <label htmlFor='content' className='form-label'>
            Contenido *
          </label>
          <textarea
            id='content'
            rows='6'
            className={`form-textarea ${errors.content ? 'error' : ''}`}
            placeholder='Escribe el contenido de tu post aquí...'
            {...register('content')}
          />
          <span className='error-message'>{errors.content?.message}</span>
        </div>

        <div className='form-row'>
          <div className='form-group'>
            <label htmlFor='category' className='form-label'>
              Categoría *
            </label>
            <select
              id='category'
              className={`form-select ${errors.category ? 'error' : ''}`}
              {...register('category')}
            >
              <option value=''>Selecciona una categoría</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <span className='error-message'>{errors.category?.message}</span>
          </div>

          <div className='form-group'>
            <label htmlFor='author' className='form-label'>
              Autor *
            </label>
            <input
              type='text'
              id='author'
              className={`form-input ${errors.author ? 'error' : ''}`}
              placeholder='Tu nombre'
              {...register('author')}
            />
            <span className='error-message'>{errors.author?.message}</span>
          </div>
        </div>

        <div className='form-group'>
          <label htmlFor='publishDate' className='form-label'>
            Fecha de Publicación *
          </label>
          <input
            type='datetime-local'
            id='publishDate'
            className={`form-input ${errors.publishDate ? 'error' : ''}`}
            {...register('publishDate')}
          />
          <span className='error-message'>{errors.publishDate?.message}</span>
        </div>

        <div className='form-actions'>
          <button
            type='button'
            className='btn btn-secondary'
            onClick={() => { reset() }}
          >
            Limpiar
          </button>
          <button
            type='button'
            className='btn btn-primary'
            disabled={isSubmitting}
            onClick={handleSubmit(onSubmit)}
          >
            {isSubmitting ? 'Publicando...' : 'Publicar Post'}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default NewPost
