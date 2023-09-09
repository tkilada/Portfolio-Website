import React, { useEffect, useRef, useState } from 'react'
import {FormGroup, Input, Label,Button } from 'reactstrap'
import ContactStyle from './ContactStyle.css'
import emailjs from '@emailjs/browser';
function Contact({setNavPage}) {
  const form = useRef()
  const [emailSent, setEmailSent] = useState("")
  const messageBoxInfo = document.getElementsByName("message")
  const UserInfo = document.getElementsByClassName("input")
  useEffect(()=>{
    setNavPage('Contact')
  },[])

  const sendEmail = (e) => {
    e.preventDefault();
    let nameInput = UserInfo[0]
    let EmailInput = UserInfo[1]
    emailjs.sendForm('service_tflaued', 'template_64j239h', form.current, 'FcZkb_QIeEmdbia1-')
      .then((result) => {
          console.log(result.text);
          messageBoxInfo[0].value = ""
          nameInput.value = ""
          EmailInput.value = ""
          setEmailSent("Email Sent")
      }, (error) => {
          console.log(error.text);
          setEmailSent("Failed to Send")
      });
      };

  return (
    <div className='ContactPage BodyBox'>
      <div className='Header'>
        <h2><u>Send Me An Email</u></h2> 
        <p>Email: tkilada@gmail.com</p>
      </div>
      <form className='ContactInputContainer' ref={form} onSubmit={sendEmail}>
        <FormGroup className='Group'>
          <a>{emailSent}</a>
          <div className='InputBox'>
            <Label className='Labels'>Your Name</Label>
            <Input name ='user_name'className='NameInput input'></Input>
            </div>
            <div className='InputBox'>
            <Label className='Labels'>Your Email</Label>
            <Input name='user_email' className='emailInput input'></Input>
            </div>
        </FormGroup>
        <FormGroup className='Group'>
          <Label className='Labels'>Message</Label>
          <textarea className='MessageArea' name = 'message'></textarea>
          <Button type='submit' className='SendBTN'>Send Email</Button>
          </FormGroup>
      </form>
    </div>
  )
}

export default Contact