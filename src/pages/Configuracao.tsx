export default function Configuracao() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Configuracao</h1>
      <p className="text-lg text-muted-foreground mb-6">Personalize o Kiro para seu ambiente.</p>
      <h2>Arquivo .kiro/steering.md</h2>
      <p>Regras de comportamento por projeto (veja Steering Rules).</p>
      <h2>Variaveis de Ambiente</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`ANTHROPIC_API_KEY    # API key Anthropic\nKIRO_MODEL           # Modelo padrao (claude-opus-4)\nKIRO_MAX_TOKENS      # Max tokens de resposta\nAWS_PROFILE          # Perfil AWS para integracao\nAWS_REGION           # Regiao AWS padrao`}</pre>
      <h2>Estrutura .kiro/</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`.kiro/\n├── steering.md     # Regras do agente\n├── specs/          # Documentos de spec\n├── hooks/          # Agent hooks\n└── context/        # Contexto persistente`}</pre>
    </div>
  );
}
