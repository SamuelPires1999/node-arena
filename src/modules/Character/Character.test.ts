import {Character} from './Character';

test('Should return a new character with the given atributes', () => {
	const myCharacter = new Character({name: 'teste', vocation: 'warrior', attr: [14,9,560]})
	expect(myCharacter).toBeInstanceOf(Character)
});
