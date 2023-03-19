import img from '../image/loginImg.png'
import Form from '../components/Form'

const RegisterPage = () => {
  return (
    <div className='App'>
    <section >
        <div className="register">
            <div className="container">
                <h2>Register page</h2>
                <span>Register page with field validation</span>
                <Form buttonText={"Register"}/>
            </div>
            <div className="image-container">
               <img src={img} alt="react-img" />
            </div>
        </div>
    </section>
    </div>
  )
}

export default RegisterPage
