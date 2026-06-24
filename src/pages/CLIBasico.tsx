export default function CLIBasico() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>CLI Básico</h1>
      <p className="text-lg text-muted-foreground mb-6">Guia completo de todos os comandos, flags e comportamentos do Kiro CLI.</p>

      <h2>Anatomia de um comando</h2>
      <p>Todo comando do Kiro segue o padrão:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`kiro-cli <comando> [subcomando] [--flags] [argumentos]`}</pre>

      <h2>Comandos disponíveis</h2>

      <h3>kiro-cli chat</h3>
      <p>O comando principal. Inicia uma sessão interativa de chat com o agente.</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Uso básico — inicia no diretório atual
kiro-cli chat

# Com modelo específico
kiro-cli chat --model claude-sonnet-4

# Retomar última sessão
kiro-cli chat --resume

# Em outro diretório
kiro-cli chat --cwd /caminho/do/projeto`}</pre>
      <p className="mt-3">Quando o chat inicia, o Kiro:</p>
      <ol className="list-decimal list-inside space-y-1 my-3 ml-4 text-sm">
        <li>Detecta o projeto (linguagem, build tool, testes)</li>
        <li>Carrega arquivos .kiro/ (steering, specs, hooks)</li>
        <li>Mostra o prompt para você digitar</li>
      </ol>

      <h3>kiro-cli auth</h3>
      <p>Gerencia autenticação. O Kiro suporta múltiplas formas de auth:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Login interativo (abre navegador para OAuth)
kiro-cli auth

# Logout
kiro-cli auth logout

# Verificar status
kiro-cli whoami`}</pre>
      <p className="mt-3">Métodos de autenticação (em ordem de prioridade):</p>
      <ol className="list-decimal list-inside space-y-1 my-3 ml-4 text-sm">
        <li><code className="bg-muted px-1 rounded">ANTHROPIC_API_KEY</code> — variável de ambiente (mais simples)</li>
        <li>OAuth via <code className="bg-muted px-1 rounded">kiro-cli auth</code> — login com conta Anthropic</li>
        <li>AWS Bedrock — via <code className="bg-muted px-1 rounded">AWS_PROFILE</code> configurado</li>
      </ol>

      <h2>Interface TUI (Terminal UI)</h2>
      <p>O chat usa uma interface rica no terminal. Aqui estão todos os atalhos:</p>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead className="bg-muted"><tr><th className="p-3 text-left">Tecla</th><th className="p-3 text-left">Ação</th><th className="p-3 text-left">Quando usar</th></tr></thead>
          <tbody>
            <tr className="border-t border-border"><td className="p-3 font-mono">Enter</td><td className="p-3">Enviar mensagem</td><td className="p-3">Quando terminar de escrever</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono">Shift+Enter</td><td className="p-3">Nova linha</td><td className="p-3">Mensagens multi-linha</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono">Ctrl+C</td><td className="p-3">Cancelar operação</td><td className="p-3">Parar uma ação longa do agente</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono">Ctrl+O</td><td className="p-3">Toggle output completo</td><td className="p-3">Ver output de comandos expandido</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono">Ctrl+G</td><td className="p-3">Ver sub-agentes</td><td className="p-3">Monitorar pipelines paralelos</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono">↑ / ↓</td><td className="p-3">Histórico de mensagens</td><td className="p-3">Reutilizar mensagens anteriores</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono">/</td><td className="p-3">Iniciar comando slash</td><td className="p-3">Acessar funcionalidades do sistema</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Comandos Slash — referência completa</h2>
      <p>Comandos slash são digitados dentro do chat e controlam o comportamento do Kiro:</p>

      <h3>Gerenciamento de sessão</h3>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`/chat save minha-feature    — Salva sessão com nome
/chat load minha-feature    — Carrega sessão salva
/chat list                  — Lista todas as sessões
/clear                      — Limpa histórico (começa do zero)
/compact                    — Compacta contexto manualmente`}</pre>

      <h3>Contexto e conhecimento</h3>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`/context add ./arquivo.ts   — Adiciona arquivo ao contexto
/context show               — Mostra contexto ativo
/context remove [id]        — Remove item do contexto
/knowledge add              — Indexa conteúdo para busca
/knowledge search "query"   — Busca semântica no KB`}</pre>

      <h3>Configuração</h3>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`/model claude-opus-4        — Troca o modelo ativo
/copy                       — Copia última resposta
/help                       — Lista todos os comandos`}</pre>

      <h2>Variáveis de ambiente</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead className="bg-muted"><tr><th className="p-3 text-left">Variável</th><th className="p-3 text-left">Descrição</th><th className="p-3 text-left">Exemplo</th></tr></thead>
          <tbody>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">ANTHROPIC_API_KEY</td><td className="p-3">Chave da API Anthropic</td><td className="p-3 font-mono text-xs">sk-ant-api03-...</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">KIRO_MODEL</td><td className="p-3">Modelo padrão</td><td className="p-3 font-mono text-xs">claude-opus-4</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">AWS_PROFILE</td><td className="p-3">Perfil AWS (para Bedrock)</td><td className="p-3 font-mono text-xs">production</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">AWS_REGION</td><td className="p-3">Região AWS</td><td className="p-3 font-mono text-xs">us-east-1</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Estrutura de diretório .kiro/</h2>
      <p>O Kiro usa uma pasta <code className="bg-muted px-1.5 py-0.5 rounded font-mono text-sm">.kiro/</code> na raiz do projeto para configurações persistentes:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`seu-projeto/
├── .kiro/
│   ├── steering.md         # Regras de comportamento do agente
│   ├── specs/              # Documentos de planejamento
│   │   ├── auth-jwt.md     #   Cada feature tem uma spec
│   │   └── refactor-db.md
│   ├── hooks/              # Scripts automáticos
│   │   ├── post-file-write.sh
│   │   └── on-error.sh
│   └── context/            # Contexto persistente entre sessões
├── src/
├── package.json
└── ...`}</pre>
      <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg my-4">
        <p className="text-sm"><strong>Dica:</strong> Commite a pasta .kiro/ no git. Assim toda a equipe compartilha as mesmas regras de steering e specs do projeto.</p>
      </div>
    </div>
  );
}
