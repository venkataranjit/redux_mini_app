export const updateName = (name) => ({
  type: "UPDATE_NAME",
  payload: name,
});
export const updateMobile = (mobile) => ({
  type: "UPDATE_MOBILE",
  payload: mobile,
});
export const updateEmail = (email) => ({
  type: "UPDATE_EMAIL",
  payload: email,
});
export const updateAddress = (address) => ({
  type: "UPDATE_ADDRESS",
  payload: address,
});
export const handleTransaction = (dispatch, input) => {
  if (!input || !input.t_type || !input.amount) {
    console.error("Invalid input:", input);
    return; // Prevent dispatching if input is invalid
  }

  const { t_type, amount } = input;

  if (t_type === "Credit") {
    dispatch({
      type: "HANDLE_CREDIT_TRANSACTION",
      payload: amount,
    });
  } else if (t_type === "Debit") {
    dispatch({
      type: "HANDLE_DEBIT_TRANSACTION",
      payload: amount,
    });
  } else if (t_type === "Deposit") {
    dispatch({
      type: "HANDLE_DEPOSIT_TRANSACTION",
      payload: amount,
    });
  } else {
    console.error("Unknown transaction type:", t_type);
  }
};
