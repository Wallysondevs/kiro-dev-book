export default function Configuracao() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Configuracao</h1>
      <p className="text-lg text-muted-foreground mb-6">Todas as formas de configurar o Kiro — do ambiente global ate configuracoes por projeto.</p>

      <h2>Hierarquia de configuracao</h2>
      <p>O Kiro resolve configuracoes nesta ordem (posterior sobrepoe anterior):</p>
      <ol className="list-decimal list-inside space-y-2 my-4 ml-4">
        <li><strong>Defaults internos</strong> — modelo Sonnet, tema auto, regiao us-east-1</li>
        <li><strong>Variaveis de ambiente</strong> — KIRO_MODEL, AWS_REGION, etc</li>
        <li><strong>.kiro/steering.md do projeto</strong> — regras especificas do projeto</li>
        <li><strong>Flags da CLI</strong> — --model, --cwd (maior prioridade)</li>
      </ol>

      <h2>Variaveis de ambiente completas</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead className="bg-muted"><tr><th className="p-3 text-left">Variavel</th><th className="p-3 text-left">Descricao</th><th className="p-3 text-left">Default</th></tr></thead>
          <tbody>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">ANTHROPIC_API_KEY</td><td className="p-3">API key da Anthropic</td><td className="p-3">-</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">KIRO_MODEL</td><td className="p-3">Modelo padrao</td><td className="p-3">claude-sonnet-4</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">AWS_PROFILE</td><td className="p-3">Perfil AWS</td><td className="p-3">default</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-mono text-primary">AWS_REGION</td><td className="p-3">Regiao AWS</td><td className="p-3">us-east-1</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Estrutura completa .kiro/</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`projeto/
└── .kiro/
    ├── steering.md          # Regras de comportamento
    │                        # (estilo, testes, git, arquitetura)
    │
    ├── specs/               # Documentos de planejamento
    │   ├── auth-jwt.md      #   requisitos + design + tasks
    │   └── cache-system.md
    │
    ├── hooks/               # Scripts automaticos
    │   ├── post-file-write.sh  # Roda apos cada arquivo escrito
    │   ├── pre-shell.sh        # Valida antes de executar comando
    │   └── on-error.sh         # Reage a erros
    │
    └── context/             # Notas persistentes
        └── decisions.md     # Decisoes de arquitetura`}</pre>

      <h2>Boas praticas</h2>
      <ul className="list-disc list-inside space-y-2 my-4 ml-4">
        <li>Commite .kiro/ no git (exceto context/ se tiver dados sensiveis)</li>
        <li>Mantenha steering.md atualizado com as praticas da equipe</li>
        <li>Use specs para qualquer feature que leve mais de 1 hora</li>
        <li>Hooks devem ser rapidos (idealmente abaixo de 5 segundos)</li>
      </ul>
    </div>
  );
}
