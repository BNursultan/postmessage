// @flow
export type ArgsType = {
  isConnecter: boolean,
  url: string,
  whitelist: Array<string>,
  log: boolean,
};

export type Status = 'disconnected' | 'connecting' | 'connected';

export type OnFunction = (any) => any;

export type Events = {
  [key: string]: OnFunction,
};

export type WeddingType = {
  events: Events | any,
  isConnecter: boolean,
  url: string,
  whitelist: Array<string>,
  origin: string,
  frame: any,
  connectionInterval: any,
  status: Status,
};
