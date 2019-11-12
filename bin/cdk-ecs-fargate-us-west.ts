#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkEcsFargateUsWestStack } from '../lib/cdk-ecs-fargate-us-west-stack';

const env = {
    region: 'us-west-2',
    account: '374801192098'
};
const app = new cdk.App();
new CdkEcsFargateUsWestStack(app, 'CdkEcsFargateUsWestStack', { env });
