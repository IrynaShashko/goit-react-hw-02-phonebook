import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0;
`;
export const ContactsItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 50px;
  background: linear-gradient(
    90deg,
    rgba(58, 161, 180, 0.8491771708683473) 0%,
    rgba(252, 69, 186, 0.5298494397759104) 100%
  );
`;
export const ContactsName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ContactsNumber = styled.p`
  font-size: 16px;
  margin: 0;
  margin-left: auto;
`;
export const ContactsItemButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  padding: 10px;
  height: 16px;
  border: 1px solid #ccc;
  border-radius: 50px;
  margin-left: 20px;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.75);
  background: radial-gradient(
    circle,
    rgba(63, 196, 251, 0.7679446778711485) 0%,
    rgba(252, 70, 202, 0.4906337535014006) 100%
  );
`;
