export default function Steering() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Steering Rules</h1>
      <p className="text-lg text-muted-foreground mb-6">Steering rules sao instrucoes persistentes que definem como o Kiro deve se comportar no seu projeto. Pense nelas como um "manual do funcionario" para o agente.</p>

      <h2>Por que usar Steering</h2>
      <p>Sem steering, voce repete as mesmas instrucoes toda sessao:</p>
      <ul className="list-disc list-inside space-y-1 my-4 ml-4">
        <li>"Use TypeScript strict" — toda vez que pede codigo</li>
        <li>"Commits em ingles" — toda vez que faz commit</li>
        <li>"Testes com Vitest" — toda vez que pede testes</li>
      </ul>
      <p className="mt-3">Com steering, voce define uma vez e o Kiro segue sempre.</p>

      <h2>Criando o arquivo</h2>
      <p>Crie <code className="bg-muted px-1.5 py-0.5 rounded font-mono text-sm">.kiro/steering.md</code> na raiz do projeto:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Steering Rules

## Linguagem e Estilo
- TypeScript com strict mode em todo codigo novo
- Funcoes puras sempre que possivel (sem side effects)
- Nomes de variaveis descritivos (nao abreviar)
- Maximo 30 linhas por funcao
- Preferir composicao sobre heranca

## Testes
- Framework: Vitest
- Cada modulo novo precisa de testes
- Testes de integracao para endpoints
- Coverage minimo: 80%
- Mocks apenas para dependencias externas

## Git
- Commits seguem Conventional Commits (feat:, fix:, chore:, docs:)
- Mensagens em ingles
- Uma mudanca logica por commit
- Nunca commitar .env ou secrets
- Branch naming: feature/nome, fix/nome, chore/nome

## Arquitetura
- Clean Architecture: domain > application > infrastructure
- Injecao de dependencia via construtor
- Repositorios como interfaces no domain
- Use cases retornam Either (sucesso ou erro tipado)
- DTOs para fronteira entre camadas

## Preferencias
- Zod para validacao (nao Joi)
- Prisma para ORM (nao TypeORM)
- pnpm como package manager
- Biome para lint/format (nao ESLint+Prettier)`}</pre>

      <h2>Categorias recomendadas</h2>
      <div className="space-y-3 my-4">
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Estilo de codigo</h3>
          <p className="text-sm text-muted-foreground mt-1">Linguagem, naming conventions, tamanho de funcoes, patterns preferidos</p>
        </div>
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Testes</h3>
          <p className="text-sm text-muted-foreground mt-1">Framework, coverage esperado, tipos de teste, estrategia de mocking</p>
        </div>
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Git e versionamento</h3>
          <p className="text-sm text-muted-foreground mt-1">Formato de commit, branching strategy, regras de PR</p>
        </div>
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Arquitetura</h3>
          <p className="text-sm text-muted-foreground mt-1">Patterns (DDD, Clean, Hexagonal), separacao de camadas, principios</p>
        </div>
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Ferramentas e bibliotecas</h3>
          <p className="text-sm text-muted-foreground mt-1">O que usar e o que evitar, package manager, bundler</p>
        </div>
      </div>

      <h2>Boas praticas</h2>
      <ul className="list-disc list-inside space-y-2 my-4 ml-4">
        <li><strong>Seja especifico</strong> — "use Zod" e melhor que "use validacao"</li>
        <li><strong>Explique o por que</strong> — ajuda o Kiro a tomar decisoes em casos ambiguos</li>
        <li><strong>Commite no git</strong> — toda equipe compartilha as mesmas regras</li>
        <li><strong>Atualize conforme evolui</strong> — o steering deve refletir as praticas atuais</li>
        <li><strong>Nao seja rigido demais</strong> — regras muito restritivas podem atrapalhar em casos especiais</li>
      </ul>
    </div>
  );
}
