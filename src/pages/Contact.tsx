import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { axiosCallMail } from "../assets/axios";
import UseForm from "../hooks/UseForm";
import { formUser } from "../assets/Interface";

type Props = {};
const regexString: RegExp = /^[A-Za-z ]+$/;
const regexMail: RegExp = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const regexMessage: RegExp = /^[A-Za-z,. ]{5,100}/;
const Contact = (props: Props) => {
  const InicialData = {
    name: "",
    mail: "",
    message: "",
  };
  const Validate = (form: formUser) => {
    let isError = false;
    let errors = {
      name: "",
      mail: "",
      message: "",
    };

    if (!regexString.test(form.name)) {
      errors.name = "El nombre solo debe contener letras. no numeros ni vacios";
      isError = true;
    }
    if (!regexMail.test(form.mail)) {
      errors.mail =
        "Solo se admiten correos validos. no vacios ni correos incompletos";
      isError = true;
    }
    if (!regexMessage.test(form.message)) {
      errors.message =
        "No se admite vacio, minimo de 5 caracteres - maximo de 100 caracteres";
      isError = true;
    }
    console.log(errors.name);

    return isError ? errors : null;
  };
  const { form, errors, loading, handleChange, handleSubmit, SetErrors } =
    UseForm(InicialData, Validate);
  const OnFocus = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    let name = event.target.name;
    SetErrors({ ...errors, [name]: "" });
  };
  return (
    <div className=" contact-page margin-header-top min-height-div">
      <h1>Contacto</h1>
      <div>
        <form
          className="form-contact"
          onSubmit={(event) => handleSubmit(event)}
        >
          <div className="contact-name-mail">
            <TextField
              fullWidth
              id="demo-helper-text-misaligned"
              label="Nombre"
              name="name"
              helperText={errors.name === " " ? " " : `${errors.name}`}
              value={form.name}
              onFocus={(event) => {
                OnFocus(event);
              }}
              onChange={handleChange}
              inputProps={{ style: { color: "#fff" } }}
            />
            <TextField
              fullWidth
              id="demo-helper-text-misaligned"
              label="Correo"
              name="mail"
              onFocus={(event) => {
                OnFocus(event);
              }}
              helperText={errors.mail === "" ? " " : `${errors.mail}`}
              value={form.mail}
              onChange={handleChange}
              inputProps={{ style: { color: "#fff" } }}
            />
          </div>
          <div className="contact-message">
            <TextField
              fullWidth
              multiline
              rows={4}
              value={form.message}
              name="message"
              id="demo-helper-text-misaligned"
              label="Mensaje"
              onFocus={(event) => {
                OnFocus(event);
              }}
              helperText={errors.message === "" ? " " : `${errors.message}`}
              onChange={handleChange}
              inputProps={{
                style: { color: "#fff", backgroundColor: "rgb(232, 241, 250)" },
              }}
            />
          </div>
          <Button variant="contained" className="btn-send-form" type="submit">
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
