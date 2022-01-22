import type { Character } from './types';

export const CreateCharacter = ({ name, level, vocation }: Character) => {
  return {
    name,
    level,
    vocation,
  };
};
