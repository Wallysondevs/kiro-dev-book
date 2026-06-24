export default function CLIBasico() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>CLI Básico</h1>
      <p className="text-lg text-muted-foreground mb-6">Referência completa dos comandos do Kiro CLI.</p>

      <h2>Comandos Principais</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead className="bg-muted"><tr><th className="p-3 text-left">Comando</th><th className="p-3 text-left">Descrição</th></tr></thead>
          <tbody>
            {[
              ["kiro-cli chat", "Inicia chat interativo no diretório atual"],
              ["kiro-cli auth", "Autenticação (login/logout)"],
              ["kiro-cli whoami", "Mostra usuário e modelo atual"],
              ["kiro-cli --version", "Versão instalada"],
              ["kiro-cli --help", "Ajuda geral"],
            ].map(([cmd, desc], i) => (
              <tr key={i} className="border-t border-border"><td className="p-3 font-mono text-primary">{cmd}</td><td className="p-3">{desc}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Opções do Chat</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">
{`# Iniciar com modelo específico
kiro-cli chat --model claude-sonnet-4

# Continuar sessão anterior
kiro-cli chat --resume

# Modo não-interativo (pipe)
echo "explique este erro" | kiro-cli chat --stdin

# Com diretório específico
kiro-cli chat --cwd /path/to/project`}
      </pre>

      <h2>Variáveis de Ambiente</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">
{`# Autenticação
ANTHROPIC_API_KEY=sk-ant-...      # API key direta
AWS_PROFILE=default               # Para Bedrock

# Configuração
KIRO_MODEL=claude-opus-4          # Modelo padrão
KIRO_MAX_TOKENS=8192              # Max tokens de resposta
KIRO_THEME=dark                   # Tema da TUI`}
      </pre>

      <h2>Estrutura de Projeto</h2>
      <p>O Kiro cria uma pasta <code className="bg-muted px-1 rounded">.kiro/</code> no seu projeto:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">
{`.kiro/
├── steering.md         # Regras de comportamento
├── specs/              # Specs do projeto
│   ├── feature-x.md
│   └── bug-fix-y.md
├── hooks/              # Agent hooks
│   ├── pre-commit.sh
│   └── post-build.sh
└── context/            # Contexto persistente`}
      </pre>
    </div>
  );
}
