import React, { useContext, useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import axios from "axios";

const url = 'https://mercatorapiservices.com/api/Message/Send'
export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [openMessage, setOpenMessage] = useState(false);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const [accessName, setAccessName] = useState("")
  const [workEmail, setworkEmail] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [companyName, setcompanyName] = useState("")
  const [message, setmessage] = useState("")
  const[country, setCountry] = useState("")
  const form = useRef();

 const changeAccessName =(e)=>{
    setAccessName(e.target.value)
  }
const  changeWorkEmail =(e)=>{
setworkEmail(e.target.value)
  }
 const changeMobileNumber =(e)=>{
setMobileNumber(e.target.value)
  }
 const changeCompanyName =(e)=>{
  setcompanyName(e.target.value)
  }
 const changeMessage =(e)=>{
setmessage(e.target.value)
  }
const changeName =(e)=>{
  setName(e.target.value)
}
const changeEmail = (e)=>{
  setEmail(e.target.value)
}
const changeCountry = (e)=>{
   setCountry(e.target.value)
} 
  const sendEmail = async(e) => {
    e.preventDefault()
    if (name && email) {
      setOpenMessage(true);
      setName("")
      setEmail("")
      try {
        const resp = await axios.post(url, {
         to: [
           "info@loyalbaze.com"
         ],
        subject: "Waitlist Message From LoyalBaze Website",
         message:`<p>name: ${name}</p> <p>email: ${email}</p>`, 
         from: "noreply@loyalbaze.com",
         senderName: "LoyalBaze",
        })
        console.log(resp.data);
     }catch(error){
      console.log(error.response);
     }
    }
  };

    

const submitRequest =async(e)=>{
e.preventDefault()
if (accessName && workEmail && companyName && mobileNumber && message) {
   setAccessName("")
   setworkEmail("")
   setMobileNumber("")
   setcompanyName("")
   setmessage("")
   try {
    const resp = await axios.post(url, {
     to: [
       "info@loyalbaze.com"
     ],
    subject: "Skip Waitlist Message From LoyalBaze Website",
     message:`<p>name: ${accessName}</p> <p>email: ${workEmail}</p> <p>mobile Number: ${mobileNumber}</p> <p>company Name: ${companyName}</p> <p>country: ${country}</p> <p><b>message: ${message}</b></p>`, 
     from: "noreply@loyalbaze.com",
     senderName: "LoyalBaze",
    })
    console.log(resp.data);
 }catch(error){
  console.log(error.response);
 }
}
  }
  const messageClose = () => {
    setOpenMessage(false);
  };

  return (
    <AppContext.Provider value={{ openMessage, sendEmail, messageClose, name, email, changeName, changeEmail, accessName,workEmail,companyName,mobileNumber,message, submitRequest, changeAccessName,changeCompanyName,changeMessage,changeWorkEmail, changeMobileNumber, form, country, changeCountry }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
