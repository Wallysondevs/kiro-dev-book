export default function Modelos() {
  const models = [
    { name: "auto", credits: "1.00x", desc: "Modelos escolhidos por tarefa para uso otimo e qualidade consistente", def: true },
    { name: "claude-opus-4.8", credits: "2.20x", desc: "Preview experimental do Opus 4.8 com 1M de contexto" },
    { name: "claude-opus-4.7", credits: "2.20x", desc: "Preview experimental do Opus 4.7 com 1M de contexto" },
    { name: "claude-opus-4.6", credits: "2.20x", desc: "O modelo Claude Opus 4.6" },
    { name: "claude-sonnet-4.6", credits: "1.30x", desc: "Ultimo Sonnet com 1M de contexto" },
    { name: "claude-opus-4.5", credits: "2.20x", desc: "O modelo Claude Opus 4.5" },
    { name: "claude-sonnet-4.5", credits: "1.30x", desc: "O modelo Claude Sonnet 4.5" },
    { name: "claude-sonnet-4", credits: "1.30x", desc: "Raciocinio hibrido e codigo para uso regular" },
    { name: "claude-haiku-4.5", credits: "0.40x", desc: "O ultimo modelo Haiku" },
    { name: "deepseek-3.2", credits: "0.25x", desc: "Preview experimental do DeepSeek V3.2" },
    { name: "minimax-m2.5", credits: "0.25x", desc: "O modelo MiniMax M2.5" },
    { name: "minimax-m2.1", credits: "0.15x", desc: "Preview experimental do MiniMax M2.1" },
    { name: "glm-5", credits: "0.50x", desc: "O modelo GLM-5" },
    { name: "qwen3-coder-next", credits: "0.05x", desc: "Preview experimental do Qwen3 Coder Next" },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1>Modelos Disponiveis</h1>
      <p className="text-lg text-muted-foreground mb-6">Lista completa de modelos do Kiro com custos reais em creditos. Dados extraidos de <code className="bg-muted px-1 rounded">kiro-cli chat --list-models</code>.</p>

      <h2>Listar modelos</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`$ kiro-cli chat --list-models

Available models (* = default):

* auto                 1.00x credits      Models chosen by task
  claude-opus-4.8      2.20x credits      Experimental (1M context)
  claude-sonnet-4.6    1.30x credits      Latest Sonnet (1M context)
  claude-haiku-4.5     0.40x credits      Latest Haiku
  deepseek-3.2         0.25x credits      DeepSeek V3.2
  qwen3-coder-next     0.05x credits      Qwen3 Coder Next`}</pre>

      <h2>Todos os modelos</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead className="bg-muted"><tr><th className="p-3 text-left">Modelo</th><th className="p-3 text-left">Creditos</th><th className="p-3 text-left">Descricao</th></tr></thead>
          <tbody>
            {models.map((m, i) => (
              <tr key={i} className="border-t border-border">
                <td className="p-3 font-mono text-primary">{m.def ? "* " : ""}{m.name}</td>
                <td className="p-3 font-mono">{m.credits}</td>
                <td className="p-3">{m.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Modo "auto" (padrao)</h2>
      <p>O modo <code className="bg-muted px-1 rounded">auto</code> seleciona o modelo ideal automaticamente baseado na complexidade da tarefa. Tarefas simples usam modelos baratos, tarefas complexas usam Opus. Custo fixo de 1.00x por interacao.</p>

      <h2>Trocar modelo</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Ao iniciar chat
kiro-cli chat --model claude-opus-4.6

# No meio do chat (slash command)
/model claude-sonnet-4.6

# No agent JSON
{ "model": "claude-opus-4.6" }`}</pre>

      <h2>Estrategia de custo</h2>
      <div className="space-y-3 my-4">
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Economizar ao maximo</h3>
          <p className="text-sm text-muted-foreground mt-1">Use <code className="bg-muted px-1 rounded">qwen3-coder-next</code> (0.05x) ou <code className="bg-muted px-1 rounded">minimax-m2.1</code> (0.15x) para tarefas mecanicas: gerar boilerplate, renomear, formatar.</p>
        </div>
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Equilibrio diario</h3>
          <p className="text-sm text-muted-foreground mt-1">Use <code className="bg-muted px-1 rounded">auto</code> (1.00x) ou <code className="bg-muted px-1 rounded">claude-sonnet-4.6</code> (1.30x) para desenvolvimento geral.</p>
        </div>
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Qualidade maxima</h3>
          <p className="text-sm text-muted-foreground mt-1">Use <code className="bg-muted px-1 rounded">claude-opus-4.8</code> (2.20x) para arquitetura, debugging complexo, decisoes criticas. Tem 1M de contexto.</p>
        </div>
      </div>

      <h2>Modos do agente (--agent-engine)</h2>
      <p>O chat suporta engines diferentes:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Engine v2 (padrao)
kiro-cli chat --agent-engine v2

# Engine v1 (legado)
kiro-cli chat --agent-engine v1

# Engine KAS (com modos vibe/spec)
kiro-cli chat --agent-engine kas --mode vibe
kiro-cli chat --agent-engine kas --mode spec`}</pre>
      <ul className="list-disc list-inside space-y-1 my-4 ml-4">
        <li><strong>v2</strong> — engine padrao, completo</li>
        <li><strong>v1</strong> — engine legado</li>
        <li><strong>kas</strong> — engine alternativo com modo "vibe" (rapido) e "spec" (estruturado)</li>
      </ul>
    </div>
  );
}
