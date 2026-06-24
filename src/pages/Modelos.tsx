export default function Modelos() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Modelos Disponiveis</h1>
      <p className="text-lg text-muted-foreground mb-6">O Kiro suporta multiplos modelos com caracteristicas diferentes. Escolher o modelo certo impacta qualidade, velocidade e custo.</p>

      <h2>Comparativo detalhado</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead className="bg-muted"><tr><th className="p-3 text-left">Modelo</th><th className="p-3 text-left">Forca</th><th className="p-3 text-left">Velocidade</th><th className="p-3 text-left">Custo</th><th className="p-3 text-left">Contexto</th></tr></thead>
          <tbody>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">claude-opus-4</td><td className="p-3">Raciocinio profundo, arquitetura</td><td className="p-3">Lento</td><td className="p-3">Alto</td><td className="p-3">200K</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">claude-sonnet-4</td><td className="p-3">Equilibrio geral</td><td className="p-3">Medio</td><td className="p-3">Medio</td><td className="p-3">200K</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">claude-haiku-3.5</td><td className="p-3">Tarefas rapidas, boilerplate</td><td className="p-3">Rapido</td><td className="p-3">Baixo</td><td className="p-3">200K</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Quando usar cada modelo</h2>

      <h3>Opus — pensamento profundo</h3>
      <p>Use quando a tarefa requer raciocinio complexo em multiplas etapas:</p>
      <ul className="list-disc list-inside space-y-1 my-4 ml-4">
        <li>Decisoes de arquitetura que afetam todo o sistema</li>
        <li>Debugging de problemas que ninguem conseguiu resolver</li>
        <li>Refactoring grande com muitas dependencias</li>
        <li>Analise de seguranca e code review critico</li>
        <li>Migracoes entre frameworks/linguagens</li>
      </ul>

      <h3>Sonnet — trabalho diario</h3>
      <p>O modelo padrao para 90% do desenvolvimento:</p>
      <ul className="list-disc list-inside space-y-1 my-4 ml-4">
        <li>Implementar features novas</li>
        <li>Escrever testes</li>
        <li>Corrigir bugs comuns</li>
        <li>Documentacao e refactoring pequeno</li>
        <li>Integracoes com APIs externas</li>
      </ul>

      <h3>Haiku — tarefas mecanicas</h3>
      <p>Use para coisas que nao precisam de pensamento profundo:</p>
      <ul className="list-disc list-inside space-y-1 my-4 ml-4">
        <li>Renomear variaveis em massa</li>
        <li>Gerar boilerplate repetitivo</li>
        <li>Formatar ou converter dados</li>
        <li>Perguntas rapidas sobre sintaxe</li>
        <li>Scripts utilitarios simples</li>
      </ul>

      <h2>Trocar modelo</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# No meio do chat (troca na hora)
/model claude-opus-4

# Via CLI ao iniciar
kiro-cli chat --model claude-sonnet-4

# Como padrao permanente
export KIRO_MODEL=claude-sonnet-4`}</pre>

      <h2>Estrategia de custo</h2>
      <p>Uma abordagem eficiente e usar modelos diferentes para fases diferentes:</p>
      <ol className="list-decimal list-inside space-y-2 my-4 ml-4">
        <li><strong>Planejamento (Opus)</strong> — gerar spec com arquitetura e decisoes</li>
        <li><strong>Implementacao (Sonnet)</strong> — executar as tasks da spec</li>
        <li><strong>Ajustes finais (Haiku)</strong> — correcoes de estilo, typos, formatacao</li>
      </ol>
    </div>
  );
}
