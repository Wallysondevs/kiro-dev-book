export default function CLIBasico() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>CLI Referencia Completa</h1>
      <p className="text-lg text-muted-foreground mb-6">Todas as opcoes, flags e modos de operacao do Kiro CLI documentados.</p>

      <h2>kiro-cli chat — comando principal</h2>
      <p>Inicia sessao interativa com o agente de IA.</p>

      <h3>Opcoes completas</h3>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead className="bg-muted"><tr><th className="p-3 text-left">Flag</th><th className="p-3 text-left">Curta</th><th className="p-3 text-left">Descricao</th></tr></thead>
          <tbody>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">--resume</td><td className="p-3">-r</td><td className="p-3">Retoma a conversa mais recente do diretorio atual (restaura modelo ativo)</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">--resume-id ID</td><td className="p-3"></td><td className="p-3">Retoma conversa especifica por session ID</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">--resume-picker</td><td className="p-3"></td><td className="p-3">Seletor interativo de sessoes para retomar</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">--agent NOME</td><td className="p-3"></td><td className="p-3">Agente a usar (local: .kiro/agents/, global: ~/.kiro/agents/)</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">--model ID</td><td className="p-3"></td><td className="p-3">Modelo especifico (sobrepoe modelo salvo na sessao)</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">--trust-all-tools</td><td className="p-3">-a</td><td className="p-3">Auto-aprova todas as ferramentas sem perguntar</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">--trust-tools LISTA</td><td className="p-3"></td><td className="p-3">Auto-aprova ferramentas especificas (separadas por virgula)</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">--no-interactive</td><td className="p-3"></td><td className="p-3">Modo headless (sem TUI, requer query como argumento)</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">--list-sessions</td><td className="p-3">-l</td><td className="p-3">Lista conversas salvas do diretorio atual</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">--delete-session ID</td><td className="p-3">-d</td><td className="p-3">Deleta conversa por ID</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">--wrap always|never|auto</td><td className="p-3">-w</td><td className="p-3">Controle de quebra de linha</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">--verbose</td><td className="p-3">-v</td><td className="p-3">Aumenta verbosidade do log (repetivel)</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">[INPUT]</td><td className="p-3"></td><td className="p-3">Query inicial para enviar ao iniciar</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Modo Headless (automacao)</h2>
      <p>Para scripts e CI/CD, use <code className="bg-muted px-1.5 py-0.5 rounded font-mono text-sm">--no-interactive</code>:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Executa query unica e sai
kiro-cli chat --no-interactive --trust-all-tools "Rode os testes e resuma resultados"

# Confia apenas em ferramentas de leitura
kiro-cli chat --no-interactive --trust-tools=fs_read,grep "Liste todos os TODOs"`}</pre>
      <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg my-4">
        <p className="text-sm"><strong>Importante em headless:</strong> Sem --trust-all-tools ou --trust-tools, o agente trava esperando aprovacao que nunca vem. Comandos slash interativos (/model picker, /agent picker) nao funcionam.</p>
      </div>

      <h2>Gerenciamento de sessoes</h2>
      <p>Sessoes sao salvas automaticamente a cada turno e sao por-diretorio:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Listar sessoes do projeto atual
kiro-cli chat --list-sessions

# Output:
# Chat sessions for /path/to/project:
# SessionId: f2946a26-... 2 hours ago | Auth implementation | 15 msgs
# SessionId: 7bd2c90f-... 1 day ago  | DB refactor | 23 msgs

# Retomar a mais recente
kiro-cli chat --resume

# Retomar especifica
kiro-cli chat --resume-id f2946a26-3735-4b08-8d05-c928010302d5

# Seletor interativo
kiro-cli chat --resume-picker

# Deletar sessao
kiro-cli chat --delete-session f2946a26-3735-4b08-8d05-c928010302d5`}</pre>

      <h2>Armazenamento de sessoes</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`~/.kiro/sessions/cli/
├── {session-id}.json    # Metadata (cwd, timestamps, estado)
├── {session-id}.jsonl   # Log da conversa (append-only)
└── {session-id}.lock    # Lock (existe so quando sessao ativa)`}</pre>

      <h2>Atalhos do teclado</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead className="bg-muted"><tr><th className="p-3 text-left">Tecla</th><th className="p-3 text-left">Acao</th></tr></thead>
          <tbody>
            <tr className="border-t border-border"><td className="p-3 font-mono">Ctrl+R</td><td className="p-3">Buscar no historico de comandos (case-insensitive)</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono">Ctrl+C</td><td className="p-3">Cancelar operacao atual ou sair</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono">Ctrl+G</td><td className="p-3">Ver sub-agentes em execucao</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono">Up/Down</td><td className="p-3">Navegar historico de mensagens</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Logs</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Localizacao dos logs:
# Linux: /tmp/kiro-log/logs/kiro-chat.log
# macOS: $TMPDIR/kiro-log/kiro-chat.log

# Log customizado:
KIRO_CHAT_LOG_FILE=/tmp/debug.log kiro-cli chat

# Debug verboso:
KIRO_LOG_LEVEL=debug kiro-cli chat

# Sem cores no log:
KIRO_LOG_NO_COLOR=1 kiro-cli chat`}</pre>

      <h2>Outros comandos</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`kiro-cli login          # Autenticacao
kiro-cli logout         # Encerrar sessao
kiro-cli whoami         # Ver usuario logado
kiro-cli settings       # Configuracoes
kiro-cli agent list     # Listar agentes
kiro-cli agent create   # Criar agente
kiro-cli agent validate # Validar config de agente
kiro-cli mcp            # Gerenciar MCP servers
kiro-cli acp            # Iniciar Agent Client Protocol (integracao programatica)`}</pre>
    </div>
  );
}
