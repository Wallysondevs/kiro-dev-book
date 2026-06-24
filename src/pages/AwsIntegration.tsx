export default function AwsIntegration() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>AWS Integration</h1>
      <p className="text-lg text-muted-foreground mb-6">O Kiro pode interagir diretamente com qualquer servico AWS, funcionando como um assistente de infraestrutura.</p>

      <h2>Configuracao</h2>
      <p>O Kiro usa as mesmas credenciais que o AWS CLI local:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Opcao 1: Perfil configurado em ~/.aws/credentials
export AWS_PROFILE=production
export AWS_REGION=us-east-1

# Opcao 2: Variaveis de ambiente
export AWS_ACCESS_KEY_ID=AKIA...
export AWS_SECRET_ACCESS_KEY=...
export AWS_REGION=us-east-1

# Opcao 3: IAM Role (em EC2/Lambda/ECS)
# Automatico, sem configuracao necessaria`}</pre>

      <h2>O que o Kiro pode fazer com AWS</h2>
      <p>Qualquer operacao que a AWS CLI suporta, o Kiro tambem pode:</p>

      <h3>EC2 (Compute)</h3>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`> liste minhas instancias EC2 rodando
> abra a porta 443 no security group sg-abc123
> qual o IP publico da instancia i-xyz?`}</pre>

      <h3>S3 (Storage)</h3>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`> crie um bucket s3 chamado meu-app-assets
> faca upload da pasta ./dist para s3://meu-bucket/
> liste os objetos maiores que 100MB no bucket`}</pre>

      <h3>Lambda (Serverless)</h3>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`> faca deploy desta funcao como Lambda
> invoque a lambda process-orders com este payload
> mostre os logs recentes da lambda`}</pre>

      <h3>RDS/DynamoDB (Database)</h3>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`> qual o status da instancia RDS production-db?
> crie um snapshot do banco antes do deploy
> liste as tabelas do DynamoDB`}</pre>

      <h2>Seguranca com AWS</h2>
      <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg my-4">
        <p className="text-sm"><strong>Acoes de alto risco em AWS:</strong> O Kiro pede confirmacao antes de modificar recursos de producao, deletar dados, ou alterar IAM policies. Ele explica exatamente o que vai fazer e o impacto potencial antes de executar.</p>
      </div>
    </div>
  );
}
