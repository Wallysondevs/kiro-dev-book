export default function AwsIntegration() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>AWS Integration</h1>
      <p className="text-lg text-muted-foreground mb-6">O Kiro integra nativamente com servicos AWS via CLI.</p>
      <h2>Configuracao</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Configurar perfil AWS\nexport AWS_PROFILE=default\nexport AWS_REGION=us-east-1\n\n# Ou via ~/.aws/credentials\n[default]\naws_access_key_id = AKIA...\naws_secret_access_key = ...`}</pre>
      <h2>Servicos Suportados</h2>
      <p>O Kiro pode chamar qualquer servico AWS diretamente:</p>
      <ul className="list-disc list-inside space-y-1 my-4 ml-4">
        <li>EC2 - gerenciar instancias, security groups</li>
        <li>S3 - upload, download, sync de arquivos</li>
        <li>Lambda - deploy e invoke de funcoes</li>
        <li>CloudFormation - deploy de stacks</li>
        <li>RDS - gerenciar databases</li>
        <li>ECS/EKS - containers e Kubernetes</li>
      </ul>
      <h2>Exemplos</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# No chat do Kiro:\n> liste minhas instancias EC2\n> faca deploy desta funcao no Lambda\n> crie um bucket S3 com versionamento\n> abra a porta 443 no security group sg-xxx`}</pre>
    </div>
  );
}
