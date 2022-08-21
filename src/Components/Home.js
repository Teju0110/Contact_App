import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import {  useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const contact = useSelector((state) => state);
  const dispatch=useDispatch()

  const handleDelete= (id)=>{
    dispatch({type:"DELETE_CONTACT", payload:id})
    toast.success("Contact Delete Successfully !!")
  }
  return (
    < >
    <div className='home'>
      <Link to='/add'>
            <button className='addContact_BTN'>
                Add Contact
            </button>
        </Link>
    </div>
    {contact.length >0 ? (

      <div className='contacts'>
      <table className='contact_list'>
        <thead className='contact_list_head'>
          <tr>
            <th scope ="col">#</th>
            <th scope ="col">Name</th>
            <th scope ="col">Email</th>
            <th scope ="col">Number</th>
            <th scope ="col">Action</th>
          </tr>
        </thead>
        <tbody className='contact_list_body'>
          {
            contact.map((contact,id)=>(
              <tr key={id}>
                  <td>{id+1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>
                    <Link to={`/edit/${contact.id}`} style={{marginLeft: "20%"}} >
                      <button className='contact_list_BTN' style={{backgroundColor:"rgb(50, 150, 245)"}}>
                        Edit
                      </button>
                      
                    </Link>

                    <button className='contact_list_BTN' style={{backgroundColor:"rgb(240, 45, 45)"}} onClick={()=>handleDelete(contact.id)}>
                        Delete
                      </button>
                  </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
            ):
            <h1 style={{ marginLeft: "38%" }}>No Contact Fount</h1>}
    </>
  )
}

export default Home