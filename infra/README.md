# Infraestrutura para Site Estático com AWS CDK

Esta pasta contém a infraestrutura como código (IaC) para implantar um site estático na AWS usando CDK.

## Arquitetura

A infraestrutura criada inclui:

- Bucket S3 para hospedagem estática
- Certificado SSL/TLS via AWS Certificate Manager (ACM)
- Distribuição CloudFront conectada ao bucket S3
- Registros DNS no Route 53 (opcional)

## Pré-requisitos

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [AWS CLI](https://aws.amazon.com/cli/) configurado com suas credenciais
- [AWS CDK](https://aws.amazon.com/cdk/) instalado globalmente (`npm install -g aws-cdk`)

## Configuração

1. Instale as dependências:

```bash
cd infra
npm install
```

2. Configure os parâmetros no arquivo `cdk.json` ou passe-os via linha de comando.

## Parâmetros

| Parâmetro              | Descrição                                   | Padrão                   |
| ---------------------- | ------------------------------------------- | ------------------------ |
| `domainName`           | Nome de domínio para o site                 | `example.com`            |
| `siteBucketName`       | Nome do bucket S3                           | `example-website-bucket` |
| `region`               | Região AWS para a stack principal           | `us-east-1`              |
| `hostedZoneId`         | ID da zona hospedada no Route 53 (opcional) | -                        |
| `createRoute53Records` | Se deve criar registros no Route 53         | `true`                   |

## Implantação

1. Bootstrap do CDK (primeira vez apenas):

```bash
cdk bootstrap aws://298659883276/us-east-1
```

2. Implante a infraestrutura:

```bash
# Usando parâmetros do cdk.json
cdk deploy --all

# Ou passando parâmetros via linha de comando
cdk deploy --all --context domainName=meusite.com --context siteBucketName=meusite-bucket
```

## Validação do Certificado

- Se você configurou `createRoute53Records` como `true` e forneceu um `hostedZoneId`, a validação do certificado será automática via DNS.
- Caso contrário, você receberá um e-mail para validar o certificado. Siga as instruções no e-mail.

## Upload do Site

Após a implantação, você pode fazer upload dos arquivos do seu site para o bucket S3:

```bash
# Substitua BUCKET_NAME pelo nome do seu bucket
aws s3 sync ../build/ s3://BUCKET_NAME/ --delete
```

## Limpeza

Para remover toda a infraestrutura:

```bash
cdk destroy --all
```

**Nota:** Isso excluirá todos os recursos, incluindo o bucket S3 e seu conteúdo.
