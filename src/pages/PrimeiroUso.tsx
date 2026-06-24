export default function PrimeiroUso() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Referencia Completa do CLI</h1>
      <p className="text-lg text-muted-foreground mb-6">Todos os comandos com suas saidas reais, opcoes e comportamentos.</p>

      <h2>kiro-cli chat — todas as opcoes</h2>
      <p>Saida real de <code className="bg-muted px-1 rounded">kiro-cli chat --help</code>:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`AI assistant in your terminal

Usage: kiro-cli chat [OPTIONS] [INPUT]

Arguments:
  [INPUT]  The first question to ask

Options:
  -r, --resume              Resume most recent conversation
      --resume-id <ID>      Resume specific conversation by session ID
      --resume-picker       Interactively select conversation to resume
      --agent <AGENT>       Context profile to use
      --model <MODEL>       Model to use
  -a, --trust-all-tools     Allow all tools without confirmation
      --trust-tools <LIST>  Trust only specific tools (comma-separated)
      --no-interactive      Run without user input (headless)
  -l, --list-sessions       List saved sessions for current directory
      --list-models         List available models and exit
  -f, --format <FORMAT>     Output format (plain|json|json-pretty)
  -d, --delete-session <ID> Delete saved session by ID
  -w, --wrap <WRAP>         Line wrapping (always|never|auto)
      --require-mcp-startup Require all MCP servers to start (exit 3 if fail)
      --tui                 Use new terminal UI
      --legacy-ui           Use legacy UI (alias: --classic)
      --agent-engine <ENG>  Engine: v2 (default), v1, or kas
      --mode <MODE>         KAS mode: vibe (default) or spec
  -v, --verbose             Increase log verbosity (repeatable)
  -h, --help                Print help`}</pre>

      <h2>kiro-cli translate</h2>
      <p>Converte linguagem natural em comandos shell:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`$ kiro-cli translate "find all python files modified today"
find . -name "*.py" -mtime 0

$ kiro-cli translate "compress the logs folder"
tar -czf logs.tar.gz logs/

$ kiro-cli translate "kill process on port 3000"
fuser -k 3000/tcp`}</pre>
      <p className="mt-3">Requer terminal interativo (TTY). Nao funciona via SSH pipe.</p>

      <h2>kiro-cli inline — completions no shell</h2>
      <p>Adiciona sugestoes de comandos inline enquanto voce digita no terminal (tipo GitHub Copilot para o shell).</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Verificar status
$ kiro-cli inline status
Inline is disabled

# Ativar (modifica shell config)
$ kiro-cli inline enable
Inline completions enabled for bash

# Desativar
$ kiro-cli inline disable

# Sem confirmacao (CI/scripts)
$ kiro-cli inline enable --no-confirm`}</pre>
      <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg my-4">
        <p className="text-sm"><strong>O que muda:</strong> Com inline ativo, ao digitar comandos no terminal o Kiro sugere completions em cinza. Pressione Tab para aceitar. Consome creditos por sugestao.</p>
      </div>

      <h2>kiro-cli integrations — integracoes do sistema</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Instalar todas integracoes
$ kiro-cli integrations install dotfiles

# Ver status das integracoes
$ kiro-cli integrations status dotfiles
bash pre post into .bashrc
bash pre post into .profile
zsh pre post into .zshrc       (not installed)
fish pre/post                  (not installed)

# Reinstalar
$ kiro-cli integrations reinstall dotfiles

# Desinstalar
$ kiro-cli integrations uninstall dotfiles`}</pre>
      <p className="mt-3">Integracoes disponiveis: <code className="bg-muted px-1 rounded">dotfiles</code>, <code className="bg-muted px-1 rounded">ssh</code>, <code className="bg-muted px-1 rounded">input-method</code>, <code className="bg-muted px-1 rounded">vscode</code>, <code className="bg-muted px-1 rounded">intellij-plugin</code>, <code className="bg-muted px-1 rounded">autostart-entry</code>, <code className="bg-muted px-1 rounded">gnome-shell-extension</code>, <code className="bg-muted px-1 rounded">kiro-command-router</code></p>

      <h2>kiro-cli doctor — diagnostico</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`$ kiro-cli doctor

Running checks...
bash ~/.bashrc integration check
bash ~/.profile integration check
sshd config: SSHD config is not set up correctly

  The /etc/ssh/sshd_config file needs:
    AcceptEnv Q_SET_PARENT
    AllowStreamLocalForwarding yes

Doctor found errors. Please fix them and try again.`}</pre>
      <p className="mt-3">O doctor tenta corrigir automaticamente o que puder (como adicionar source nos dotfiles). Problemas que requerem sudo sao apenas reportados.</p>

      <h2>kiro-cli mcp — Model Context Protocol</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Listar servers configurados
$ kiro-cli mcp list
default:
  kiro_default (empty)
workspace:
  kiro_help (empty)
  kiro_planner (empty)

# Adicionar server stdio
$ kiro-cli mcp add --name git --command mcp-server-git --args "--stdio"

# Adicionar server HTTP
$ kiro-cli mcp add --name api --url https://mcp.example.com/sse

# Adicionar com escopo
$ kiro-cli mcp add --name tools --command mcp-tools --scope workspace

# Adicionar em agente especifico
$ kiro-cli mcp add --name db --command mcp-db --agent rust-dev

# Remover
$ kiro-cli mcp remove --name git

# Status de um server
$ kiro-cli mcp status --name git`}</pre>

      <h2>kiro-cli init — shell dotfiles</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Gerar hooks para bash
kiro-cli init bash pre    # Script pre-command
kiro-cli init bash post   # Script post-command

# Shells suportados: bash, zsh, fish, nu
kiro-cli init zsh pre
kiro-cli init fish post
kiro-cli init nu pre`}</pre>

      <h2>kiro-cli theme</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Ver tema atual
$ kiro-cli theme
dark

# Mudar tema
$ kiro-cli theme light`}</pre>

      <h2>kiro-cli settings</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Ver valor de uma config
$ kiro-cli settings chat.enableKnowledge

# Setar valor (global)
$ kiro-cli settings chat.enableKnowledge true

# Setar valor (workspace)
$ kiro-cli settings --workspace knowledge.indexType Best

# Deletar config
$ kiro-cli settings -d chat.enableKnowledge

# Abrir arquivo de settings no editor
$ kiro-cli settings open

# Listar todas configs
$ kiro-cli settings list`}</pre>

      <h2>kiro-cli debug</h2>
      <p>Ferramentas avancadas de debug:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`kiro-cli debug logs            # Ver logs de debug
kiro-cli debug diagnostics     # Watch de diagnosticos
kiro-cli debug key-tester      # Testar captura de teclas
kiro-cli debug sample          # Samplear processo desktop
kiro-cli debug refresh-auth-token  # Renovar token manualmente`}</pre>
    </div>
  );
}
