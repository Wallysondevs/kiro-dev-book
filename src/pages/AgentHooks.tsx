export default function AgentHooks() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Agent Hooks</h1>
      <p className="text-lg text-muted-foreground mb-6">Hooks automatizam acoes que rodam em resposta a eventos do agente.</p>
      <h2>O que sao Agent Hooks</h2>
      <p>Agent Hooks sao scripts ou comandos que executam automaticamente quando o Kiro realiza certas acoes. Funcionam como git hooks mas para o agente de IA.</p>
      <h2>Tipos de Hooks</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead className="bg-muted"><tr><th className="p-3 text-left">Hook</th><th className="p-3 text-left">Quando Executa</th></tr></thead>
          <tbody>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">pre-file-write</td><td className="p-3">Antes de escrever um arquivo</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">post-file-write</td><td className="p-3">Depois de escrever um arquivo</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">pre-shell</td><td className="p-3">Antes de executar um comando</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">post-shell</td><td className="p-3">Depois de executar um comando</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">on-error</td><td className="p-3">Quando ocorre um erro</td></tr>
          </tbody>
        </table>
      </div>
      <h2>Configuracao</h2>
      <p>Hooks ficam em <code className="bg-muted px-1 rounded">.kiro/hooks/</code>:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# .kiro/hooks/post-file-write.sh\n#!/bin/bash\n# Rodar linter automaticamente apos cada arquivo escrito\nif [[ "\" == *.ts ]]; then\n  npx eslint --fix "\"\nfi`}</pre>
      <h2>Exemplos Praticos</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Auto-format apos escrever\n# .kiro/hooks/post-file-write.sh\nprettier --write "\" 2>/dev/null\n\n# Rodar testes apos mudanca\n# .kiro/hooks/post-shell.sh\nif [[ "\" == *"git commit"* ]]; then\n  npm test\nfi`}</pre>
    </div>
  );
}
