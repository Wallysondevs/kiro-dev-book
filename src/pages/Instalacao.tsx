import { Rocket } from "lucide-react";

export default function Instalacao() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Instalação</h1>
      <p className="text-lg text-muted-foreground mb-6">Como instalar e configurar o Kiro CLI no seu sistema.</p>

      <h2>Requisitos</h2>
      <ul className="list-disc list-inside space-y-1 my-4 ml-4">
        <li>Node.js 18+ (recomendado 20+)</li>
        <li>npm ou pnpm</li>
        <li>Sistema operacional: Linux, macOS ou Windows (WSL)</li>
        <li>Conta Anthropic ou AWS Bedrock para autenticação</li>
      </ul>

      <h2>Instalação via npm</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">
{`# Instalação global
npm install -g @anthropic-ai/kiro-cli

# Verificar instalação
kiro-cli --version

# Ou usar npx sem instalar
npx @anthropic-ai/kiro-cli chat`}
      </pre>

      <h2>Autenticação</h2>
      <p>Após instalar, configure a autenticação:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">
{`# Login interativo (abre navegador)
kiro-cli auth

# Ou via variável de ambiente
export ANTHROPIC_API_KEY="sk-ant-..."

# Para AWS Bedrock
export AWS_PROFILE="default"
export AWS_REGION="us-east-1"`}
      </pre>

      <h2>Verificação</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">
{`# Testar se está funcionando
kiro-cli whoami

# Deve mostrar:
# User: seu-email@exemplo.com
# Auth: Anthropic API
# Model: claude-opus-4`}
      </pre>

      <h2>Atualização</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">
{`# Atualizar para última versão
npm update -g @anthropic-ai/kiro-cli`}
      </pre>
    </div>
  );
}
