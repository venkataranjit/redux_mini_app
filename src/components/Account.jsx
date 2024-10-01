import React, { useState } from "react";
import { Row, Col, Form, Button, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { handleTransaction } from "../store/actions";
const Account = () => {
  const [input, setInput] = useState({
    amount: "",
    t_type: "",
  });

  const dispatch = useDispatch();
  const acc_data = useSelector((state) => state.account);
  return (
    <>
      <h3>Account</h3>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Amount"
                onChange={(e) => setInput({ ...input, amount: e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Transaction Type</Form.Label>
              <Form.Select
                onChange={(e) => setInput({ ...input, t_type: e.target.value })}
              >
                <option value="" disabled selected>
                  Open this select menu
                </option>
                <option value="Credit">Credit</option>
                <option value="Debit">Debit</option>
                <option value="Deposit">Deposit</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Label></Form.Label>
            <br />
            <Button
              variant="primary"
              onClick={() => {
                // Ensure transaction type is selected before dispatching
                if (input.t_type) {
                  handleTransaction(dispatch, {
                    ...input,
                    amount: parseFloat(input.amount),
                  });
                } else {
                  console.error("Transaction type is not selected");
                }
              }}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: "20%" }}>Amount</th>
            <th style={{ width: "20%" }}>Transaction Type</th>
            <th style={{ width: "20%" }}>Deposit Balance</th>
            <th style={{ width: "20%" }}>Total Balance</th>
          </tr>
        </thead>
        <tbody>
          {acc_data.map((eachTransaction) => (
            <tr key={eachTransaction.id}>
              <td>{eachTransaction.amount}</td>
              <td>{eachTransaction.transaction_type}</td>
              <td>{eachTransaction.deposit}</td>
              <td>{eachTransaction.finalBalance}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Account;
