import { TRANSFER_OPTIONS } from '@/constants';
import ITicket from '@/models/ITicket';

const filterTickets = (
  tickets: ITicket[],
  options: TRANSFER_OPTIONS[]
): ITicket[] => {
  let filteredTickets: ITicket[] = [];
  options.map((option) => {
    switch (option) {
      case TRANSFER_OPTIONS.All:
        filteredTickets = tickets;
        break;
      default:
        filteredTickets = [
          ...filteredTickets,
          ...tickets.filter(
            (ticket) =>
              ticket.segments[0].stops.length +
                ticket.segments[1].stops.length ===
              option
          ),
        ];
        break;
    }
  });
  return filteredTickets;
};

export default filterTickets;
