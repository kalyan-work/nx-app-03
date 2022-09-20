import { Tree, formatFiles, installPackagesTask } from "@nrwl/devkit";
import { libraryGenerator } from "@nrwl/workspace/generators";
import * as fs from "fs-extra";
import { GeneratorOptions } from "./schema";

export default async function (tree: Tree, schema: GeneratorOptions) {
  try {
    const { project, targetUrl } = schema;
    const srcDir = "tools/generators/genesisx-testx/template/testx";
    const destDir = "apps/" + project;

    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir);
    }

    fs.copySync(srcDir, destDir);

    fs.readFile(
      destDir + "testx/src/config/environment.ts",
      "utf8",
      function (err, data) {
        if (err) {
          return console.log(err);
        }
        let result = data.replace(/TARGET_URL/g, targetUrl);

        fs.writeFile(
          destDir + "testx/src/config/environment.ts",
          result,
          "utf8",
          function (err) {
            if (err) return console.log(err);
          }
        );
      }
    );

    // tools/generators/genesisx-testx/templates/testx/src/config/environment.ts
    // await libraryGenerator(tree, schema);
    await formatFiles(tree);
    return () => {
      installPackagesTask(tree)
    }
  } catch (e) {
    if (e instanceof TypeError) {
      // statements to handle TypeError exceptions
      console.log('TypeError', e.message)
    } else if (e instanceof RangeError) {
      // statements to handle RangeError exceptions
      console.log('RangeError', e.message)
    } else if (e instanceof EvalError) {
      // statements to handle EvalError exceptions
      console.log('EvalError', e.message)
    } else {
      console.log('UnknownError', e.message)
      // statements to handle any unspecified exceptions
      //logMyErrors(e); // pass exception object to error handler
    }
  }
}
