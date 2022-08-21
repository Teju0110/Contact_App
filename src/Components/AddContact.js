import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddContact.css";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkMail = Contact.find(
      (contact) => contact.email === email && email
    );
    const checkContact = Contact.find(
      (contact) => contact.phone === parseInt(phone)
    );

    if (phone.length !== 10) {
      return toast.warning("Please Enter valid Phone Number");
    }

    if (!name || !email || !phone) {
      return toast.warning("Please fill in all fields");
    }

    if (checkMail) {
      return toast.error("This Email is already Exists");
    }

    if (checkContact) {
      return toast.error("This Contact is already Exists");
    }

    const data = {
      id: Contact.length > 0 ? Contact[Contact.length - 1].id + 1 : 0,
      name,
      email,
      phone,
    };

    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Contact added Successfully !!");
    navigate("/");
  };

  const Contact = useSelector((state) => state);

  return (
    <div className="addContact">
      <p className="addContact_Text">Add Contact</p>
      <div className="addContact_form">
        <input
          type="text"
          className="addContact_Input"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          className="addContact_Input"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="number"
          className="addContact_Input"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <button className="addContact_form_BTN" onClick={handleSubmit}>
          Add Contact
        </button>
      </div>
    </div>
  );
};

export default AddContact;
