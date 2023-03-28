import React, { useContext, useState } from "react";

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
  const messageOpen = (e) => {
    e.preventDefault()
    if (name && email) {
      setOpenMessage(true);
      setName("")
      setEmail("")
    }
  };

  const submitRequest =(e)=>{
e.preventDefault()
if (accessName && workEmail && companyName && mobileNumber && message) {
   setAccessName("")
   setworkEmail("")
   setMobileNumber("")
   setcompanyName("")
   setmessage("")
}
  }
  const messageClose = () => {
    setOpenMessage(false);
  };

  return (
    <AppContext.Provider value={{ openMessage, messageOpen, messageClose, name, email, changeName, changeEmail, accessName,workEmail,companyName,mobileNumber,message, submitRequest, changeAccessName,changeCompanyName,changeMessage,changeWorkEmail, changeMobileNumber }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
