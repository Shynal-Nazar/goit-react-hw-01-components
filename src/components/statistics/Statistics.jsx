import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsSectionName,
  StatisticsList,
  StatisticsItem,
  StatisticsText,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsSectionName>{title}</StatisticsSectionName>}

      <StatisticsList>
        {stats.map(stat => (
          <StatisticsItem key={stat.id}>
            <StatisticsText>{stat.label}</StatisticsText>
            <StatisticsText>{stat.percentage + '%'}</StatisticsText>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
export default Statistics;
