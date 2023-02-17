import { AxiosResponse } from "axios";
import { Dispatch, SetStateAction } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { formUser } from "./Interface";
import { axiosCallMail } from "./axios";
const MySwal = withReactContent(Swal);
export const MessageForm = (DataForm: formUser) => {
  MySwal.fire({
    title: "¿ Esta seguro de enviar ?",

    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Enviar.",
    cancelButtonText: "Aun no.",
  }).then((result) => {
    if (result.isConfirmed) {
      const response: Promise<number> = axiosCallMail(DataForm);
      if (response != null) {
        Swal.fire(
          "Enviado Correctamente!",
          "El mensaje sera leido ",
          "success"
        );
        //   SetValue({"name":"", "mail":"","message":""});
        //   console.log("heres")
        //   setIsChecked(false)
      }
    }
  });
};
