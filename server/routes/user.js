import express from 'express';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/users - Get list of users */
  .get((req, res) => {
    console.log('entrou');
  });

export default router;
