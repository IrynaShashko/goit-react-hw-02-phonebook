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
`;
