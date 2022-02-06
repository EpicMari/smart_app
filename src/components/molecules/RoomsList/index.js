import React from "react";
import { connect } from "react-redux";
import Ul from "../../atoms/Ul";
import Li from "../../atoms/Li";
import RoomsListItem from "../RoomsListItem";

const RoomsList = ({ rooms }) => {
  return (
    <Ul roomsList>
      {rooms.map((room) => {
        return (
          <Li roomList__item>
            <RoomsListItem {...room} />
          </Li>
        );
      })}
    </Ul>
  );
};

const mapStateToProps = (state) => ({
  rooms: state.rooms,
});

export default connect(mapStateToProps)(RoomsList);
