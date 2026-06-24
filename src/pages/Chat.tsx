export default function Chat() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Chat e Slash Commands</h1>
      <p className="text-lg text-muted-foreground mb-6">Referencia completa de todos os slash commands disponiveis no chat, com descricao e uso.</p>

      <h2>Todos os Slash Commands</h2>
      <p>Saida real de <code className="bg-muted px-1 rounded">/help</code>:</p>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead className="bg-muted"><tr><th className="p-3 text-left">Comando</th><th className="p-3 text-left">Descricao</th><th className="p-3 text-left">Uso</th></tr></thead>
          <tbody>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/agent</td><td className="p-3">Selecionar ou listar agentes</td><td className="p-3 font-mono text-xs">/agent [name|create|edit|swap]</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/chat</td><td className="p-3">Carregar sessao ou iniciar nova</td><td className="p-3 font-mono text-xs">/chat [save|load|new [prompt]]</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/clear</td><td className="p-3">Limpar historico da conversa</td><td className="p-3 font-mono text-xs">/clear</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/code</td><td className="p-3">Code intelligence (LSP)</td><td className="p-3 font-mono text-xs">/code [init|status|logs|overview|summary]</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/compact</td><td className="p-3">Compactar historico para liberar contexto</td><td className="p-3 font-mono text-xs">/compact</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/context</td><td className="p-3">Gerenciar arquivos de contexto ou ver uso de tokens</td><td className="p-3 font-mono text-xs">/context [add|remove|clear]</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/feedback</td><td className="p-3">Enviar feedback ou reportar problemas</td><td className="p-3 font-mono text-xs">/feedback</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/guide</td><td className="p-3">Ajuda sobre features do Kiro via agente guia</td><td className="p-3 font-mono text-xs">/guide [pergunta]</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/help</td><td className="p-3">Mostrar comandos disponiveis</td><td className="p-3 font-mono text-xs">/help</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/hooks</td><td className="p-3">Ver hooks configurados</td><td className="p-3 font-mono text-xs">/hooks</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/knowledge</td><td className="p-3">Gerenciar knowledge base</td><td className="p-3 font-mono text-xs">/knowledge [show|add|remove|update|clear|cancel]</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/mcp</td><td className="p-3">Ver MCP servers configurados</td><td className="p-3 font-mono text-xs">/mcp</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/model</td><td className="p-3">Trocar ou listar modelos</td><td className="p-3 font-mono text-xs">/model [model-name]</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/paste</td><td className="p-3">Colar imagem do clipboard</td><td className="p-3 font-mono text-xs">/paste</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/plan</td><td className="p-3">Mudar para agente de planejamento</td><td className="p-3 font-mono text-xs">/plan [prompt]</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/prompts</td><td className="p-3">Selecionar ou listar prompts salvos</td><td className="p-3 font-mono text-xs">/prompts [nome]</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/quit</td><td className="p-3">Sair do aplicativo</td><td className="p-3 font-mono text-xs">/quit</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/reply</td><td className="p-3">Abrir editor com ultima resposta para compor reply</td><td className="p-3 font-mono text-xs">/reply</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/tools</td><td className="p-3">Ver ferramentas e gerenciar trust</td><td className="p-3 font-mono text-xs">/tools [trust-all|trust|untrust|reset]</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/usage</td><td className="p-3">Ver informacoes de billing e uso</td><td className="p-3 font-mono text-xs">/usage</td></tr>
                      <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/effort</td><td className="p-3">Definir nivel de thinking para a sessao</td><td className="p-3 font-mono text-xs">/effort [low|medium|high]</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/changelog</td><td className="p-3">Mostrar release notes recentes</td><td className="p-3 font-mono text-xs">/changelog</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/rewind</td><td className="p-3">Rebobinar para turno anterior (fork nova sessao)</td><td className="p-3 font-mono text-xs">/rewind</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/session-id</td><td className="p-3">Imprimir ID da sessao atual</td><td className="p-3 font-mono text-xs">/session-id</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/settings</td><td className="p-3">Configurar tema, terminal, keybindings</td><td className="p-3 font-mono text-xs">/settings</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/tui</td><td className="p-3">Novidades da interface TUI</td><td className="p-3 font-mono text-xs">/tui</td></tr>
