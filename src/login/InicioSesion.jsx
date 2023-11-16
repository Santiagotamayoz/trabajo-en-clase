import Correo from '../inputs/Correeo'
import Contraseña from '../inputs/Contrasena'
import BontonLogin from '../buttons/BotonLogin'
import './InicioSesion.css'
function InicioSesion(){
    return(<>
    <div className='bloque'>
        <h1 className='titulo'>Login</h1>
            <Correo></Correo>
            <Contraseña></Contraseña>
            <BontonLogin></BontonLogin>
            <p className='parrafoUno'>Al registrarse, aceptas nuestras Condiciones de uso y Politica de privacidad. </p>
            <p className='parrafoDos'>¿Ya tienes una cuenta? <strong> Registrarse </strong></p>
    </div>
    </>)
}

export default InicioSesion