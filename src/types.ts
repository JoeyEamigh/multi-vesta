export interface Viewer {
  type: 'installation';
  _id: string;
  _created: string;
  installation: Installation;
}

export interface Installable {
  _id: string;
}

export interface Installation {
  _id: string;
  installable: Installable;
}

export interface Board {
  _id: string;
}

export interface Subscription {
  _id: string;
  _created: string;
  installation: Installation;
  boards: Board[];
}

export interface SubscriptionsResponse {
  subscriptions: Subscription[];
}

export interface Message<T extends 'text' | 'characters'> {
  id: string;
  text: T extends 'text' ? string : never;
  created: string;
}

export interface MessageResponse<T extends 'text' | 'characters'> {
  message: Message<T>;
}

export type VestaContent = string | number[][];
