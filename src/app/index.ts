import * as express from 'express';
import { Request, Response } from 'express';

import logger from 'app/logger';

const app = express();
const {
  PORT = 3000,
} = process.env;
app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'hello world',
  });
});

if (require.main === module) { 
  app.listen(PORT, () => {
    logger.log({
      level: 'info',
      message: 'Test'
    })
  });
}

export default app;
