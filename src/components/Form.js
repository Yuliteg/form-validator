import ModalWindow from '../components/Modal';
import { useFormik } from 'formik';
import { useState } from 'react';
import { mySchema } from '../helper/validation';

const Form = ({ buttonText }) => {
  const [isModalShow, setIsModalShow] = useState(false)

  const onSubmit = async (values, actions) => {
    setIsModalShow(true)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsModalShow(false)
    actions.resetForm();
  };

  const { values,
    errors,
    handleSubmit,
    touched,
    handleChange,
    handleBlur,
    isValid,
    isSubmitting,
    dirty, } = useFormik({
      initialValues: {
        name: "",
        secondName: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: mySchema,
      onSubmit,
    })

  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <p className='field'>
          <input
            className="input"
            placeholder="Enter your first name"
            type={`text`}
            name={`name`}
            autoComplete="new-password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
        </p>
        {touched.name && errors.name && (
          <p className="error-msg">{errors.name}</p>
        )}

        <p className='field'>
          <input
            className="input"
            placeholder="Enter your last name"
            type={`text`}
            name={`secondName`}
            autoComplete="new-password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.secondName}
          />
        </p>
        {touched.secondName && errors.secondName && (
          <p className="error-msg">{errors.secondName}</p>
        )}

        <p className='field'>
          <input
            className="input"
            placeholder="Enter your password"
            type={`password`}
            name={`password`}
            autoComplete="new-password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
        </p>
        {touched.password && errors.password && (
          <p className="error-msg">{errors.password}</p>
        )}

        <p className='field'>
          <input
            className="input"
            placeholder="Confirm your password"
            type={`password`}
            name={`confirmPassword`}
            autoComplete="new-password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
          />
        </p>
        {touched.confirmPassword && errors.confirmPassword && (
          <p className="error-msg">{errors.confirmPassword}</p>
        )}

        <button
          className="btn"
          type="submit"
          disabled={isSubmitting}
        >{buttonText}</button>
      </form>
      <ModalWindow isModalShow={isModalShow} />
    </>
  )
}


export default Form
