import * as yup from 'yup'

export const postSchema = yup.object({
  title: yup
    .string()
    .required('El título es requerido')
    .min(5, 'El título debe tener al menos 5 caracteres')
    .max(100, 'El título no puede exceder 100 caracteres'),
  body: yup
    .string()
    .required('El contenido es requerido')
    .min(20, 'El contenido debe tener al menos 20 caracteres'),
  category: yup
    .string()
    .required('La categoría es requerida')
    .oneOf([
      'Tecnología',
      'Programación',
      'Diseño',
      'Marketing',
      'Negocios',
      'Educación',
      'Estilo de vida',
      'Salud',
      'Viajes'
    ], 'La categoría debe ser una opción válida'),
  userId: yup
    .number()
    .required('El autor es requerido'),
  imageUrl: yup
    .string()
    .required('La URL de la imagen es requerida')
}).required()
