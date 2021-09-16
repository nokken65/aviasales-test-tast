import { SORT_OPTIONS } from '@/constants';
import ITicket from '@/models/ITicket';

const sortTickets = (tickets: ITicket[], option: SORT_OPTIONS): ITicket[] => {
  switch (option) {
    case SORT_OPTIONS.Price:
      return tickets.slice().sort((a, b) => a.price - b.price);
    case SORT_OPTIONS.Duration:
      return tickets
        .slice()
        .sort(
          (a, b) =>
            a.segments[0].duration +
            a.segments[1].duration -
            (b.segments[0].duration + b.segments[1].duration)
        );
    case SORT_OPTIONS.Optimal:
      return tickets
        .slice()
        .sort(
          (a, b) =>
            a.price +
            (a.segments[0].duration + a.segments[1].duration) * 100 -
            (b.price + (b.segments[0].duration + b.segments[1].duration) * 100)
        );
  }
  return tickets;
};

export default sortTickets;
