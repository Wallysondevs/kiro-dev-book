export default function PrimeiroUso() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Todos os Comandos — Saidas Reais</h1>
      <p className="text-lg text-muted-foreground mb-6">Cada comando do Kiro CLI com sua saida real, opcoes e efeito.</p>

      <h2>kiro-cli whoami</h2>
      <p>Mostra usuario logado e metodo de autenticacao.</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`$ kiro-cli whoami
Authenticated with API key
Email: usuario@exemplo.com

$ kiro-cli whoami --format json-pretty
{
  "accountType": "ApiKey",
  "email": "usuario@exemplo.com"
}

# Formatos: plain (default), json, json-pretty`}</pre>

      <h2>kiro-cli login</h2>
      <p>Autenticacao interativa. 4 metodos disponiveis.</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`$ kiro-cli login
# Abre navegador com portal unificado (ambiente local)
# Ou mostra device code (ambiente remoto/SSH)

$ kiro-cli login --license pro --identity-provider https://org.awsapps.com/start --region us-east-1
# Identity Center corporativo

$ kiro-cli login --social google
# Login via conta Google

$ kiro-cli login --use-device-flow
# Forca device flow (mostra codigo para digitar em outro dispositivo)

Opcoes:
  --license pro|free         Tipo de licenca
  --identity-provider URL    URL do Identity Center
  --region REGION            Regiao AWS
  --social google|github     Provider social
  --use-device-flow          Forcar device flow`}</pre>

      <h2>kiro-cli logout</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`$ kiro-cli logout
Logged out successfully`}</pre>

      <h2>kiro-cli chat</h2>
      <p>Comando principal — inicia sessao de chat com IA.</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`$ kiro-cli chat
# Inicia chat interativo

$ kiro-cli chat "explique este codigo"
# Inicia e envia mensagem imediatamente

$ kiro-cli chat --resume
# Retoma ultima conversa deste diretorio

$ kiro-cli chat --resume-picker
# Seletor interativo de sessoes

$ kiro-cli chat --model claude-opus-4.6
# Inicia com modelo especifico

$ kiro-cli chat --agent rust-dev
# Inicia com agente customizado

$ kiro-cli chat --trust-all-tools "rode os testes"
# Headless: nao pede confirmacao

$ kiro-cli chat --no-interactive --trust-all-tools "liste arquivos .ts"
# Executa query e sai (para scripts/CI)

$ kiro-cli chat --list-sessions
Chat sessions for /path/to/project:
SessionId: f2946a26-... 2h ago | Auth implementation | 15 msgs
SessionId: 7bd2c90f-... 1d ago | DB refactor | 23 msgs

$ kiro-cli chat --delete-session f2946a26-3735-4b08-8d05-c928010302d5
Deleted chat session f2946a26...

$ kiro-cli chat --list-models
Available models (* = default):
* auto                 1.00x credits
  claude-opus-4.8      2.20x credits
  claude-sonnet-4.6    1.30x credits
  claude-haiku-4.5     0.40x credits
  deepseek-3.2         0.25x credits
  qwen3-coder-next     0.05x credits

$ kiro-cli chat --tui
# Interface TUI nova

$ kiro-cli chat --legacy-ui
# Interface legada (alias: --classic)

$ kiro-cli chat --agent-engine kas --mode spec
# Engine KAS em modo spec (estruturado)

Todas as opcoes:
  -r, --resume                Retomar mais recente
  --resume-id ID              Retomar por ID
  --resume-picker             Seletor interativo
  --agent AGENT               Agente a usar
  --model MODEL               Modelo
  -a, --trust-all-tools       Confia em tudo
  --trust-tools LISTA         Confia em lista (virgula)
  --no-interactive            Modo headless
  -l, --list-sessions         Listar sessoes
  --list-models               Listar modelos
  -d, --delete-session ID     Deletar sessao
  -w, --wrap always|never|auto
  --require-mcp-startup       Exige MCP ok (exit 3 se falhar)
  --tui                       UI nova
  --legacy-ui / --classic     UI antiga
  --agent-engine v2|v1|kas    Engine
  --mode vibe|spec            Modo KAS`}</pre>

      <h2>kiro-cli settings</h2>
      <p>Configuracoes persistentes. Global ou por workspace.</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`$ kiro-cli settings list --all
# Lista TODAS as configs disponiveis com descricao

$ kiro-cli settings chat.defaultModel
auto

$ kiro-cli settings chat.defaultModel claude-opus-4.6
# Define modelo padrao

$ kiro-cli settings chat.enableThinking true
# Ativa thinking (mais tokens de raciocinio interno)

$ kiro-cli settings --workspace knowledge.indexType Best
# Define por workspace (nao global)

$ kiro-cli settings --delete chat.defaultModel
# Remove config (volta ao default)

$ kiro-cli settings --delete "knowledge.*"
# Glob: remove todas configs de knowledge

$ kiro-cli settings open
# Abre ~/.kiro/settings/cli.json no $EDITOR

Armazenamento:
  Global:    ~/.kiro/settings/cli.json
  Workspace: .kiro/settings/cli.json (tem prioridade)`}</pre>

      <h2>kiro-cli agent</h2>
      <p>Gerenciar agentes customizados.</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`$ kiro-cli agent list
# Lista agentes disponiveis (local + global)

$ kiro-cli agent create --name meu-agente
# Cria config de agente

$ kiro-cli agent edit meu-agente
# Edita config no $EDITOR

$ kiro-cli agent validate --path .kiro/agents/meu-agente.json
# Valida JSON do agente

$ kiro-cli agent set-default rust-dev
# Define agente padrao para novos chats

$ kiro-cli agent migrate
# Migra profiles antigos para formato de agent

Localizacao:
  Local:  .kiro/agents/nome.json (prioridade)
  Global: ~/.kiro/agents/nome.json`}</pre>

      <h2>kiro-cli mcp</h2>
      <p>Model Context Protocol — servers de ferramentas externas.</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`$ kiro-cli mcp list
default:
  kiro_default (empty)
workspace:
  kiro_help (empty)
  kiro_planner (empty)

$ kiro-cli mcp add --name git --command mcp-server-git --args "--stdio"
# Adiciona server stdio

$ kiro-cli mcp add --name api --url https://mcp.example.com/sse
# Adiciona server HTTP

$ kiro-cli mcp add --name tools --scope workspace --command mcp-tools
# Escopo workspace (nao global)

$ kiro-cli mcp add --name db --agent rust-dev --command mcp-db
# Adiciona apenas para agente especifico

$ kiro-cli mcp remove --name git

$ kiro-cli mcp status --name git

Opcoes do add:
  --name NAME        Nome do server
  --command CMD      Comando (stdio)
  --url URL          Endpoint (HTTP)
  --args ARGS        Argumentos
  --scope default|workspace|global
  --agent AGENT      Agente especifico
  --env KEY=VAL      Variaveis de ambiente
  --timeout MS       Timeout em ms
  --disabled         Adiciona desabilitado
  --force            Sobrescreve existente`}</pre>

      <h2>kiro-cli translate</h2>
      <p>Converte linguagem natural em comando shell.</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`$ kiro-cli translate "find python files modified today"
find . -name "*.py" -mtime 0

$ kiro-cli translate "compress logs folder"
tar -czf logs.tar.gz logs/

$ kiro-cli translate "kill process on port 3000"
fuser -k 3000/tcp

# Requer TTY (terminal interativo)`}</pre>

      <h2>kiro-cli inline</h2>
      <p>Completions inline no shell (tipo Copilot para terminal).</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`$ kiro-cli inline status
Inline is disabled

$ kiro-cli inline enable
Inline completions enabled for bash
# Modifica shell config, sugere comandos em cinza enquanto digita
# Tab para aceitar sugestao
# Consome creditos por sugestao

$ kiro-cli inline enable --no-confirm
# Sem prompt de confirmacao

$ kiro-cli inline disable
Inline completions disabled`}</pre>

      <h2>kiro-cli doctor</h2>
      <p>Diagnostica e corrige problemas automaticamente.</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`$ kiro-cli doctor

Running checks...
✔ bash ~/.bashrc integration check
✔ bash ~/.profile integration check
✘ sshd config: SSHD config is not set up correctly

  The /etc/ssh/sshd_config file needs:
    AcceptEnv Q_SET_PARENT
    AllowStreamLocalForwarding yes

✘ Doctor found errors. Please fix them and try again.

# Tenta corrigir automaticamente o que puder
# Problemas que requerem sudo sao apenas reportados`}</pre>

      <h2>kiro-cli integrations</h2>
      <p>Gerenciar integracoes com shell, IDE, SSH.</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`$ kiro-cli integrations status dotfiles
✔ bash pre post into .bashrc
✔ bash pre post into .profile
✘ zsh pre post into .zshrc
✘ fish pre/post

$ kiro-cli integrations status ssh
Not installed

$ kiro-cli integrations install dotfiles
# Instala hooks no shell

$ kiro-cli integrations uninstall dotfiles
$ kiro-cli integrations reinstall dotfiles

Integracoes disponiveis:
  dotfiles, ssh, input-method, vscode,
  intellij-plugin, autostart-entry,
  gnome-shell-extension, kiro-command-router`}</pre>

      <h2>kiro-cli theme</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`$ kiro-cli theme
dark

$ kiro-cli theme light
# Muda para light`}</pre>

      <h2>kiro-cli update</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`$ kiro-cli update
# Atualiza Kiro para ultima versao

$ kiro-cli update -y
# Sem confirmacao

Opcoes:
  -y, --non-interactive       Sem confirmacao
  --relaunch-dashboard        Relanca dashboard apos update
  --rollout                   Usa canal rollout`}</pre>

      <h2>kiro-cli diagnostic</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`$ kiro-cli diagnostic
# Roda testes de diagnostico do sistema

$ kiro-cli diagnostic --format json
# Output em JSON

$ kiro-cli diagnostic --force
# Forca output limitado`}</pre>

      <h2>kiro-cli issue</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`$ kiro-cli issue "bug: completions nao funcionam no zsh"
# Cria issue no GitHub automaticamente

$ kiro-cli issue --force "descricao do problema"
# Forca criacao`}</pre>

      <h2>kiro-cli init</h2>
      <p>Gera dotfiles de integracao para shells.</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`$ kiro-cli init bash pre
# Gera script pre-command para bash

$ kiro-cli init bash post
# Gera script post-command para bash

# Shells suportados: bash, zsh, fish, nu
# Momentos: pre, post`}</pre>

      <h2>kiro-cli dashboard</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`$ kiro-cli dashboard
# Abre https://app.kiro.dev no navegador`}</pre>

      <h2>kiro-cli setup</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`$ kiro-cli setup
# Setup completo (dotfiles + input method)

$ kiro-cli setup --dotfiles
# So integracoes de shell

$ kiro-cli setup --no-confirm
# Sem prompts

$ kiro-cli setup --force
# Forca reinstalacao`}</pre>

      <h2>kiro-cli debug</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`$ kiro-cli debug logs
# Ver logs de debug

$ kiro-cli debug diagnostics
# Watch de diagnosticos em tempo real

$ kiro-cli debug key-tester
# Testar captura de teclas no terminal

$ kiro-cli debug refresh-auth-token
# Renovar token de auth manualmente

$ kiro-cli debug sample
# Samplear processo desktop

$ kiro-cli debug fix-permissions
# Corrigir permissoes dos shell configs`}</pre>

      <h2>kiro-cli acp</h2>
      <p>Agent Client Protocol — integracao programatica via JSON-RPC stdin/stdout.</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`$ kiro-cli acp
# Inicia agente ACP (espera JSON-RPC no stdin)
# Usado pelo TUI internamente
# Pode ser usado por integracao custom

# Protocolo: JSON-RPC 2.0
# Metodos: initialize, session/new, session/prompt, session/cancel
# Spec: ACP v2025-01-01 (agentclientprotocol.com)`}</pre>

      <h2>Variaveis de ambiente</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`KIRO_API_KEY=ksk_...           # Auth por API key (sem login interativo)
KIRO_LOG_LEVEL=debug           # Nivel de log (debug, info, warn, error)
KIRO_CHAT_LOG_FILE=/path.log   # Log customizado
KIRO_LOG_NO_COLOR=1            # Desativa cores no log`}</pre>
    </div>
  );
}
