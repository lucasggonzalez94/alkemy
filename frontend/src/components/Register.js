import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Register = (props) => {

	const [user, setUser] = useState({
		email: '',
		password: '',
		balance: ''
	})

	const saveUser = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		})
	}

	const submitUser = (e) => {
		e.preventDefault()

        if(user.email !== '' && user.password !== '' && user.balance !== 0 && !isNaN(user.balance)) {
            
            const ajax = new XMLHttpRequest();
            
            ajax.onreadystatechange = function() {
                if (ajax.readyState === 4 && ajax.status === 200) {

                    Swal.fire({
						icon: 'success',
						title: 'Registrado Exitosamente!'
					})
                }else {
                    console.log('Hubo un error');
                }
            };

            ajax.open('POST', 'http://localhost:3050/addusers');
            ajax.setRequestHeader('Content-Type', 'application/json');
            ajax.send(JSON.stringify(user));

            props.history.push('/');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Rellene los campos correctamente.'
            })
        }
	}

	return (
		<div className='contenedor'>
			<h1>Formulario de Registro</h1>

			<div className='contenedor-interno'>
				<form
					onSubmit={submitUser}
				>
					<input type='email' placeholder='Email *' onChange={saveUser}/>
					<input type='password' placeholder='Contraseña *' onChange={saveUser}/>
					<input type='number' placeholder='Saldo inicial' onChange={saveUser}/>
					<input type='submit' value='Registrarme' className='btn'/>
				</form>
			</div>
		</div>
	);
}

export default Register;