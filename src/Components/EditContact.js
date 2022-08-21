import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./EditContact.css";
import { useNavigate } from "react-router-dom";

const EditContact = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const Contact = useSelector((state) => state);
  const currentContact = Contact.find((contact) => contact.id === parseInt(id));

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setPhone(currentContact.phone);
    }
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkMail = Contact.find(
      (contact) => contact.id !== parseInt(id) && contact.email === email
    );
    const checkContact = Contact.find(
      (contact) => contact.id !== parseInt(id) && contact.phone === parseInt(phone)
    );

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
      id: parseInt(id),
      name,
      email,
      phone,
    };
  
    dispatch({ type: "EDIT_CONTACT", payload: data });
    toast.success("Contact Updated Successfully !!");
    navigate("/");

    
  };
  

  return (
    <div className="editContact">
      {currentContact ? (
        <>
          <p className="editContact_Text">Edit Contact</p>
          <div className="editContact_form">
            <input
              type="text"
              className="editContact_Input"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              className="editContact_Input"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="number"
              className="editContact_Input"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <div className="editContact_form_BTNs">
              <button className="editContact_form_BTN" onClick={handleSubmit}>Update Contact</button>

              <Link to="/">
                <button
                  className="editContact_form_BTN"
                  style={{ backgroundColor: "red" }}
                  
                >
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <h1 style={{ marginLeft: "38%" }}>OOPS !! Contact Not Exists</h1>
      )}
    </div>
  );
};

export default EditContact;
