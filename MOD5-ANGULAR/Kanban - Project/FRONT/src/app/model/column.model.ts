import { Card } from './card.model';

export class Column {
  constructor(public name: string, public cards: Card[]) {}
}
