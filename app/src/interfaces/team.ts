import { Pokemon } from './pokemon';

export enum TeamType {
  Valor,
  Instinct,
  Mystic,
}

export interface Team {
  _id: string;
  type: TeamType;
  ownerId: string;
  name: string;
  description: string;
  roster: Pokemon[];
}
