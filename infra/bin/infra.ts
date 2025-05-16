#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import { StaticSiteStack } from '../lib/static-site-stack';

const app = new cdk.App();

// Obter parâmetros do contexto
const domainName = app.node.tryGetContext('domainName') || 'example.com';
const siteBucketName = app.node.tryGetContext('siteBucketName') || `${domainName}-website`;
const region = app.node.tryGetContext('region') || 'us-east-1';
const hostedZoneId = app.node.tryGetContext('hostedZoneId');
const createRoute53Records = app.node.tryGetContext('createRoute53Records') === true;

// Criar a stack principal na região especificada
const siteStack = new StaticSiteStack(app, 'StaticSiteStack', {
  domainName,
  siteBucketName,
  certificateArn: 'arn:aws:acm:us-east-1:298659883276:certificate/5864123e-c749-4d29-9a9c-add3278eee01',
  hostedZoneId,
  createRoute53Records,
  env: { region },
  crossRegionReferences: true,
});