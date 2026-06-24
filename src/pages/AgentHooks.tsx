export default function AgentHooks() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Agent Hooks</h1>
      <p className="text-lg text-muted-foreground mb-6">Hooks sao comandos que executam automaticamente em pontos especificos do ciclo do agente. Configurados no JSON do agente.</p>

      <h2>Triggers disponiveis</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead className="bg-muted"><tr><th className="p-3 text-left">Trigger</th><th className="p-3 text-left">Quando executa</th><th className="p-3 text-left">Pode bloquear?</th></tr></thead>
          <tbody>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">agentSpawn</td><td className="p-3">Quando o agente inicializa</td><td className="p-3">Nao</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">userPromptSubmit</td><td className="p-3">Quando o usuario envia mensagem</td><td className="p-3">Nao</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">preToolUse</td><td className="p-3">Antes de executar uma ferramenta</td><td className="p-3">Sim</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">postToolUse</td><td className="p-3">Depois de executar uma ferramenta</td><td className="p-3">Nao</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">stop</td><td className="p-3">Quando o agente termina de responder</td><td className="p-3">Nao</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Configuracao no agent JSON</h2>
      <p>Hooks sao definidos dentro do arquivo de configuracao do agente (<code className="bg-muted px-1.5 py-0.5 rounded font-mono text-sm">.kiro/agents/meu-agente.json</code>):</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`{
  "hooks": {
    "agentSpawn": [
      { "command": "git status --short" },
      { "command": "cargo --version && rustc --version" }
    ],
    "userPromptSubmit": [
      { "command": "date '+%Y-%m-%d %H:%M:%S'" }
    ],
    "preToolUse": [
      {
        "matcher": "fs_write",
        "command": "git diff --stat"
      },
      {
        "matcher": "execute_bash",
        "command": "echo 'About to run command'",
        "timeout_ms": 5000
      }
    ],
    "postToolUse": [
      {
        "matcher": "execute_bash",
        "command": "echo 'Command completed'"
      }
    ],
    "stop": [
      { "command": "echo 'Response complete'" }
    ]
  }
}`}</pre>

      <h2>Campos de cada hook</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead className="bg-muted"><tr><th className="p-3 text-left">Campo</th><th className="p-3 text-left">Obrigatorio</th><th className="p-3 text-left">Descricao</th></tr></thead>
          <tbody>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">command</td><td className="p-3">Sim</td><td className="p-3">Comando shell a executar</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">matcher</td><td className="p-3">Nao</td><td className="p-3">Pattern para filtrar em preToolUse/postToolUse (nome da ferramenta)</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">timeout_ms</td><td className="p-3">Nao</td><td className="p-3">Timeout maximo em ms (default: 10000)</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">max_output_size</td><td className="p-3">Nao</td><td className="p-3">Max bytes do output antes de truncar (default: 10240)</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">cache_ttl_seconds</td><td className="p-3">Nao</td><td className="p-3">Cache do resultado por N segundos (default: 0 = sem cache)</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Matcher em preToolUse/postToolUse</h2>
      <p>O <code className="bg-muted px-1 rounded">matcher</code> filtra para qual ferramenta o hook dispara:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`// So dispara quando fs_write for usado
{ "matcher": "fs_write", "command": "..." }

// So para ferramentas de MCP server especifico
{ "matcher": "@github/get_issues", "command": "..." }

// Sem matcher = dispara para qualquer ferramenta
{ "command": "..." }`}</pre>

      <h2>Exemplos praticos</h2>

      <h3>Auto-check de versoes ao iniciar</h3>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`"agentSpawn": [
  { "command": "node --version && npm --version" },
  { "command": "git branch --show-current" }
]`}</pre>

      <h3>Lint automatico apos escrever arquivo</h3>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`"postToolUse": [
  {
    "matcher": "fs_write",
    "command": "npx eslint --fix \"\\" 2>/dev/null || true",
    "timeout_ms": 15000
  }
]`}</pre>

      <h3>Verificacao pre-execucao de comandos perigosos</h3>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`"preToolUse": [
  {
    "matcher": "execute_bash",
    "command": "echo 'Reviewing command before execution'",
    "timeout_ms": 5000
  }
]`}</pre>

      <h2>Comportamento de bloqueio (preToolUse)</h2>
      <p>Apenas <code className="bg-muted px-1 rounded">preToolUse</code> pode bloquear uma acao. Se o comando do hook retornar exit code diferente de zero, a ferramenta nao e executada.</p>
      <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg my-4">
        <p className="text-sm"><strong>Cuidado:</strong> Hooks com timeout excessivo travam o fluxo do agente. Mantenha comandos rapidos (idealmente menos de 5 segundos). Use cache_ttl_seconds para hooks que consultam informacoes que mudam raramente.</p>
      </div>
    </div>
  );
}
