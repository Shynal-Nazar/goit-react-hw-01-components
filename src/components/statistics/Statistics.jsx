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
      {title && (
        <StatisticsSectionName className={title}>{title}</StatisticsSectionName>
      )}

      <StatisticsList class="stat-list">
        {stats.map(stat => (
          <StatisticsItem key={stat.id} class="item">
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
