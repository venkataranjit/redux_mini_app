const profileData = {
  name: "AArvi",
  mobile: 9553500003,
  email: "aarvi@gmail.com",
  address: "Hyderabad",
};

const profileReducer = (state = profileData, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload };
    case "UPDATE_MOBILE":
      return { ...state, mobile: action.payload };
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload };
    case "UPDATE_ADDRESS":
      return { ...state, address: action.payload };
    default:
      return state;
  }
};

export default profileReducer;
