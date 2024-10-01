const accountData = [
  {
    id: 1,
    amount: 0,
    transaction_type: "",
    deposit: 0,
    finalBalance: 0,
  },
];

const accountReducer = (state = accountData, action) => {
  switch (action.type) {
    case "HANDLE_CREDIT_TRANSACTION": {
      const newTransaction = {
        id: Date.now(), // Use current timestamp as a unique ID
        amount: action.payload,
        transaction_type: "Credit",
        deposit: 0,
        finalBalance: state[state.length - 1].finalBalance + action.payload, // Update based on the last entry's final balance
      };
      return [...state, newTransaction]; // Add new transaction to the state
    }
    case "HANDLE_DEBIT_TRANSACTION": {
      const newTransaction = {
        id: Date.now(),
        amount: action.payload,
        transaction_type: "Debit",
        deposit: 0,
        finalBalance: state[state.length - 1].finalBalance - action.payload, // Subtract from the last entry's final balance
      };
      return [...state, newTransaction];
    }
    case "HANDLE_DEPOSIT_TRANSACTION": {
      const newTransaction = {
        id: Date.now(),
        amount: 0,
        transaction_type: "Deposit",
        deposit: action.payload,
        finalBalance: state[state.length - 1].finalBalance + action.payload, // Add to the last entry's final balance
      };
      return [...state, newTransaction];
    }

    default:
      return state;
  }
};

export default accountReducer;
