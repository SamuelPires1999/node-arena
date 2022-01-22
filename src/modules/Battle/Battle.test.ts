import { CreateCharacter } from '../Character/Character';
import { battleTwoCharacters } from './Battle';

test('character 1 should return victorious', () => {
  const character1 = CreateCharacter({ name: 'char1', vocation: 'warrior', level: 10 });
  const character2 = CreateCharacter({ name: 'char2', vocation: 'cleric', level: 1 });

  expect(battleTwoCharacters(character1, character2)).toEqual(character1);
});
