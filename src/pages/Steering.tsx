export default function Steering() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Steering Rules</h1>
      <p className="text-lg text-muted-foreground mb-6">Personalize como o Kiro se comporta no seu projeto.</p>
      <h2>O que sao Steering Rules</h2>
      <p>Steering rules sao instrucoes em <code className="bg-muted px-1 rounded">.kiro/steering.md</code> que definem preferencias, convencoes e restricoes para o agente seguir.</p>
      <h2>Exemplo de steering.md</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Steering Rules\n\n## Estilo de Codigo\n- Use TypeScript strict mode\n- Prefira composicao sobre heranca\n- Funcoes puras quando possivel\n- Nomes de variaveis em camelCase\n- Componentes React como arrow functions\n\n## Testes\n- Use Vitest para unit tests\n- Cada feature precisa de teste\n- Coverage minimo de 80%\n\n## Git\n- Commits em ingles\n- Conventional commits (feat:, fix:, chore:)\n- Nunca force push em main\n\n## Arquitetura\n- Clean Architecture (domain > use-cases > infra)\n- Repositorios como interface\n- DTOs para comunicacao entre camadas`}</pre>
      <h2>Como Funciona</h2>
      <p>O Kiro le o steering.md no inicio de cada sessao e segue as regras automaticamente. Se voce pedir algo que contradiz uma regra, ele vai mencionar o conflito.</p>
      <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg my-4">
        <p className="text-sm">Dica: Steering rules sao por projeto. Cada repositorio pode ter regras diferentes em .kiro/steering.md</p>
      </div>
    </div>
  );
}
