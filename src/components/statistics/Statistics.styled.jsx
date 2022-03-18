import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  width: 400px;
  border: 2px solid #9e9e9e;
  border-radius: 4px;
  margin-top: 10px;
  box-shadow: 0px 4px 4px hsla(0, 0%, 0%, 0.15);
`;

export const StatisticsSectionName = styled.h2`
  font-weight: 900;
  text-align: center;
`;

export const StatisticsList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 5);
  text-align: center;
  background-color: blue;
  padding: 10px 10px;
  border: 1px solid #9e9e9e;
`;

export const StatisticsText = styled.span`
  color: yellow;
  font-weight: 600;
`;
