# Lighthouse Execution and Aggregated Report

## 👋 Introduction:

[Lighthouse document to get start](<(https://developers.google.com/web/tools/lighthouse)>)

## Major features

1. Perform following testing on web page. (Inbuilt lighthouse feature)
   - Page performance
   - Accessibility Testing
   - Code Best Practice
   - SEO
2. Page specific report for each url\page. (Inbuilt lighthouse feature)
3. Custom aggregated report for all url\pages.
4. Comparation with baseline score and update REG status accordingly.
5. Compare last execution results with previous results for each page and report in case score get down.
6. Live url to access latest report. (Azure store url)
7. Integrated with Azure release pipeline.
8. Seperate Azure job for scheduled execution.

### Basic Requirements : Check if you have following basic setup on your machine.

1. GIT on machine
2. Repository access ""
3. [Node 10.16.3](https://nodejs.org/en/download/)
4. Java jdk 8+
5. [Visual Studio Code](https://code.visualstudio.com/download) (or any other ID that support JS)
6. Yarn latest version.

## 👋 SETUP

### Step1: Clone and Setups

1. Clone repository on local machine.
2. Navigate to working directory and run "npm install"

```shell
git clone https://pscode.lioncloud.net/engineering-community/quality-engineering/webautomation-js.git
cd <Framework folder name>
npm install
```

### Step2: Add page urls to scan

1. Add application domain url in environment file for each environment. "test\lighthouse\lighthouse-dev.sites.txt" and "test\lighthouse\lighthouse-qa.sites.txt". (add other environments if required)
2. Make sure "lighthouse-batch" is listed in package.json if not then install it.

### Step3: Execution

```shell
npm run lh-dev
```

```shell
npm run lh-qa
```

### ✅ Step4: Access Report

1. After successfull execution lighthouse geerates page specific html report on "/src/reports/lighthouse/" location.
2. And generates custom aggregated report with environment name, last execution date as "/src/reports/lighthouse/index.html".

### Pipeline Integration:

Following scripts need to execute in sequence through bash script: (TO DO.)
