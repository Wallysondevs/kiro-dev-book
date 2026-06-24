export default function Configuracao() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Configuracao de Agentes</h1>
      <p className="text-lg text-muted-foreground mb-6">Agentes sao configurados via arquivos JSON que definem ferramentas, permissoes, resources, hooks e MCP servers.</p>

      <h2>Localizacao dos arquivos</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Local (por workspace) — tem prioridade
.kiro/agents/meu-agente.json

# Global (usuario)
~/.kiro/agents/meu-agente.json

# O nome do arquivo (sem .json) vira o nome do agente`}</pre>

      <h2>Estrutura completa do JSON</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`{
  "name": "rust-dev",
  "description": "Agente de desenvolvimento Rust",
  "prompt": "Voce e um expert em Rust. Foco em safety e performance.",
  "model": "model-id",
  "tools": ["fs_read", "fs_write", "execute_bash", "grep", "code"],
  "allowedTools": ["fs_read", "grep", "glob"],
  "toolsSettings": {
    "fs_write": {
      "allowedPaths": ["src/**", "tests/**"],
      "deniedPaths": ["target/**"]
    },
    "execute_bash": {
      "allowedCommands": ["cargo check", "cargo test"],
      "autoAllowReadonly": true
    }
  },
  "resources": [
    "file://src/**/*.rs",
    "file://Cargo.toml",
    "skill://.kiro/skills/**/SKILL.md"
  ],
  "hooks": {
    "agentSpawn": [{ "command": "cargo --version" }],
    "stop": [{ "command": "echo done" }]
  },
  "mcpServers": {
    "git": {
      "command": "mcp-server-git",
      "args": ["--stdio"]
    }
  },
  "keyboardShortcut": "ctrl+shift+r",
  "welcomeMessage": "Pronto para ajudar com Rust!"
}`}</pre>

      <h2>Campos em detalhe</h2>

      <h3>tools — ferramentas disponiveis</h3>
      <p>Lista de ferramentas que o agente pode usar:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`"tools": ["fs_read", "fs_write", "execute_bash", "grep", "glob", "code", "use_aws"]`}</pre>

      <h3>allowedTools — auto-aprovadas</h3>
      <p>Ferramentas usadas sem pedir confirmacao. Suporta wildcards:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`"allowedTools": [
  "fs_read",              // Exato
  "fs_*",                 // Wildcard: fs_read, fs_write, fs_list
  "@git/git_status",      // Tool especifica de MCP server
  "@github/*",            // Todas tools do server github
  "@builtin"              // Todas tools built-in
]`}</pre>

      <h3>resources — contexto automatico</h3>
      <p>Arquivos carregados no contexto do agente. Dois tipos:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`"resources": [
  "file://README.md",           // Sempre carregado no contexto
  "file://src/**/*.rs",          // Glob - todos os .rs
  "skill://.kiro/skills/**/SKILL.md"  // Sob demanda (lazy loading)
]`}</pre>
      <p className="mt-3"><strong>Skills</strong> sao resources com loading progressivo. O metadata (nome, descricao) e carregado no inicio, o conteudo completo so quando o agente precisa. Requer frontmatter YAML no arquivo.</p>

      <h3>mcpServers — integracoes externas</h3>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`"mcpServers": {
  // Servidor local (stdio)
  "git": {
    "command": "mcp-server-git",
    "args": ["--stdio"],
    "env": { "GIT_DIR": "/path" },
    "timeout": 120000,
    "disabledTools": ["dangerous_tool"]
  },
  // Servidor remoto (HTTP)
  "api": {
    "url": "https://mcp.example.com/sse",
    "headers": { "Authorization": "Bearer \" },
    "oauthScopes": ["mcp", "profile"]
  }
}`}</pre>

      <h3>keyboardShortcut — atalho para trocar de agente</h3>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`"keyboardShortcut": "ctrl+shift+r"
// Modifiers: ctrl, shift, alt
// Keys: a-z, 0-9, f1-f12, tab
// Toggle: apertar de novo volta ao agente anterior`}</pre>

      <h2>Criando agentes</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Via IA (interativo)
/agent create

# Via CLI
kiro-cli agent create --name meu-agente

# Manual: criar .kiro/agents/meu-agente.json

# Validar configuracao
kiro-cli agent validate --path .kiro/agents/meu-agente.json

# Listar agentes disponiveis
kiro-cli agent list

# Trocar agente no chat
/agent meu-agente`}</pre>

      <h2>Settings globais</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Gerenciar configuracoes
kiro-cli settings

# Knowledge base
kiro-cli settings chat.enableKnowledge true
kiro-cli settings knowledge.indexType Fast
kiro-cli settings knowledge.maxFiles 10000
kiro-cli settings knowledge.chunkSize 512

# Default patterns para knowledge
kiro-cli settings knowledge.defaultIncludePatterns '["**/*.rs", "**/*.md"]'
kiro-cli settings knowledge.defaultExcludePatterns '["target/**", "node_modules/**"]'`}</pre>
    </div>
  );
}
