/* eslint no-param-reassign: 0 */
import { tmpDir } from 'os';

import multer from 'koa-multer';
import Router from 'koa-router';
import printer from 'printer';

const upload = multer({ dest: tmpDir() });
const router = new Router();

router.get('/', async (ctx) => {
  await ctx.render('index');
});

const uploadFields = [
  { name: 'file', maxCount: 1 },
];

router.post('/', upload.fields(uploadFields), async (ctx) => {
  const file = ctx.req.files.file[0];

  printer.printFile({
    filename: file.path,
    success: (jobID) => {
      console.log(`sent to printer with ID: ${jobID}`);
      ctx.status = 200;
    },
    error: (err) => {
      console.log(err);
      ctx.status = 422;
    },
  });
});

export default router;
