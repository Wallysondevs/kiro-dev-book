export default function AgentHooks() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Agent Hooks</h1>
      <p className="text-lg text-muted-foreground mb-6">Hooks permitem que você automatize ações em resposta a eventos do agente, criando um workflow personalizado e consistente.</p>

      <h2>Conceito</h2>
      <p>Agent Hooks funcionam como git hooks, mas para ações do Kiro. São scripts que executam automaticamente em momentos específicos do ciclo de trabalho do agente:</p>
      <ul className="list-disc list-inside space-y-2 my-4 ml-4">
        <li><strong>Antes de uma ação</strong> (pre-) — pode validar, transformar ou até impedir a ação</li>
        <li><strong>Depois de uma ação</strong> (post-) — pode complementar, verificar ou notificar</li>
        <li><strong>Em eventos</strong> (on-) — reage a situações como erros</li>
      </ul>

      <h2>Tipos de Hooks disponíveis</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead className="bg-muted"><tr><th className="p-3 text-left">Hook</th><th className="p-3 text-left">Trigger</th><th className="p-3 text-left">Variáveis disponíveis</th></tr></thead>
          <tbody>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">pre-file-write</td><td className="p-3">Antes de criar/editar arquivo</td><td className="p-3 font-mono text-xs">$FILE, $CONTENT</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">post-file-write</td><td className="p-3">Depois de criar/editar arquivo</td><td className="p-3 font-mono text-xs">$FILE</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">pre-shell</td><td className="p-3">Antes de executar comando</td><td className="p-3 font-mono text-xs">$COMMAND</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">post-shell</td><td className="p-3">Depois de executar comando</td><td className="p-3 font-mono text-xs">$COMMAND, $EXIT_CODE</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">on-error</td><td className="p-3">Quando ocorre erro no build/teste</td><td className="p-3 font-mono text-xs">$ERROR, $FILE</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Configuração</h2>
      <p>Hooks ficam em <code className="bg-muted px-1.5 py-0.5 rounded font-mono text-sm">.kiro/hooks/</code> e devem ser executáveis:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`.kiro/hooks/
├── post-file-write.sh    # chmod +x
├── pre-shell.sh
└── on-error.sh`}</pre>

      <h2>Exemplos práticos detalhados</h2>

      <h3>1. Auto-format após cada arquivo escrito</h3>
      <p>Garante que todo código escrito pelo Kiro respeita o estilo do projeto:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`#!/bin/bash
# .kiro/hooks/post-file-write.sh
# Roda Prettier automaticamente em arquivos JS/TS

case "$FILE" in
  *.ts|*.tsx|*.js|*.jsx|*.json|*.css)
    npx prettier --write "$FILE" 2>/dev/null
    ;;
  *.py)
    black "$FILE" 2>/dev/null
    ;;
  *.go)
    gofmt -w "$FILE" 2>/dev/null
    ;;
esac`}</pre>

      <h3>2. Validar comandos perigosos</h3>
      <p>Impede que comandos destrutivos sejam executados acidentalmente:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`#!/bin/bash
# .kiro/hooks/pre-shell.sh
# Bloqueia comandos perigosos em produção

DANGEROUS_PATTERNS=(
  "rm -rf /"
  "DROP DATABASE"
  "--force"
  "format c:"
)

for pattern in "\${DANGEROUS_PATTERNS[@]}"; do
  if echo "$COMMAND" | grep -qi "$pattern"; then
    echo "BLOCKED: Comando potencialmente destrutivo detectado"
    echo "Comando: $COMMAND"
    echo "Pattern: $pattern"
    exit 1  # Exit code != 0 impede a execução
  fi
done`}</pre>

      <h3>3. Notificar em caso de erro</h3>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`#!/bin/bash
# .kiro/hooks/on-error.sh
# Loga erros para análise posterior

echo "[$(date)] ERROR in $FILE: $ERROR" >> .kiro/error.log`}</pre>

      <h2>Como funciona internamente</h2>
      <ol className="list-decimal list-inside space-y-2 my-4 ml-4">
        <li>Antes de executar uma ação, o Kiro verifica se existe um hook pre-* correspondente</li>
        <li>Se existe, executa o script e verifica o exit code</li>
        <li>Se exit code = 0, a ação prossegue normalmente</li>
        <li>Se exit code ≠ 0, a ação é cancelada e o motivo é reportado</li>
        <li>Após a ação, executa hooks post-* (estes não podem cancelar)</li>
      </ol>

      <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg my-4">
        <p className="text-sm"><strong>Importante:</strong> Hooks rodam no mesmo ambiente do seu terminal. Eles têm acesso a todas as ferramentas instaladas no sistema. Mantenha-os rápidos (&lt; 5 segundos) para não travar o fluxo do agente.</p>
      </div>
    </div>
  );
}
