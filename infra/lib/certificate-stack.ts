import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';

export interface CertificateStackProps extends cdk.StackProps {
  domainName: string;
  hostedZoneId?: string;
  createRoute53Records: boolean;
}

export class CertificateStack extends cdk.Stack {
  public readonly certificate: acm.ICertificate;

  constructor(scope: Construct, id: string, props: CertificateStackProps) {
    super(scope, id, {
      ...props,
      env: { region: 'us-east-1' }, // Certificados para CloudFront devem estar em us-east-1
    });

    let hostedZone: route53.IHostedZone | undefined;
    
    // Se fornecido um ID de zona hospedada e createRoute53Records for true, importar a zona
    if (props.hostedZoneId && props.createRoute53Records) {
      hostedZone = route53.HostedZone.fromHostedZoneAttributes(this, 'HostedZone', {
        hostedZoneId: props.hostedZoneId,
        zoneName: props.domainName,
      });
    }

    // Criar o certificado
    if (hostedZone && props.createRoute53Records) {
      // Criar certificado com validação DNS
      this.certificate = new acm.Certificate(this, 'SiteCertificate', {
        domainName: props.domainName,
        subjectAlternativeNames: [`*.${props.domainName}`], // Inclui subdomínios
        validation: acm.CertificateValidation.fromDns(hostedZone),
      });
    } else {
      // Criar certificado com validação por email
      this.certificate = new acm.Certificate(this, 'SiteCertificate', {
        domainName: props.domainName,
        subjectAlternativeNames: [`*.${props.domainName}`], // Inclui subdomínios
        validation: acm.CertificateValidation.fromEmail(),
      });
    }

    // Exportar o ARN do certificado para ser usado em outras stacks
    new cdk.CfnOutput(this, 'CertificateArn', {
      value: this.certificate.certificateArn,
      exportName: `${this.stackName}-CertificateArn`,
    });
  }
}