import { CreateCharacter } from './Character';
import { Character } from './types';

test('Should return a new character with the given atributes', () => {
  const atributes: Character = {
    name: 'test',
    vocation: 'warrior',
    level: 10,
  };
  const newCharacter = CreateCharacter(atributes);

  expect(newCharacter).toEqual({ name: 'test', vocation: 'warrior', level: 10 });
});
