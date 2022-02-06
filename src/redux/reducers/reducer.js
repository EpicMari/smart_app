const initialState = {
  rooms: [
    {
      name: "Living Room",
      members: 3,
      devices: 4,
    },
    {
      name: "Bed Room",
      members: 3,
      devices: 5,
    },
    {
      name: "Guest Room",
      members: 2,
      devices: 3,
    },
    {
      name: "Kitchen",
      members: 2,
      devices: 4,
    },
    {
      name: "Kids Room",
      members: 1,
      devices: 4,
    },
    {
      name: "Balcony",
      members: 4,
      devices: 2,
    },
  ],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_ROOM":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
