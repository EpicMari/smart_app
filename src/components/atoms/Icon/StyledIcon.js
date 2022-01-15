import styled from "styled-components";
import { HiOutlineHome } from "react-icons/hi";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import { GiNightSleep } from "react-icons/gi";
import { BiArrowBack } from "react-icons/bi";

export const StyledIconHome = styled(HiOutlineHome)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.icons.l};
`;
export const StyledIconAdd = styled(IoIosAddCircle)`
  color: ${({ theme }) => theme.colors.orange};
  font-size: ${({ theme }) => theme.icons.l};
`;
export const StyledIconRemove = styled(IoIosRemoveCircle)`
  color: ${({ theme }) => theme.colors.orange};
  font-size: ${({ theme }) => theme.icons.l};
`;
export const StyledIconSleep = styled(GiNightSleep)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.icons.l};
`;
export const StyledIconArrow = styled(BiArrowBack)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`;
