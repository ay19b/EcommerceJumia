import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import star from "../../images/top-logo.png"
import TextField from '@mui/material/TextField';
import "./signin.scss"
import { createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth } from "../../firebase";
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next'
import { findAllByDisplayValue } from "@testing-library/react";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from "axios"


export default function Signin() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const navitage = useNavigate();
    const { t, i18n } = useTranslation();
    const [showPassword, setShowPassword] = React.useState(false);
    const api = "http://localhost:3001"

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const signIn = (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth,email,password)
        .then(async(userCredential) => {
          console.log(userCredential);
          const user = userCredential.user;
          await updateProfile(user, {
            displayName:name,
          });
          navitage("/")
        })
        .catch((error) => {
          if(!name){
            setNameError("Username should be 3-16 characters and shouldn't include any special character!");
          }
          else if (error.code === 'auth/invalid-email') {
            setEmailError('It should be a valid email address!');
          } else if (error.code === 'auth/wrong-password') {
            setPasswordError('Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!');
          }else {
            setEmailError('It should be a valid email address!');
            setPasswordError('Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!');
          }
        });

    };


     
  return (
    <div className='signIn'>
        <form onSubmit={signIn}>
           <img src={star} />
           <h2>{t('Quelle est votre adresse email?')}</h2>
           <div className='instr'>{t('Tapez votre e-mail pour vous connecter ou créer un compte Jumia .')}</div>
            <TextField 
             id="outlined-basic"
             label={t("Name")}  
             type="text"
             variant="outlined" 
             value={name}
             onChange={(e) => setName(e.target.value)}
             error={!!nameError}
             helperText={nameError}
             autoFocus
            />
           <TextField 
             id="outlined-basic"
             label={t("Email")}  
             type="email"
             variant="outlined" 
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             error={!!emailError}
             helperText={emailError}
           />
           <FormControl  variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">{t("Password")}</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!passwordError}
                helperText={passwordError}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            {passwordError?<div className="error">{passwordError}</div>:null}
           <button className='btn-continue' type="submit">{t('Register')}</button>
        </form>
          <Link to={"/login"}>
             <div className="haveAccount">{t('Vous avez déjà un compte?')}</div>
          </Link>                  
    </div>
  )
}
