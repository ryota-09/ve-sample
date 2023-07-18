(() => {
  const fs = require("fs");
  const path = require("path");

  const source = path.join(__dirname, "./actual/");
  const dest = path.join(__dirname, "./expected/");

  if (fs.existsSync(source) && fs.existsSync(dest)) {
    fs.readdirSync(source, { withFileTypes: true }).forEach((dirent: any) => {
      if (dirent.isDirectory() && dirent.name !== "diff") {
        const subSource = path.join(source, dirent.name);
        const subDest = path.join(dest, dirent.name);

        // destにサブディレクトリが存在しない場合、作成する
        if (!fs.existsSync(subDest)) {
          fs.mkdirSync(subDest);
        }

        fs.readdirSync(subSource).forEach((file: string) =>
          fs.renameSync(path.join(subSource, file), path.join(subDest, file))
        );
      }
    });
  } else {
    console.log("Source or destination directory does not exist");
  }
})()
