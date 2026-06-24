export default function Specs() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Sistema de Specs</h1>
      <p className="text-lg text-muted-foreground mb-6">Specs transformam ideias vagas em planos de implementacao estruturados.</p>
      <h2>O que sao Specs</h2>
      <p>Specs sao documentos Markdown em <code className="bg-muted px-1 rounded">.kiro/specs/</code> que definem o que sera construido antes de escrever codigo. Cada spec tem 3 fases:</p>
      <ol className="list-decimal list-inside space-y-2 my-4 ml-4">
        <li><strong>Requisitos</strong> - O QUE precisa ser feito (user stories, criterios de aceitacao)</li>
        <li><strong>Design</strong> - COMO sera implementado (arquitetura, fluxos, decisoes tecnicas)</li>
        <li><strong>Tasks</strong> - Lista ordenada de tarefas para executar</li>
      </ol>
      <h2>Criando uma Spec</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# No chat do Kiro:\n> crie uma spec para autenticacao JWT\n\n# Ou via comando:\n/spec create autenticacao-jwt\n\n# O Kiro gera:\n# .kiro/specs/autenticacao-jwt.md`}</pre>
      <h2>Estrutura de uma Spec</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Feature: Autenticacao JWT\n\n## Requisitos\n- [ ] Usuario pode fazer login com email/senha\n- [ ] Token JWT expira em 24h\n- [ ] Refresh token com rotacao\n- [ ] Rotas protegidas retornam 401 sem token\n\n## Design\n### Fluxo de Auth\n1. POST /auth/login -> valida credenciais -> gera JWT + refresh\n2. Middleware verifica Authorization header\n3. POST /auth/refresh -> novo JWT com refresh valido\n\n### Stack\n- jsonwebtoken para JWT\n- bcrypt para hash de senha\n- Redis para blacklist de tokens\n\n## Tasks\n- [ ] Instalar dependencias\n- [ ] Criar modelo User com hash de senha\n- [ ] Implementar POST /auth/login\n- [ ] Criar middleware de verificacao\n- [ ] Implementar refresh token\n- [ ] Escrever testes`}</pre>
      <h2>Executando uma Spec</h2>
      <p>Apos criar a spec, o Kiro executa task por task:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`> execute a spec autenticacao-jwt\n\n# Kiro vai:\n# 1. Ler a spec\n# 2. Executar cada task em ordem\n# 3. Verificar build/testes apos cada task\n# 4. Marcar tasks como concluidas`}</pre>
    </div>
  );
}
