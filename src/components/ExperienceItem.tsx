import React from 'react';

interface ExperienceItemProps {
  startDate: string;
  endDate: string;
  position: string;
  company: string;
  right?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  startDate,
  endDate,
  position,
  company,
  right,
}) => (
  <div className={`experienceItem${right ? ' right' : ' left'}`}>
    <p>
      {startDate} / {endDate}
    </p>
    <h5>{position}</h5>
    <h6>{company}</h6>
  </div>
);

export default ExperienceItem;
