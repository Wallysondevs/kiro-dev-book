export default function Contexto() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Knowledge Bases e Contexto</h1>
      <p className="text-lg text-muted-foreground mb-6">Sistema de memoria persistente com busca semantica, isolamento por agente e indexacao em background.</p>

      <h2>Dois tipos de indice</h2>
      <div className="space-y-3 my-4">
        <div className="p-5 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Fast (BM25 - Lexical)</h3>
          <ul className="text-sm space-y-1 mt-2">
            <li>Indexacao instantanea</li>
            <li>Busca por keyword exata</li>
            <li>Baixo uso de recursos</li>
            <li>Ideal para: logs, configs, codebases grandes</li>
          </ul>
        </div>
        <div className="p-5 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Best (Semantico - all-MiniLM-L6-v2)</h3>
          <ul className="text-sm space-y-1 mt-2">
            <li>Entende contexto e significado</li>
            <li>Queries em linguagem natural</li>
            <li>Encontra conceitos relacionados</li>
            <li>Ideal para: documentacao, pesquisa</li>
            <li>Mais lento para indexar</li>
          </ul>
        </div>
      </div>

      <h3>Quando usar cada tipo</h3>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead className="bg-muted"><tr><th className="p-3 text-left">Caso de uso</th><th className="p-3 text-left">Tipo</th><th className="p-3 text-left">Motivo</th></tr></thead>
          <tbody>
            <tr className="border-t border-border"><td className="p-3">Logs e erros</td><td className="p-3 font-mono">Fast</td><td className="p-3">Keywords exatas rapidamente</td></tr>
            <tr className="border-t border-border"><td className="p-3">Configs</td><td className="p-3 font-mono">Fast</td><td className="p-3">Parametros exatos</td></tr>
            <tr className="border-t border-border"><td className="p-3">Codebase grande</td><td className="p-3 font-mono">Fast</td><td className="p-3">Busca rapida de simbolos</td></tr>
            <tr className="border-t border-border"><td className="p-3">Documentacao</td><td className="p-3 font-mono">Best</td><td className="p-3">Linguagem natural</td></tr>
            <tr className="border-t border-border"><td className="p-3">Research</td><td className="p-3 font-mono">Best</td><td className="p-3">Busca por conceitos</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Comandos</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Adicionar diretorio
/knowledge add --name "meu-codigo" --path ./src

# Com filtros de padrao
/knowledge add -n "rust-code" -p ./src --include "**/*.rs" --exclude "target/**"

# Buscar (semantico)
/knowledge search "como funciona a autenticacao"

# Buscar em KB especifica
/knowledge search --context-id abc123 "tratamento de erros"

# Listar todas as KBs
/knowledge show

# Remover KB
/knowledge remove --name "meu-codigo"

# Cancelar operacao em andamento
/knowledge cancel

# Ver status de operacoes background
/knowledge status`}</pre>

      <h2>Isolamento por agente</h2>
      <p>Cada agente tem sua propria KB isolada. Agente A nao acessa KB do Agente B. Ao trocar de agente, a KB muda junto.</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Storage por agente:
# Linux: ~/.local/share/kiro-cli/knowledge_bases/
# macOS: ~/Library/Application Support/kiro-cli/knowledge_bases/

knowledge_bases/
├── q_cli_default/         # Agente padrao
│   ├── contexts.json
│   └── context-id-1/
│       ├── data.json
│       └── bm25_data.json
└── meu-agente_abc123/     # Agente customizado
    ├── contexts.json
    └── context-id-2/
        └── data.json`}</pre>

      <h2>Auto-sync com resources do agente</h2>
      <p>KBs podem ser definidas na config do agente para sincronizar automaticamente:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`// No agent JSON:
{
  "resources": [
    {
      "type": "knowledgeBase",
      "source": "file://./docs",
      "name": "Documentation",
      "indexType": "best",
      "include": ["**/*.md"],
      "exclude": ["**/draft/**"],
      "autoUpdate": true
    }
  ]
}
// Auto-sync: adicionada ao carregar agente, removida ao deletar da config,
// re-indexada ao carregar se autoUpdate: true`}</pre>

      <h2>Tipos de arquivo suportados</h2>
      <p>Codigo: .rs, .py, .js, .ts, .tsx, .java, .c, .cpp, .go, .rb, .php, .swift, .kt, .cs, .sh, .html, .css, .sql, .yaml, .toml</p>
      <p>Docs: .md, .txt, .rst, .tex, .rtf</p>
      <p>Data: .json, .csv, .tsv, .xml, .svg</p>
      <p>Config: .ini, .conf, .cfg, .properties, .env</p>
      <p>Especiais: Dockerfile, Makefile, LICENSE, README</p>

      <h2>Configuracoes</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`kiro-cli settings knowledge.indexType Fast|Best
kiro-cli settings knowledge.maxFiles 10000
kiro-cli settings knowledge.chunkSize 512
kiro-cli settings knowledge.chunkOverlap 128
kiro-cli settings knowledge.defaultIncludePatterns '["**/*.rs", "**/*.md"]'
kiro-cli settings knowledge.defaultExcludePatterns '["target/**", "node_modules/**"]'`}</pre>

      <h2>Sessoes e /chat save/load</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Salvar sessao para arquivo (portavel)
/chat save backup.json

# Carregar sessao de arquivo
/chat load backup.json

# Formatos suportados:
# - Kiro native JSON (kiro-session-export-v1)
# - ZIP (session_metadata.json + conversation_log.jsonl)
# - Legacy V1 (versoes antigas do CLI)

# Nova conversa sem sair do CLI
/chat new

# Nova conversa com prompt inicial
/chat new explique como funciona async em Rust`}</pre>
    </div>
  );
}
