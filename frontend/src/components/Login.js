import React, { useState } from 'react';

const Login = () => {

	const [login, setLogin] = useState(false);

	return (
		<div className='contenedor'>
			<h1>Formulario de Registro</h1>

			<div className='contenedor-interno'>
				<form>
					<input type='email' placeholder='Email *'/>
					<input type='password' placeholder='Contraseña *'/>
					<input type='submit' value='Registrarme' className='btn'/>
				</form>
			</div>
		</div>
	);
}

export default Login;