export type Status = 'disconnected' | 'connecting' | 'connected';

export type WeddingType = {
  events: {
    [key: string]: OnFunction
  },
  isConnecter: boolean,
  url: string,
  whitelist: Array<string>,
  origin: string,
  frame: any,
  connectionInterval: any,
  status: Status,
}

export type ConstructorType = {
  isConnecter: boolean,
  url: string,
  whitelist: Array<string>,
}

export type OnFunction = (any) => any;
