export default function Modelos() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Modelos Disponíveis</h1>
      <p className="text-lg text-muted-foreground mb-6">O Kiro suporta múltiplos modelos de IA.</p>
      <h2>Modelos Suportados</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead className="bg-muted"><tr><th className="p-3 text-left">Modelo</th><th className="p-3 text-left">Uso Ideal</th><th className="p-3 text-left">Contexto</th></tr></thead>
          <tbody>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">claude-opus-4</td><td className="p-3">Tarefas complexas, arquitetura, debugging</td><td className="p-3">200K</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">claude-sonnet-4</td><td className="p-3">Desenvolvimento geral, features</td><td className="p-3">200K</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">claude-haiku-3.5</td><td className="p-3">Tarefas rápidas, edições simples</td><td className="p-3">200K</td></tr>
          </tbody>
        </table>
      </div>
      <h2>Trocar Modelo</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Via comando slash\n/model claude-sonnet-4\n\n# Via CLI\nkiro-cli chat --model claude-haiku-3.5\n\n# Via variavel de ambiente\nexport KIRO_MODEL=claude-opus-4`}</pre>
    </div>
  );
}
