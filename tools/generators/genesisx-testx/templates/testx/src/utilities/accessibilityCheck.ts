import { source as axeSource } from 'axe-core';
import axe = require('axe-core');

const accessibilityRun = (pageName: string): void => {
  browser.execute(axeSource);
  const { violations }: any = browser.executeAsync((done) => {
    //const results = browser.executeAsync(done => {
    axe.run(
      {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
        },
      },
      (err, res) => {
        if (err) done(err);
        done(res);
      },
    );
  });

  const errorsAxe = violations.length;

  try {
    if (errorsAxe > 0) {
      let textresult = `Total violations: ${violations.length}`;

      for (let i = 0; i < errorsAxe; i += 1) {
        const tempJSON = JSON.parse(
          JSON.stringify(
            violations[i],
            [
              'help',
              'impact',
              'description',
              'tags',
              'nodes',
              'failureSummary',
              'any',
              'message',
              'target',
            ],
            '\t',
          ),
        );
        textresult = `${textresult} \n VIOLATION ${i + 1}`;
        textresult = `${textresult} \n IMPACT: ${tempJSON.impact}`;
        textresult = `${textresult} \n HELP TEXT: ${tempJSON.help}`;
        textresult = `${textresult} \n DESCRIPTION: ${tempJSON.description}`;
        textresult = `${textresult} \n TAGS: ${tempJSON.tags}`;
        textresult = `${textresult} \n FAILURE COUNT: ${tempJSON.nodes.length}`;
        for (let j = 0; j < tempJSON.nodes.length; j += 1) {
          textresult = `${textresult} \n FAILURE SUMMARY- ${
            j + 1
          } : ${JSON.stringify(tempJSON.nodes[j].failureSummary)}`;
          textresult = `${textresult} \n FAILED COMPONENT- ${
            j + 1
          } : ${JSON.stringify(tempJSON.nodes[j].target)}`;
          textresult = `${textresult} \n `;
        }
        textresult = `${textresult} \n \n`;
      }
      throw new Error(textresult);
    } else {
      console.info(`No accessibility issues in ${pageName} page`);
    }
  } catch (err) {
    throw new Error(err);
  }
};

export { accessibilityRun };
