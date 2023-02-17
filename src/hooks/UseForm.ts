import { useState } from "react";
import { formUser } from "../assets/Interface";
import { axiosCallMail } from "../assets/axios";
import { MessageForm } from "../assets/SweetAlertMessage";
type Props = formUser;

const UseForm = (InicialData: Props, Validate: Function) => {
  const [form, setForm] = useState(InicialData);
  const [loading, setLoading] = useState(false);
  const [errors, SetErrors] = useState({
    name: "",
    mail: "",
    message: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name);
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const error = Validate(form, errors);
    if (error === null) {
      SetErrors({ name: "", mail: "", message: "" });
      MessageForm(form);
      // const returnMail = axiosCallMail(form);
      // let res = 0;
      // returnMail.then((res) => console.log(res));
    } else {
      console.log(error);
      SetErrors(error);
    }
  };
  return { form, errors, loading, handleChange, handleSubmit, SetErrors };
};

export default UseForm;
