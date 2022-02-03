import React from "react";
import Header from "../../molecules/Header";
import AddForm from "../../molecules/AddForm";
import Div from "../../atoms/Div";

const AddRoomTemplate = () => {
  return (
    <Div addRoomTemplate>
      <Header headingText="Add Room" />
      <AddForm />
    </Div>
  );
};

export default AddRoomTemplate;
