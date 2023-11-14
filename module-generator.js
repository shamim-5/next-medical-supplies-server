/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs').promises;
const path = require('path');

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const files = [
  {
    name: 'controller.ts',
    getCode: folderName =>
`import { Request, Response } from 'express';
import { ${capitalize(
  folderName,
)}Service } from './${folderName}.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
const result = await ${capitalize(folderName)}Service.getAllFromDB();

sendResponse(res, {
  statusCode: httpStatus.OK,
  success: true,
  message: '${folderName}s fetched successfully',
  data: result,
 });
});

export const ${capitalize(folderName)}Controller = {
  getAllFromDB,
};
`,
  },
  {
    name: 'interface.ts',
    getCode: folderName =>
`export type I${capitalize(folderName)}Data = {
 field: string,
}
`,
  },
  {
    name: 'validation.ts',
    getCode: folderName =>
`import { z } from 'zod';

const create = z.object({
body: z.object({
  objField: z.string({
      required_error: 'Title is required'
  }),
  arr${capitalize(folderName)}: z
      .array(
          z.object({
              ${folderName}Id: z.string({})
          })
      )
      .optional()
      })
});

export const ${capitalize(folderName)}Validation = {
 create
};
`,
  },
  {
    name: 'constant.ts',
    getCode: folderName =>
`export const ${folderName}ConstantFields: string[] = ['', '', ''];
`,
  },
  {
    name: 'service.ts',
    getCode: folderName =>
`import { ${capitalize(folderName)} } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllFromDB = async (): Promise<${capitalize(folderName)}[]> => {
  const result = await prisma.${folderName}.findMany({});

  return result;
}

export const ${capitalize(folderName)}Service = {
  getAllFromDB,
};
`,
  },
  {
    name: 'route.ts',
    getCode: folderName =>
`import express from 'express';
import { ${capitalize(
  folderName,
)}Controller } from './${folderName}.controller';

const router = express.Router();

router.get('/', ${capitalize(folderName)}Controller.getAllFromDB);

export const ${capitalize(folderName)}Route = router;
`,
  },
];

async function createFolderAndFiles(parentDirectory, folderName) {
  try {
    const moduleDirectory = path.join(parentDirectory, folderName);

    // Create the folder
    await fs.mkdir(moduleDirectory);

    // Create the files using for...of loop and async/await
    for (const file of files) {
      const filePath = path.join(moduleDirectory, `${folderName}.${file.name}`);
      await fs.writeFile(filePath, file.getCode(folderName));
      console.log(`Created ${filePath}`);
    }

    console.log('Module and files created successfully.');
  } catch (error) {
    console.error('Error:', error);
  }
}

async function getUserInput() {
  return new Promise(resolve => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(
      'Enter the Module name (or "exit" to terminate): ',
      folderName => {
        readline.close();
        resolve(folderName);
      },
    );
  });
}

async function start() {
  const parentDirectory = 'src/app/modules';

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const folderName = await getUserInput();

    if (folderName.toLowerCase() === 'exit') {
      process.exit(0);
    }

    await createFolderAndFiles(parentDirectory, folderName);
  }
}

start();
