import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import Input from "../input/Input";
import { DatePicker } from "@mantine/dates";

const Form = () => {
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState({ mobile: "", name: "", date: "" });

  const [submitted, setSubmitted] = useState(false);

  const mobileUpdateHandler = (event) => {
    const value = event.target.value;
    //   allow mobile of max length
    if (value.length > 10) return;

    setMobile(value);
  };
  const nameUpdateHandler = (event) => {
    setName(event.target.value);
  };
  const dateUpdateHandler = (value) => {
    setDate(value);
  };

  const validateForm = () => {
    let errors = {};

    if (!mobile || mobile.length !== 10) {
      errors.mobile = "Enter a valid mobile number";
    }

    if (!name || name.length < 3) {
      errors.name = "Enter a valid Name";
    }

    if (!date) {
      errors.date = "Enter a valid date";
    }

    if (Object.keys(errors).length === 0) {
      setErrors({ name: "", mobile: "", date: "" });
      return true;
    } else {
      setErrors(errors);
      return false;
    }
  };

  const resetForm = () => {
    setName("");
    setMobile("");
    setDate("");

    // reset errors
    setErrors({ name: "", mobile: "", date: "" });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    let isFormValid = validateForm();

    if (isFormValid) {
      console.log(`Mobile: ${mobile},Name: ${name}, dob:
      ${date}`);
      setSubmitted(true);
      resetForm();
    }
  };
  return (
    <form
      className="flex flex-col  justify-center p-4 border shadow w-full max-w-sm mx-auto font-poppins"
      onSubmit={formSubmitHandler}
    >
      <img src={Logo} alt="App Logo" className="w-32 mx-auto mb-3" />
      {submitted && (
        <p className="text-green-600 text-sm md:text-md bg-green-200 p-3 rounded my-2">
          Form Submitted Successfully.
        </p>
      )}
      <Input
        name="mobile"
        type="number"
        value={mobile}
        onChange={mobileUpdateHandler}
        classNames=""
        placeholder="Mobile"
        error={errors.mobile}
      />
      <Input
        name="name"
        type="text"
        value={name}
        onChange={nameUpdateHandler}
        classNames=""
        placeholder="Your Name"
        error={errors.name}
      />

      <DatePicker
        placeholder="dd-mm-yyyy"
        label="Date Of Birth"
        inputFormat="DD/MM/YYYY"
        labelFormat="MMMM - YYYY"
        size="sm"
        value={date}
        classNames={{ label: "font-poppins font-normal" }}
        onChange={dateUpdateHandler}
      />
      <span className="text-xs text-[#FF2400] mt-1">{errors.date}</span>

      <button
        type="submit"
        className="p-2.5 bg-[#539C64] text-white font-medium rounded-xl mt-6"
      >
        Save
      </button>
    </form>
  );
};

export default Form;
