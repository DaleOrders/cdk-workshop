# Deploying a Simple Static Website on AWS using CDK

This workshop will cover the following:

- Setting up a basic AWS CDK project structure.
- Defining infrastructure as code (IaC) with TypeScript.
- Creating AWS resources necessary for hosting a static website.
- Deploying the website to AWS.


---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Step 1: Initialize the Project](#step-1-initialize-the-project)
3. [Step 2: Create a Simple Website](#step-2-create-a-simple-website)
4. [Step 3: Write CDK Code to Host the Website](#step-3-write-cdk-code-to-host-the-website)
5. [Step 4: Deploy the Website](#step-4-deploy-the-website)
6. [Full Command History](#full-command-history)
7. [Clean Up](#clean-up)
8. [Conclusion](#conclusion)
9. [Referrals](#referrals)

---

## Prerequisites

Before starting, ensure you have the following installed:

- **Node.js** (>= 14.x)
- **AWS CLI** (configured with credentials)
- **AWS CDK** (>= 2.x)

To install AWS CDK globally:

```bash
npm install -g aws-cdk
```

---

## Step 1: Initialize the Project

1. **Create a project directory** and navigate to it:

   ```bash
   mkdir cdk-s3-website && cd cdk-s3-website
   ```

2. **Initialize a new CDK app**:

   ```bash
   cdk init app --language typescript
   ```

3. Install dependencies for the CDK constructs we'll use:

   ```bash
   npm install @aws-cdk/aws-s3 @aws-cdk/aws-s3-deployment
   ```

4. Verify the setup by synthesizing the stack:

   ```bash
   cdk synth
   ```

   This command generates the CloudFormation template for your stack.

---