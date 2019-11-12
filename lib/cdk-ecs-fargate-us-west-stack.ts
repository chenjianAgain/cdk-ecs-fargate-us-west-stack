import cdk = require('@aws-cdk/core');
import { Vpc } from '@aws-cdk/aws-ec2';
import { Cluster, ContainerImage, FargateTaskDefinition } from '@aws-cdk/aws-ecs';
import { ApplicationLoadBalancedFargateService } from '@aws-cdk/aws-ecs-patterns';

export class CdkEcsFargateUsWestStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const vpc = Vpc.fromLookup(this, 'defaultstack/defaultvpc', {
      isDefault: false
    })

    const cluster = new Cluster(this,  'ecsCluster', {
      vpc
    })

    new ApplicationLoadBalancedFargateService(this, "MyFargateService", {
      cluster: cluster,
      taskImageOptions: { image: ContainerImage.fromRegistry("amazon/amazon-ecs-sample") },

    });

  }
}
