import { CreateCharacter } from './modules/Character/Character';
import express, { Response } from 'express';

const main = async () => {
  const app = express();

  app.listen(4000, () => {
    console.log('server running on "localhost:4000"');
  });

  app.get('/test', (_, res: Response) => {
    const newCharacter = CreateCharacter({ name: 'Something', level: 10, vocation: 'warrior' });
    return res.json(newCharacter);
  });
};

main().catch(error => {
  console.log(error);
});
