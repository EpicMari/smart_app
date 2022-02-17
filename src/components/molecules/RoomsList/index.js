import React, { useContext } from "react";
import Ul from "../../atoms/Ul";
import Li from "../../atoms/Li";
import RoomsListItem from "../RoomsListItem";
import AppContext from "../../../context";

const RoomsList = () => {
  const { rooms } = useContext(AppContext);
  return (
    <Ul roomsList>
      {rooms.map((room) => {
        return (
          <Li key={room.id} roomList__item>
            <RoomsListItem {...room} />
          </Li>
        );
      })}
    </Ul>
  );
};

export default RoomsList;
