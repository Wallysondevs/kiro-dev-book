export default function PrimeiroUso() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Primeiro Uso</h1>
      <p className="text-lg text-muted-foreground mb-6">Guia rápido para começar a usar o Kiro imediatamente.</p>

      <h2>Iniciando um Chat</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">
{`# Navegar até o projeto
cd meu-projeto

# Iniciar chat interativo
kiro-cli chat

# O Kiro vai detectar automaticamente:
# - Linguagem do projeto
# - Ferramentas de build (package.json, Makefile, etc)
# - Configuração de testes
# - Estrutura de diretórios`}
      </pre>

      <h2>Interface do Chat</h2>
      <p>O chat usa uma interface TUI (Terminal UI) com:</p>
      <ul className="list-disc list-inside space-y-1 my-4 ml-4">
        <li><code className="bg-muted px-1 rounded">↵ Enter</code> — Enviar mensagem</li>
        <li><code className="bg-muted px-1 rounded">Ctrl+O</code> — Toggle output expandido</li>
        <li><code className="bg-muted px-1 rounded">Ctrl+G</code> — Ver sessões de sub-agentes</li>
        <li><code className="bg-muted px-1 rounded">Ctrl+C</code> — Cancelar operação em andamento</li>
        <li><code className="bg-muted px-1 rounded">/</code> — Comandos slash</li>
      </ul>

      <h2>Comandos Slash Essenciais</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">
{`/help          — Lista todos os comandos disponíveis
/context       — Gerenciar contexto da sessão
/chat save     — Salvar sessão atual
/chat load     — Carregar sessão anterior
/model         — Trocar modelo de IA
/clear         — Limpar histórico da conversa
/copy          — Copiar última resposta`}
      </pre>

      <h2>Primeiro Exemplo</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">
{`# Dentro do chat, peça algo simples:
> crie um servidor express com rota /health

# O Kiro vai:
# 1. Ler package.json (se existir)
# 2. Criar o arquivo server.js
# 3. Adicionar express como dependência
# 4. Rodar npm install
# 5. Testar se compila`}
      </pre>

      <h2>Dicas Iniciais</h2>
      <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg my-4">
        <p className="font-medium">💡 O Kiro funciona melhor quando:</p>
        <ul className="text-sm space-y-1 mt-2">
          <li>• Você está no diretório raiz do projeto</li>
          <li>• O projeto tem configuração de build clara</li>
          <li>• Você descreve o que quer com contexto suficiente</li>
          <li>• Usa linguagem direta e objetiva</li>
        </ul>
      </div>
    </div>
  );
}
