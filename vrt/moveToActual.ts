(() => {
  const fs = require("fs");
  const path = require("path");
  const source = path.join(__dirname, "../__screenshots__/Example/");
  const dest = path.join(__dirname, "./actual/");
  // const source = path.join(__dirname, "./actual/Example/");
  // const dest = path.join(__dirname, "./expected/Example/");

  const moveFilesRecursively = (sourcePath: string, destPath: string) => {
    const items = fs.readdirSync(sourcePath, { withFileTypes: true });
    for (const item of items) {
      const currentSourcePath = path.join(sourcePath, item.name);
      const currentDestPath = path.join(destPath, item.name);

      if (item.isDirectory()) {
        if (!fs.existsSync(currentDestPath)) {
          fs.mkdirSync(currentDestPath);
        }
        moveFilesRecursively(currentSourcePath, currentDestPath);
      } else {
        fs.renameSync(currentSourcePath, currentDestPath);
      }
    }
  };

  moveFilesRecursively(source, dest);
})()
