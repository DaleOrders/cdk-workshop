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
   


3. **Install dependencies for the CDK constructs we'll use**:

   ```bash
   npm install @aws-cdk/aws-s3 @aws-cdk/aws-s3-deployment
   ```

   CDK project is initalized and dependencies are installed.
   
   
   <img width="355" alt="image" src="https://github.com/user-attachments/assets/b32f8744-74da-40d9-9291-cd05fdcc2537" />

---

## Step 2: Create a Simple Website

1. **Download the website tempalte from [html5up.net](https://html5up.net/dimension/download)**:

2. unzip the file, copy the file in the location you saved it (~/Downloads in my case) and copy all the files to the website folder in your project.

```bash
cp -r ~/Downloads/html5up-dimension $(pwd)/website/
```

Website has been downloaded and moved into your project.

<img width="391" alt="image" src="https://github.com/user-attachments/assets/db1f48b2-dba3-4ef8-a317-22f23b132e6b" />

---

## Step 3: Write CDK Code to Host the Website

Add your name into the quotation marks where it says '<ADD_NAME>' and copy-paste the following Typescript code into `lib/cdk-s3-website-stack.ts` file to define the resources:


```typescript
//import dependencies
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';

export class CdkS3WebsiteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create an S3 bucket for hosting the website
    const websiteBucket = new s3.Bucket(this, '<ADD_NAME>', {
      websiteIndexDocument: 'index.html',
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY, // Allow deletion of non-empty bucket
      autoDeleteObjects: true, // Automatically delete objects when bucket is removed
    });

    // Deploy the website content in the website folder to the S3 bucket
    new s3deploy.BucketDeployment(this, 'DeployWebsite', {
      sources: [s3deploy.Source.asset('./website')],
      destinationBucket: websiteBucket,
    });

    // Output the website URL
    new cdk.CfnOutput(this, 'WebsiteURL', {
      value: websiteBucket.bucketWebsiteUrl,
    });
  }
}
```


<img width="746" alt="image" src="https://github.com/user-attachments/assets/2e6d53e9-06dd-4bcf-b128-b69f08e776fb" />

---
