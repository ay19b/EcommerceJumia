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

export default function Signin() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const navitage = useNavigate();
    const { t, i18n } = useTranslation();

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
            if (error.code === 'auth/invalid-email') {
              setEmailError('It should be a valid email address!');
            } else if (error.code === 'auth/wrong-password') {
              setPasswordError('Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!');
            } else {
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
           <TextField 
             id="outlined-basic"
             label={t("Password")}
             type="password"
             variant="outlined" 
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             error={!!passwordError}
             helperText={passwordError}
           />
           <button className='btn-continue' type="submit">{t('Register')}</button>
        </form>
          <Link to={"/login"}>
             <div className="haveAccount">{t('Vous avez déjà un compte?')}</div>
          </Link>                  
    </div>
  )
}
