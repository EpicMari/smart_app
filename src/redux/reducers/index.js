const initialState = {
  rooms: [
    {
      name: "Living Room",
      members: 3,
      devices: 0,
    },
  ],
};

const reducers = (state = initialState, action) => {
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

export default reducers;
