import React from 'react';

import { ISegment } from '@/models/ITicket';
import addMinutes from '@/utils/addMinutes';
import dateFormat from '@/utils/dateFormat';
import durationFormat from '@/utils/durationFormat';
import toDate from '@/utils/toDate';

import styles from './styles.module.scss';

interface IProps {
  segment: ISegment;
}

const TicketSegment: React.FC<IProps> = ({ segment }) => {
  const transfers = () => {
    const transfers = segment.stops.length;
    if (transfers === 0) {
      return 'Без пересадок';
    }
    if (transfers === 1) {
      return transfers + ' пересадка';
    }
    if (transfers > 1 && transfers < 5) {
      return transfers + ' пересадки';
    }
    return transfers + ' пересадок';
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.column}>
        <p className={styles.header}>
          {segment.origin} - {segment.destination}
        </p>
        <p className={styles.content}>
          {dateFormat(toDate(segment.date))} -{' '}
          {dateFormat(addMinutes(toDate(segment.date), segment.duration))}
        </p>
      </div>
      <div className={styles.column}>
        <p className={styles.header}>В пути</p>
        <p className={styles.content}>{durationFormat(segment.duration)}</p>
      </div>
      <div className={styles.column}>
        <p className={styles.header}>{transfers()}</p>
        <p className={styles.content}>{segment.stops.join(', ')}</p>
      </div>
    </div>
  );
};

export default TicketSegment;
