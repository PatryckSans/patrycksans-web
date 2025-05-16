#!/bin/bash

# Script para facilitar o deploy do site estático

# Verificar se o diretório build existe
if [ ! -d "../portfolio/build" ]; then
  echo "Diretório de build não encontrado. Construindo o projeto..."
  cd ../portfolio && npm run build
  cd ../infra
fi

# Instalar dependências se necessário
if [ ! -d "node_modules" ]; then
  echo "Instalando dependências..."
  npm install
fi

# Obter o nome do bucket do contexto ou do cdk.json
BUCKET_NAME=$(node -e "const fs=require('fs');const cdk=JSON.parse(fs.readFileSync('cdk.json','utf8'));console.log(process.env.BUCKET_NAME || process.argv[1] || cdk.context.siteBucketName)" -- "$1")

# Verificar se o bucket foi especificado
if [ -z "$BUCKET_NAME" ]; then
  echo "Nome do bucket não especificado. Use: ./deploy.sh nome-do-bucket"
  exit 1
fi

# Implantar a infraestrutura
echo "Implantando infraestrutura..."
cdk deploy --all --require-approval never

# Fazer upload dos arquivos do site
echo "Fazendo upload dos arquivos do site para o bucket $BUCKET_NAME..."
aws s3 sync ../portfolio/build/ s3://$BUCKET_NAME/ --delete

echo "Deploy concluído! Aguarde alguns minutos para que as alterações se propaguem pelo CloudFront."