export type Character = {
  name: string;
  vocation: 'warrior' | 'paladin' | '' | 'cleric';
	attr: number[]; //attributes, [atk,def,hp]
};
