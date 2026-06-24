export default function Subagentes() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Sub-Agentes</h1>
      <p className="text-lg text-muted-foreground mb-6">Delegue trabalho para agentes especializados em pipelines paralelos.</p>
      <h2>Como Funciona</h2>
      <p>Sub-agentes sao sessoes independentes que rodam em paralelo, cada uma com seu proprio contexto e especialidade.</p>
      <h2>Tipos de Agentes</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead className="bg-muted"><tr><th className="p-3 text-left">Agente</th><th className="p-3 text-left">Funcao</th></tr></thead>
          <tbody>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">kiro_default</td><td className="p-3">Agente padrao para tarefas gerais</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">kiro_planner</td><td className="p-3">Especializado em planejamento e specs</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">kiro_guide</td><td className="p-3">Responde sobre features do Kiro</td></tr>
          </tbody>
        </table>
      </div>
      <h2>Pipeline DAG</h2>
      <p>Sub-agentes formam um DAG (grafo aciclico direcionado) onde cada estagio pode depender de outros:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Exemplo: Research -> Implement -> Review\n\nStage 1: researcher (paralelo)\n  - Analisa codebase existente\n  - Identifica padroes\n\nStage 2: implementer (depende de stage 1)\n  - Escreve o codigo baseado na pesquisa\n\nStage 3: reviewer (depende de stage 2)\n  - Review do codigo gerado`}</pre>
      <h2>Monitoramento</h2>
      <p>Use <code className="bg-muted px-1 rounded">Ctrl+G</code> no chat para ver sessoes de sub-agentes em andamento.</p>
    </div>
  );
}
