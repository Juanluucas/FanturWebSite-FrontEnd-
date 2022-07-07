import React, { Component } from 'react';
//import '../assets/css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import {  styles } from "./loginFormUtils"
import { Link } from "react-router-dom";
import "./loginForm.css"
import Cookies from 'universal-cookie';
import Header from '../header';

const baseUrl="http://localhost:3001/usuarios";
const cookies = new Cookies();


class Login extends Component {
    state={
        form:{
            username: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    

    iniciarSesion=async()=>{
        
        // Valido que sea un correo electronico
        var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var esValido = expReg.test(this.state.form.username);
        if (esValido === true) {
            // aca me empiezo a comunicar con la base de datos 
            await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: "/"});
                cookies.set('apellido_materno', respuesta.apellido_materno, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('username', respuesta.username, {path: "/"});
                alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
                window.location.href="./menu";
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })
        } 
        else {
            alert('Debe ingresar un correo electronico');
        }
        

    }

    componentDidMount() {
        if(cookies.get('username')){
            window.location.href="./menu";
        }
    }
    
    /*
    <div className="containerPrincipal">
            <div className="containerSecundario">
              <div className="form-group">
                <label>Usuario: </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  onChange={this.handleChange}
                />
                <br />
                <label>Contraseña: </label>
                <br />
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={this.handleChange}
                />
                <br />
                <button className="btn" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
              </div>
            </div>
          </div>
    */

    render() {
        return (
          <> 
          <Header/>
          <div className="principalLogin">
            
            <form className="formLogin" >     

            <div className="input-container-login"> 
                <br />
                <input
                  type="text"
                  className="input-login"
                  name="username"
                  onChange={this.handleChange}
                />
                <label htmlFor="usuario" className="label-login">Usuario:</label>
            </div>
                <br />
            <div className="input-container-login">    
              <div className="unc-password">
                <br />
                <input
                  type="password"
                  className="input-login"
                  name="password"
                  onChange={this.handleChange}
                />
                <br />
                
                <label htmlFor="contraseña" className="label-login">Contraseña:</label>
              </div>  
            </div>

            <div className="unc-submit">
            <button className="btn" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
          <span className="plc-span-form">
            ¿No tienes una cuenta? 
            <Link className="anchor-link" to={"/register"}> Registrarse</Link>
          </span>
        </div>
              
            </form>  
          </div>     
          </>
        );
    }
}

export default Login;