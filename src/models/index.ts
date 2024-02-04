export interface ISqueeze {
  id: number;
  short: string;
  target: string;
  counter: number;
}

export interface IErrorRequest {
  detail: Array<{
    loc: string[];
    msg: string;
    type: string;
  }>;
}
