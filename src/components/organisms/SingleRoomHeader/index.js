import React from "react";
import { listTypesIcon } from "../../../utils/listTypes";
import Button from "../../atoms/Button";
import Div from "../../atoms/Div";
import Heading from "../../atoms/Heading";
import Icon from "../../atoms/Icon";
import Paragraph from "../../atoms/Paragraph";
import Link from "../../atoms/Link";
import Span from "../../atoms/Span";
import Humidity from "../../../assets/humidity-svgrepo-com.svg";
import Temperature from "../../../assets/temperature-svgrepo-com.svg";
import Img from "../../atoms/Img";

const SingleRoomHeader = () => {
  const historyBack = () => {
    window.history.back();
  };
  return (
    <Div singleRoomHeader>
      <Button header__btn onClick={historyBack}>
        <Icon iconType={listTypesIcon.arrow} />
      </Button>
      <Div singleRoomHeader__nameAndSettings>
        <Heading headingType="h2" singleRoomHeader__heading>
          Bed Room
        </Heading>
        <Link linkType="link" to="/">
          <Icon iconType={listTypesIcon.settings} />
        </Link>
      </Div>
      <Paragraph singleRoomHeader__text>family members have access</Paragraph>
      <Div singleRoomHeader__wrapperIcon>
        <Div singleRoomHeader__temperature>
          <Div singleRoomHeader__wrapperImg>
            <Img
              src={Temperature}
              alt="temperature image"
              singleRoomHeader__image
            />
          </Div>
          <Paragraph singleRoomHeader__iconDescription>
            <Span singleRoomHeader__valueBold>24C</Span> temp
          </Paragraph>
        </Div>
        <Div singleRoomHeader__humidity>
          <Div singleRoomHeader__wrapperImg>
            <Img src={Humidity} alt="humidity image" singleRoomHeader__image />
          </Div>
          <Paragraph singleRoomHeader__iconDescription>
            <Span singleRoomHeader__valueBold>50%</Span> humidity
          </Paragraph>
        </Div>
      </Div>
    </Div>
  );
};

export default SingleRoomHeader;
