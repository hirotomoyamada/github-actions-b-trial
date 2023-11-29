import { mkdir, readdir, writeFile } from 'fs/promises';
import path from 'path';

const main = async () => {
  const files = await readdir(path.join(process.cwd(), '.hoge'));

  await mkdir(path.join(process.cwd(), '.fuga'), { recursive: true });

  await Promise.all(
    files.map(async (name, index) => {
      const data = {
        hoe: 'This is fuga.',
      };

      const json = JSON.stringify(data);
      await writeFile(path.join(process.cwd(), '.fuga', `${name}-${index + 1}.json`), json);
    }),
  );
};

main();
