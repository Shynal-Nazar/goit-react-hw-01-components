import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  margin-top: 10px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  border: 2px solid #9e9e9e;
  border-radius: 4px;
`;

export const Friend = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  border-radius: 4px;
  box-shadow: 0px 4px 4px hsla(0, 0%, 0%, 0.15);
  padding: 20px;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 500;
`;

export const Avatar = styled.img`
  margin-left: 20px;
  margin-right: 20px;
`;

export const FriendName = styled.p`
  font-weight: 900;
`;

export const StatusOnline = styled.span`
  display: inline-flex;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => {
    return props.status ? 'green' : 'red';
  }};
`;

//----------------Аналог тернарника---------//

// switch (props.status) {
//   case true:
//     return 'green';
//   case false:
//     return 'red';
//   default:
//     return 'black';
// }
