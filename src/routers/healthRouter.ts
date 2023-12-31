import express from 'express';
import httpStatus from 'http-status';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(httpStatus.OK).send('OK!');
});

export { router as healthRouter };
