import styled from '@emotion/styled';

export const ProfileSection = styled.div`
  width: 400px;
  border: 2px solid #9e9e9e;
  border-radius: 4px;
`;
export const Description = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  text-align: center;
  display: block;
  border-bottom: 1px solid #9e9e9e;
`;

export const ProfileFoto = styled.img`
  margin: 25px auto 0px auto;
  background-color: #9e9e9e;
  border-radius: 50%;
  max-width: 170px;
`;

export const ProfileName = styled.p`
  font-size: 24px;
  font-weight: 900;
  color: #212121;
`;

export const ProfileDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: gray;
`;

export const ProfileList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ProfileItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 3);
  text-align: center;
  background-color: yellow;
  padding: 10px 10px;
  border: 1px solid #9e9e9e;
`;

export const ProfileText = styled.span`
  color: blue;
  font-weight: 900;
`;
