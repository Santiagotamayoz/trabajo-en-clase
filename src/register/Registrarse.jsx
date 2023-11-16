import BotonRegister from '../buttons/BotonRegister'
import Usuario from '../inputs/Usuario'
import CorreoDos from '../inputs/Correo'
import ContraseñaDos from '../inputs/Contraseña'
import './Registrarse.css'
function Registrarse(){
    return(<>
        <div className='bloqueUno'>
            <h1 className='tituloUno'>Registrate</h1>
            <Usuario></Usuario>
            <CorreoDos></CorreoDos>
            <ContraseñaDos></ContraseñaDos>
            <BotonRegister></BotonRegister>
            <p className='parrafoUnoUno'>Al registrarse, aceptas nuestras Condiciones de uso y Politica de privacidad. </p>
            <p className='parrafoDosDos'>¿Ya tienes una cuenta? <strong> Iniciar Sesion </strong></p>
        </div>
    </>)
}

export default Registrarse