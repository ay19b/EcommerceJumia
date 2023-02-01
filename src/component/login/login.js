import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import star from "../../images/top-logo.png"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {AiFillFacebook} from 'react-icons/ai'
import "../signin/signin.scss"
import {Link} from 'react-router-dom';
import { signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth } from "../../firebase";
import {useTranslation} from 'react-i18next'

export default function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navitage = useNavigate();
    const { t, i18n } = useTranslation();
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);


    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
          .then(async(userCredential) => {
            console.log(userCredential);
            navitage("/")
          })
          .catch((error) => {
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
        <form onSubmit={login}>
           <img src={star} />
           <h2>{t("Quelle est votre adresse email?")}</h2>
           <div className='instr'>{t("Tapez votre e-mail pour vous connecter ou créer un compte Jumia .")}</div>
           <TextField 
              id="outlined-basic"
              label={t("Email" )}
              type="email"
              variant="outlined" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
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
           <button className='btn-continue' type="submit">{t("Login")}</button>
        </form>
        <Link to={"/sign-in"}>
             <div className="haveAccount">{t('Créer un compte')}</div>
        </Link> 
        
    </div>
  )
}
