import { useRef as UseRef } from "react";
import "../componentCss/Form.css";

export default function form(props) {
  const formName = UseRef("");
  const formMail = UseRef("");
  const formSubject = UseRef("");
  const formMessage = UseRef("");

  const buttonClick = async () => {
    if(formName.current.value.length < 1) {
      alert("Please enter your name")
      return
    }
    if(formMail.current.value.length < 1) {
      alert("Please enter your e-mail")
      return
    }
    if(formSubject.current.value.length < 1) {
      alert("Please enter the subject")
      return
    }
    if(formMessage.current.value.length < 1) {
      alert("Please enter your message")
      return
    }

    let confirm_status = window.confirm("Do you want to send given message?")
    if(!confirm_status){
      return;
    }
    console.log('This part runs now')
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "http://localhost:5550"},
        mode: 'cors',
        body: JSON.stringify({"apikey": process.env.REACT_APP_APIKEY,
            "Name": formName.current.value,
            "E-Mail": formMail.current.value,
            "Subject": formSubject.current.value,
            "Message": formMessage.current.value})
    }
    let message_status = await (await fetch("http://localhost:5550/message", requestOptions)).json()
    let [statusCode, messageJson] = [message_status.status, message_status.message]
    formName.current.value = "";
    formMail.current.value = "";
    formSubject.current.value = "";
    formMessage.current.value = "";
    alert(`Status Code ${statusCode}\n${messageJson}`)
    if(statusCode === 200){
      window.location.replace('/')
    }
  };

  return (
    <div className="form">
      <div className="formBar">
        <label style={{color: "white"}}>Name</label>
        <input
          ref={formName}
          style={{
            background: props.lightDark.primaryBackground,
            color: props.lightDark.primaryText,
          }}
        ></input>
      </div>
      <div className="formBar">
        <label style={{color: "white"}}>E-Mail</label>
        <input
          ref={formMail}
          style={{
            background: props.lightDark.primaryBackground,
            color: props.lightDark.primaryText,
          }}
        ></input>
      </div>
      <div className="formBar">
        <label style={{color: "white"}}>Subject</label>
        <input
          ref={formSubject}
          style={{
            background: props.lightDark.primaryBackground,
            color: props.lightDark.primaryText,
          }}
        ></input>
      </div>
      <div className="formBar">
        <label style={{color: "white"}}>Message</label>
        <textarea
          ref={formMessage}
          style={{
            background: props.lightDark.primaryBackground,
            color: props.lightDark.primaryText,
          }}
        ></textarea>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px" }}
      >
        <button
          onClick={buttonClick}
          style={{
            background: props.lightDark.primaryBackground,
            color: props.lightDark.primaryText,
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
