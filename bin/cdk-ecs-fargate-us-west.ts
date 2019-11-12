#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkEcsFargateUsWestStack } from '../lib/cdk-ecs-fargate-us-west-stack';

const app = new cdk.App();
new CdkEcsFargateUsWestStack(app, 'CdkEcsFargateUsWestStack');
