export interface ISegment {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}

export default interface ITicket {
  price: number;
  carrier: string;
  segments: ISegment[];
}
