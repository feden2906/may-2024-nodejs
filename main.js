const path = require('node:path');
const fs = require('node:fs/promises');

const foo = async () => {
    const pathToFile = path.join(__dirname, 'baseFolder');
    await fs.mkdir(pathToFile, {recursive: true});

    const folders = ['folder1', 'folder2', 'folder3', 'folder4', 'folder5'];
    const files = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];

    await Promise.all(folders.map(async (folder) => {
        const folderPath = path.join(pathToFile, folder);
        await fs.mkdir(folderPath, {recursive: true});

        await Promise.all(files.map(async (file) => {
            await fs.writeFile(path.join(folderPath, file), 'Hello World');
        }));
    }));

    const data = await fs.readdir(pathToFile);
    for (const folder of data) {
        const folderPath = path.join(pathToFile, folder);
        const files = await fs.readdir(folderPath);
        const stat = await fs.stat(folderPath);
        console.log(`File: ${folderPath} - Is File: ${stat.isFile()}`);

        for (const file of files) {
            const filePath = path.join(folderPath, file);
            const stat = await fs.stat(filePath);
            console.log(`File: ${filePath} - Is File: ${stat.isFile()}`);
        }
    }
}

void foo();
