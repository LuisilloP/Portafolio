import axios from "axios";
import { formUser } from "../assets/Interface";
export const axiosCallMail = (formData: formUser) => {
  const { name, message, mail } = formData;
  axios.defaults.headers.post["Content-Type"] = "application/json";
  const axiosResponse = axios.post(
    "https://formsubmit.co/ajax/trabajoluisaraya@gmail.com",
    {
      Nombre: name,
      Mensaje: message,
      Correo: mail,
    }
  );
  const sendData = axiosResponse.then((response) => response.status);

  // .catch((error) => console.log(error));
  return sendData;
};
