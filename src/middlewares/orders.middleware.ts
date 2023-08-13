import { Request, Response, NextFunction } from 'express';

const verifyUserId = (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.body;
  
  if (!userId) {
    return res.status(400).send({ message: '"userId" is required' });
  }

  if (typeof userId !== 'number') {
    return res.status(422).send({ message: '"userId" must be a number' });
  }
  next();
};

const verifyProductsIds = (req: Request, res: Response, next: NextFunction) => {
  const { productIds } = req.body;
  if (!productIds) {
    return res.status(400).send({ message: '"productIds" is required' });
  }

  if (!Array.isArray(productIds)) {
    return res.status(422).send({ message: '"productIds" must be an array' });
  }

  if (productIds.length === 0) {
    return res.status(422).send({ message: '"productIds" must include only numbers' });
  }
  next();
};

export {
  verifyUserId,
  verifyProductsIds,
};