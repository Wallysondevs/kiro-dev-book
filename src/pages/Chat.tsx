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
