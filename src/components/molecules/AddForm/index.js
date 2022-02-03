import React from "react";
import Form from "../../atoms/Form";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

const AddForm = () => {
  return (
    <Form addForm>
      <Input type="text" name="name" id="name" placeholder="Room name"></Input>
      <Input type="text" name="members" placeholder="Family members"></Input>
      <Button type="submit" addForm__btn>
        Add
      </Button>
    </Form>
  );
};

export default AddForm;
