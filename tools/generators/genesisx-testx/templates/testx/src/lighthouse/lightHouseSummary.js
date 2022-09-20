let fsexe = require('fs-extra');
let jpath = require('jsonpath');
const fs = require('fs');
const path = require('path');
let dateValue = new Date().toLocaleString();
console.log('Date', dateValue);

let expScore = 70;
let expPerformance = 80;
const buildPathHtml = path.resolve('./src/reports/lighthouse');
const jsonFile = 'src/reports/lighthouse/summary.json';
var rows = '';
let scoreBackground = 'white';
let performanceBackground = 'white';

var data = fsexe.readFileSync(jsonFile, 'utf8');
var summaryfile = JSON.parse(data);

const createRow = (item) => {
  console.log('new row');

  let fileName = summaryfile[i].html;
  let url = jpath.query(summaryfile[i], '$..url');
  let score = jpath.query(summaryfile[i], '$..score') * 100;
  let performance = jpath.query(summaryfile[i], '$..detail.performance') * 100;
  let accessibility = jpath.query(summaryfile[i], '$..detail.accessibility') * 100;
  let best_practices = jpath.query(summaryfile[i], '$..detail["best-practices"]') * 100;
  let seo = jpath.query(summaryfile[i], '$..detail.seo') * 100;

  scoreBackground = expScore > score ? 'background:lightpink' : 'background:lightgreen';
  performanceBackground = expPerformance > performance ? 'background:lightpink' : 'background:lightgreen';

  row = `<tr>
      <td class="status"><a href="${fileName}">${url}</td>
      <td class="status" style="${scoreBackground}">${score}</td>
      <td class="status">NA</td>
      <td class="status" style="${performanceBackground}">${performance}</td>
      <td class="status">NA</td>
      <td class="status">${accessibility}</td>
      <td class="status">${best_practices}</td>
      <td class="status">${seo}</td>
    </tr>`;
  return row;
};

const createTable = (rows) => `
  <table>
    <thead>
    <tr>
      <th>Page URL</td>
      <th>Score</td>
      <th>Previous Score</td>
      <th>Performance</td>
      <th>Previous Performance</td>
      <th>Accessibility</td>
      <th>Best Practices</td>
      <th>SEO</td>
    </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>
`;

const createHeader = (data) => `
</div>
<div class="label-area">
  <h1 style="color:#e87722;"> LightHouse Report </h1>
</div>
<div class="secondary-header">
  <p>
  Environment : <span>Dev</span> | Date : <span> ${dateValue} </span>|
  </p>
</div>
`;

const createHtml = (table, header) => `
  <html>
    <head>
      <title> LightHouse Report</title>
      <style>
      table {
        width: 100%;
        color: #293A2A;
      }
  
      thead tr {
        background-color: #000;
        font-weight: normal;
      }
  
      tr {
  
        border: 1px solid #442424;
      }
  
      th,
      td {
        padding: 15px;
      }
  
      thead tr {
        text-align: center;
  
        color: #fff;
      }
  
      tr,
      td {
        background-color: #ececec;
        white-space: nowrap;
      }
  
      .container {
        width: 100%;
        position: relative;
      }
  
      .logo {
        width: 20%;
        float: left;
        text-align: left;
      }
  
      .label-area {
        width: 80%;
        float: left;
  
      }
  
      th.green {
        background-color: #9fd34f;
      }
  
      th.red {
        background-color: red;
      }
      </style>
    </head>
    <body>
    <div class="container">
    <div class="logo">
      <img src="https://www.publicissapient.com/content/dam/ps-rebrand/brand/ps-logo-NEW.svg" alt="Logo" width="150px" height="100px" />

  </div>
      ${header}
      ${table}
    </body>
  </html>
`;

/**
 * @description this method takes in a path as a string & returns true/false
 * as to if the specified file path exists in the system or not.
 * @param {String} filePath
 * @returns {Boolean}
 */

const doesFileExist = (filePath) => {
  try {
    fs.statSync(filePath); // get information of the specified file path.
    return true;
  } catch (error) {
    return false;
  }
};

try {
  /* Check if the file for `html` build exists in system or not */
  if (doesFileExist(buildPathHtml + '/index.html')) {
    console.log('Deleting old build file');
    /* If the file exists delete the file from system */
    fs.unlinkSync(buildPathHtml + '/index.html');
  }

  for (var i = 0; i < summaryfile.length; i++) {
    rows = rows + createRow(summaryfile[i]);
  }
  console.log('row value', row);

  /* generate table */
  const table = createTable(rows);
  const header = createHeader(data);
  /* generate html */
  const html = createHtml(table, header);
  fs.mkdir(buildPathHtml, { recursive: true }, (err) => {
    if (err) throw err;
    fs.writeFileSync(buildPathHtml + '/index.html', html);
  });
  /* write the generated html to file */

  console.log('Succesfully created an HTML table');
} catch (error) {
  console.log('Error generating table', error);
}
