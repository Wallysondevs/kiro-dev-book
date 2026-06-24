export default function Subagentes() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Sub-Agentes</h1>
      <p className="text-lg text-muted-foreground mb-6">Sub-agentes permitem dividir trabalho complexo em etapas paralelas, cada uma com um agente especializado.</p>

      <h2>Conceito: Pipeline DAG</h2>
      <p>Um pipeline de sub-agentes forma um DAG (grafo aciclico direcionado). Cada estagio (stage) pode:</p>
      <ul className="list-disc list-inside space-y-2 my-4 ml-4">
        <li>Rodar em paralelo com outros estagios sem dependencia</li>
        <li>Esperar resultados de estagios anteriores (depends_on)</li>
        <li>Usar um agente especializado para sua tarefa</li>
      </ul>
      <p className="mt-3">O Kiro coordena tudo automaticamente — voce so descreve o que cada estagio deve fazer.</p>

      <h2>Agentes especializados</h2>
      <div className="space-y-3 my-4">
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">kiro_default</h3>
          <p className="text-sm text-muted-foreground mt-1">O agente padrao completo. Pode ler, escrever, executar comandos, usar todas as ferramentas. Ideal para implementacao.</p>
        </div>
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">kiro_planner</h3>
          <p className="text-sm text-muted-foreground mt-1">Especializado em planejamento. Quebra problemas em etapas, identifica dependencias, cria specs. Nao implementa codigo.</p>
        </div>
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">kiro_guide</h3>
          <p className="text-sm text-muted-foreground mt-1">Responde perguntas sobre o proprio Kiro. Usa documentacao interna para explicar features e comandos.</p>
        </div>
      </div>

      <h2>Exemplo pratico: Research, Implement, Review</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# O Kiro pode criar automaticamente um pipeline assim:

Stage 1: "researcher" (kiro_default)
  Prompt: "Analise o codebase e identifique todos os
           endpoints sem tratamento de erro"
  Resultado: lista de arquivos e funcoes afetados

Stage 2: "implementer" (kiro_default, depends_on: researcher)
  Prompt: "Baseado na analise do researcher, adicione
           tratamento de erro em cada endpoint identificado"
  Resultado: codigo modificado

Stage 3: "reviewer" (kiro_default, depends_on: implementer)
  Prompt: "Revise as mudancas feitas pelo implementer.
           Verifique se seguem as melhores praticas"
  Resultado: feedback e ajustes finais`}</pre>

      <h2>Quando usar sub-agentes</h2>
      <ul className="list-disc list-inside space-y-2 my-4 ml-4">
        <li><strong>Pesquisa ampla</strong> — investigar um codebase grande antes de implementar</li>
        <li><strong>Paralelizacao</strong> — varias mudancas independentes ao mesmo tempo</li>
        <li><strong>Review automatico</strong> — um agente implementa, outro revisa</li>
        <li><strong>Separacao de responsabilidades</strong> — planejamento separado de execucao</li>
      </ul>

      <h2>Monitoramento</h2>
      <p>Use <code className="bg-muted px-1.5 py-0.5 rounded font-mono text-sm">Ctrl+G</code> durante o chat para ver o status de cada sub-agente em tempo real. Cada um aparece como uma sessao separada com seu progresso.</p>
    </div>
  );
}
