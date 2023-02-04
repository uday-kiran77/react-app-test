import React from "react";

const Input = ({
  label,
  type,
  value,
  onChange,
  classNames,
  name,
  error,
  placeholder = "",
}) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={name}
        className="block mb-2 text-sm capitalize text-[#302C2C]"
      >
        {name}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className=" border border-gray-300 text-[#302C2C] text-sm rounded block w-full p-2.5 outline-none"
        placeholder={placeholder}
      />
      <span className="text-xs text-[#FF2400]">{error}</span>
    </div>
  );
};

export default Input;
