/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const reporter = require("cucumber-html-reporter");

const options = {
    theme: "bootstrap",
    jsonDir: "src/reports/",
    output: "src/reports/cucumber_report.html",
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    columnLayout: 1,
};

reporter.generate(options);
