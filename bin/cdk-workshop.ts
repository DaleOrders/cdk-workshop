#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { S3StaticWebsiteStack } from '../lib/cdk-workshop-stack';

const app = new cdk.App();
new S3StaticWebsiteStack (app, 'CdkWorkshopStack', {
env: { region: 'ap-southeast-2' },
});