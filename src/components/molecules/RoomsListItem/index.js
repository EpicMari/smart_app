import React from "react";
import Heading from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph";
import Link from "../../atoms/Link";
import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const RoomsListItem = ({ name, members, devices }) => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const OrangeSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: orange[700],
      "&:hover": {
        backgroundColor: alpha(orange[700], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: orange[700],
    },
  }));

  // const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <>
      <Link
        linkType="link"
        roomsListItem
        to={{
          pathname: `/room/${name.replace(/\s/g, "")}`,
          state: {
            name,
            members,
            devices,
          },
        }}
      >
        <Heading headingType="h3" roomsListItem__heading>
          {name}
        </Heading>
        <Paragraph roomsListItem__members>
          {members} family members have access
        </Paragraph>
        <Paragraph roomsListItem__devices>{devices} Devices</Paragraph>
        <OrangeSwitch
          checked={checked}
          onChange={handleChange}
          // inputProps={{ "aria-label": "Switch demo" }}
        />
      </Link>
    </>
  );
};

export default RoomsListItem;
