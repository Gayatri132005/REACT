import React, { useState } from 'react'
import Button from '../Button/Button'
import styles  from"./ContactForm.module.css";
 import {MdMessage}  from "react-icons/md";
  import {FaPhoneAlt} from "react-icons/fa";
   import {HiMail} from "react-icons/hi";

const ContactForm = () => {
       const [name, setName]=useState("Anshu");
   const [email, setEmail]=useState("");
      const [text, setText]=useState("");
 


const  onSubmit=(event)=>{
      event.preventDefault();


       setName(event.target[0].value);

          setEmail(event.target[1].value);
           setText(event.target[2].value);
             
       }
  return (
  <section className={styles.container}>
   <div  className={styles.contactForm}>
    <div className={styles.top_btn}>
         <Button text="VIA SUPPORT CALL" icon={<MdMessage fontSize="24px"/>}/>
        <Button text="VIA CALL " icon={<FaPhoneAlt fontSize="24px"/>}/>
    </div>
    <Button isOutline={true} text="VIA EMAIL FROM" icon={<HiMail fontSize="24px"/>}/>

    <form  onSubmit={onSubmit}>
    <div className={styles.form_control}>
          <label htmlFor="name">
    Name
    </label>
     <input type="name" name="name"></input>
    </div>
    <div className={styles.form_control}>
          <label htmlFor="email">
    E-Mail
    </label>
     <input type="email" name="email"></input>
    </div>
    <div className={styles.form_control}>
          <label htmlFor="textarea">
Text
    </label>
    <textarea name="text" rows="15"/>

  
    </div>
   <div style={{display:"flex", justifyContent:"end"}}>
     <Button  text="SUBMIT BUTTON"/>
   </div>
   <div>{name+"  "+email+" "+text}</div>
    </form>
   </div>
   <div className={styles.contactImage}>

   </div>
  </section>
  )
}

export default ContactForm