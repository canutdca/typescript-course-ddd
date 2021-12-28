import { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import { validateReqSchema } from '.';
import container from '../dependency-injection';

export const register = (router: Router) => {
  const reqSchema = [
    body('id').exists().isString(),
    body('name').exists().isString(),
    body('duration').exists().isString(),
  ];
  const coursePutController = container.get('Apps.mooc.controllers.CoursePutController');
  router.put('/courses/:id', reqSchema, validateReqSchema, (req: Request, res: Response) => coursePutController.run(req, res));
};
