import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  updateName,
  updateMobile,
  updateEmail,
  updateAddress,
} from "../store/actions";

const About = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState({
    name: false,
    mobile: false,
    email: false,
    address: false,
  });
  const [input, setInput] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setIsEdit({
      ...isEdit,
      name: false,
      mobile: false,
      email: false,
      address: false,
    });
    setInput({
      name: "",
      mobile: "",
      email: "",
      address: "",
    });
  };
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    if (
      input.name === profile.name ||
      input.mobile === profile.mobile ||
      input.email === profile.email ||
      input.address === profile.address
    ) {
      console.log("enter any input");
    } else {
      if (isEdit.name === true) {
        dispatch(updateName(input.name));
      } else if (isEdit.mobile === true) {
        dispatch(updateMobile(input.mobile));
      } else if (isEdit.email === true) {
        dispatch(updateEmail(input.email));
      } else if (isEdit.address === true) {
        dispatch(updateAddress(input.address));
      }
      setShow(false);
      setIsEdit({
        ...isEdit,
        name: false,
        mobile: false,
        email: false,
        address: false,
      });
      setInput({
        name: "",
        mobile: "",
        email: "",
        address: "",
      });
    }
  };
  const hover = {
    cursor: "pointer",
  };

  return (
    <>
      <h3>Profile</h3>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: "20%" }}>Name</th>
            <th style={{ width: "20%" }}>Mobile</th>
            <th style={{ width: "20%" }}>Email</th>
            <th style={{ width: "20%" }}>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {profile.name}
              <i
                className={`fa fa-edit float-end`}
                style={hover}
                onClick={() => {
                  handleShow();
                  setIsEdit({ ...isEdit, name: true });
                  setInput({ ...input, name: profile.name });
                }}
              ></i>
            </td>
            <td>
              {profile.mobile}
              <i
                className={`fa fa-edit float-end ${hover}`}
                style={hover}
                onClick={() => {
                  handleShow();
                  setIsEdit({ ...isEdit, mobile: true });
                  setInput({ ...input, mobile: profile.mobile });
                }}
              ></i>
            </td>
            <td>
              {profile.email}
              <i
                className={`fa fa-edit float-end ${hover}`}
                style={hover}
                onClick={() => {
                  handleShow();
                  setIsEdit({ ...isEdit, email: true });
                  setInput({ email: profile.email });
                }}
              ></i>
            </td>
            <td>
              {profile.address}
              <i
                className={`fa fa-edit float-end ${hover}`}
                style={hover}
                onClick={() => {
                  handleShow();
                  setIsEdit({ ...isEdit, address: true });
                  setInput({ address: profile.address });
                }}
              ></i>
            </td>
          </tr>
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>
            {isEdit.name && "Name"}
            {isEdit.mobile && "Mobile"}
            {isEdit.email && "Email"}
            {isEdit.address && "Address"}
          </label>
          {isEdit.name && (
            <input
              type="text"
              className="form-control"
              name="name"
              value={input.name}
              onChange={(e) => setInput({ name: e.target.value })}
            />
          )}
          {isEdit.mobile && (
            <input
              type="text"
              className="form-control"
              name="mobile"
              value={input.mobile}
              onChange={(e) => setInput({ mobile: e.target.value })}
            />
          )}
          {isEdit.email && (
            <input
              type="text"
              className="form-control"
              name="email"
              value={input.email}
              onChange={(e) => setInput({ email: e.target.value })}
            />
          )}
          {isEdit.address && (
            <textarea
              className="form-control"
              name="address"
              value={input.address}
              onChange={(e) => setInput({ address: e.target.value })}
            ></textarea>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default About;