</tbody>
        </table>
      </div>

      <h2>Comandos TUI-only (nao aparecem no /help)</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead className="bg-muted"><tr><th className="p-3 text-left">Comando</th><th className="p-3 text-left">Descricao</th></tr></thead>
          <tbody>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/copy</td><td className="p-3">Copiar ultima resposta para clipboard</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/editor</td><td className="p-3">Abrir $EDITOR para compor prompt</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/exit</td><td className="p-3">Alias para /quit</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/spawn</td><td className="p-3">Criar nova sessao de sub-agente com tarefa</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/theme</td><td className="p-3">Selecionar tema do terminal</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">/transcript</td><td className="p-3">Abrir transcricao no $PAGER</td></tr>
          </tbody>
        </table>
      </div>

      <h2>/plan — Agente de Planejamento</h2>
      <p>Alterna para o agente especializado em planejamento. Atalho: <code className="bg-muted px-1 rounded">Shift+Tab</code></p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`> /plan
Switched to the Kiro [plan] agent.
Transform any idea into fully working code.
What do you want to build today?

[plan] > I want to add authentication

[plan] asks structured questions:
[1]: What auth method?
  a. Email/Password
  b. OAuth
  c. Magic Links
[2]: What framework?
  a. React + Node
  b. Next.js
  c. Other

> 1=a, 2=c, I use Rust with Axum

[plan] researches, creates implementation plan,
then asks approval before switching to execution.`}</pre>
      <p className="mt-3">O agente /plan e <strong>read-only</strong>: nao pode modificar arquivos, apenas explorar o codigo e planejar.</p>

      <h2>/code — Code Intelligence</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`/code init        # Inicializa LSP (detecta linguagens, inicia servers)
/code init -f     # Forca re-inicializacao
/code status      # Status dos language servers
/code logs        # Ver erros dos LSPs
/code overview    # Visao geral do codebase
/code summary     # Gerar documentacao automatica (AGENTS.md, README)`}</pre>
      <p className="mt-3">Sem /code init, apenas tree-sitter funciona (18 linguagens). Com /code init, ativa LSP para: find references, go to definition, rename, diagnostics, hover.</p>

      <h2>/tools — Gerenciar trust</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`/tools              # Lista ferramentas disponiveis
/tools trust-all    # Confia em todas (sem confirmacao)
/tools trust grep   # Confia em ferramenta especifica
/tools untrust grep # Remove trust
/tools reset        # Reseta todas para pedir confirmacao`}</pre>

      <h2>/usage — Billing</h2>
      <p>Mostra consumo de creditos e limites da conta.</p>

      
      <h2>/effort — Controle de pensamento</h2>
      <p>Define quanto o modelo pensa antes de responder. Afeta precisao, velocidade e custo.</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`/effort          # Mostra nivel atual ou abre seletor
/effort low      # Pensamento minimo (rapido, barato)
/effort medium   # Equilibrio (padrao)
/effort high     # Pensamento maximo (lento, preciso, caro)`}</pre>
      <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg my-4">
        <p className="text-sm"><strong>Impacto real:</strong> Com effort high, o modelo gasta mais tokens raciocinando internamente antes de gerar a resposta. Ideal para debugging complexo ou decisoes de arquitetura. Com effort low, respostas vem rapido mas podem ser menos elaboradas. Persiste apenas na sessao atual.</p>
      </div>

      <h2>/rewind — Voltar no tempo</h2>
      <p>Rebobina a conversa para um turno anterior, criando fork (nova sessao a partir daquele ponto). A sessao original fica intacta.</p>


      <h2>/usage — Billing e creditos</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`/usage

Estimated Usage | resets on 2026-07-01 | KIRO PRO+
Credits (0.00 of 2000 covered in plan)
████████████████████████████████████████ 0%

Overages: Disabled

To manage your plan: https://app.kiro.dev/account/usage
Tip: to see context window usage, run /context`}</pre>

      <h2>/context — Uso de tokens e arquivos</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`/context
# Mostra uso atual da janela de contexto (tokens usados/total)

/context add ./src/auth.ts ./src/db.ts
# Adiciona arquivos ao contexto da sessao

/context add --force ./arquivo-grande.ts
# Forca adicao mesmo se grande

/context remove ./src/auth.ts
# Remove do contexto

/context clear
# Limpa todo contexto adicionado`}</pre>

      <h2>/model — Trocar modelo</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`/model
# Abre seletor interativo de modelos

/model claude-opus-4.6
# Troca direto para modelo especifico

/model auto
# Volta para selecao automatica`}</pre>

      <h2>/knowledge — Knowledge base</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`/knowledge show
# Lista todas as KBs indexadas

/knowledge add meu-projeto ./src
# Indexa diretorio

/knowledge add docs ./README.md
# Indexa arquivo

/knowledge remove meu-projeto
# Remove KB

/knowledge update ./src
# Re-indexa conteudo atualizado

/knowledge clear
# Remove todas as KBs

/knowledge cancel
# Cancela indexacao em andamento`}</pre>

      <h2>/agent — Trocar agente</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`/agent
# Lista agentes disponiveis

/agent rust-dev
# Troca para agente especifico

/agent swap rust-dev
# Alias para trocar

/agent create meu-agente
# Cria novo agente via IA

/agent edit meu-agente
# Edita config no $EDITOR`}</pre>

      <h2>/compact — Compactar contexto</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`/compact
# Resume mensagens antigas em sumario
# Libera espaco na janela de contexto
# Mantem informacoes-chave e decisoes
# Mensagens recentes ficam intactas`}</pre>

      <h2>/hooks — Ver hooks ativos</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`/hooks
# Mostra hooks configurados no agente atual:
# agentSpawn: git status
# postToolUse (fs_write): npx eslint --fix
# stop: echo done`}</pre>

      <h2>/mcp — MCP servers</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`/mcp
# Lista servers e status

/mcp list
@git (mcp-server-git)
  Status: Initialized
  Tools: git_status, git_commit, git_log

@github (mcp-server-github)
  Status: Needs authentication
  OAuth URL: https://github.com/login/oauth/...

/mcp add
# Menu interativo para adicionar server

/mcp remove
# Menu para remover server`}</pre>

      <h2>/chat — Sessoes</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`/chat
# Lista sessoes anteriores para escolher

/chat save backup.json
# Exporta sessao para arquivo

/chat save --force backup.json
# Sobrescreve arquivo existente

/chat load backup.json
# Importa sessao de arquivo (.json ou .zip)

/chat new
# Nova conversa (sessao anterior preservada)

/chat new "explique async em Rust"
# Nova conversa com prompt inicial`}</pre>

      <h2>/changelog — Release notes</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`/changelog
# Mostra notas de versao recentes do Kiro`}</pre>

      <h2>/session-id</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`/session-id
f2946a26-3735-4b08-8d05-c928010302d5`}</pre>

      <h2>/spawn — Sub-agente</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`/spawn analise todos os endpoints sem tratamento de erro
# Cria nova sessao de sub-agente com a tarefa
# Roda em paralelo, visivel com Ctrl+G`}</pre>

      <h2>/paste — Imagem</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`/paste
# Cola imagem do clipboard no chat
# O modelo analisa a imagem visualmente`}</pre>

      <h2>/guide — Ajuda sobre Kiro</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`/guide como funciona o sistema de specs?
# Muda para agente guia que responde sobre features do Kiro
# Usa documentacao interna para respostas precisas`}</pre>

      <h2>/prompts — Prompts salvos</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`/prompts
# Lista prompts disponiveis

/prompts meu-prompt
# Executa prompt salvo`}</pre>

      <h2>Settings que mudam comportamento do chat</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead className="bg-muted"><tr><th className="p-3 text-left">Setting</th><th className="p-3 text-left">O que faz</th><th className="p-3 text-left">Default</th></tr></thead>
          <tbody>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">chat.enableThinking</td><td className="p-3">Ativa modo thinking (modelo "pensa" antes de responder, mais preciso mas mais lento)</td><td className="p-3">-</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">chat.enableKnowledge</td><td className="p-3">Ativa knowledge bases e busca semantica</td><td className="p-3">true</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">chat.enableCodeIntelligence</td><td className="p-3">Ativa code intelligence com LSP</td><td className="p-3">-</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">chat.enableSubagent</td><td className="p-3">Ativa sub-agentes em paralelo</td><td className="p-3">-</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">chat.enableTodoList</td><td className="p-3">Ativa criacao automatica de task lists</td><td className="p-3">-</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">chat.enableNotifications</td><td className="p-3">Notificacoes desktop quando tarefa longa termina</td><td className="p-3">-</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">chat.disableAutoCompaction</td><td className="p-3">Desativa compactacao automatica (contexto cheio = erro)</td><td className="p-3">false</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">chat.autoExpandToolOutput</td><td className="p-3">Sempre mostra output completo das ferramentas</td><td className="p-3">false</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">chat.greeting.enabled</td><td className="p-3">Mostra mensagem de boas-vindas ao iniciar</td><td className="p-3">true</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">chat.defaultModel</td><td className="p-3">Modelo padrao para novas sessoes</td><td className="p-3">auto</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">chat.defaultAgent</td><td className="p-3">Agente padrao para novas sessoes</td><td className="p-3">kiro_default</td></tr>
          </tbody>
        </table>
      </div>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Ativar thinking (mais preciso, consome mais creditos)
kiro-cli settings chat.enableThinking true

# Desativar compactacao auto
kiro-cli settings chat.disableAutoCompaction true

# Mudar modelo padrao
kiro-cli settings chat.defaultModel claude-opus-4.6`}</pre>

      <h2>Atalhos de teclado no chat</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead className="bg-muted"><tr><th className="p-3 text-left">Tecla</th><th className="p-3 text-left">Acao</th></tr></thead>
          <tbody>
            <tr className="border-t border-border"><td className="p-3 font-mono">Ctrl+R</td><td className="p-3">Buscar no historico (case-insensitive)</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono">Ctrl+C</td><td className="p-3">Cancelar operacao ou sair</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono">Ctrl+G</td><td className="p-3">Ver sub-agentes em execucao</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono">Shift+Tab</td><td className="p-3">Toggle entre Plan agent e agente anterior</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono">Up/Down</td><td className="p-3">Navegar historico de mensagens</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
