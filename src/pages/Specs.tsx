export default function Specs() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Sistema de Specs</h1>
      <p className="text-lg text-muted-foreground mb-6">Specs são o coração do planejamento no Kiro. Entenda como usá-las para transformar ideias vagas em implementações precisas.</p>

      <h2>O problema que Specs resolvem</h2>
      <p>Sem planejamento, o desenvolvimento com IA costuma seguir este padrão:</p>
      <ol className="list-decimal list-inside space-y-2 my-4 ml-4">
        <li>Você pede algo vago: "adiciona autenticação"</li>
        <li>A IA implementa de uma forma que não é o que você queria</li>
        <li>Você pede correções, uma por uma</li>
        <li>O resultado final é um Frankenstein de patches</li>
      </ol>
      <p className="mt-3">Specs resolvem isso forçando clareza <em>antes</em> de escrever código. É o equivalente a um arquiteto fazer a planta antes de construir a casa.</p>

      <h2>As 3 fases de uma Spec</h2>
      <p>Toda spec passa por três fases sequenciais. Cada fase precisa ser aprovada antes de avançar:</p>

      <div className="space-y-4 my-6">
        <div className="p-5 border border-border rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">FASE 1</span>
            <h3 className="text-lg font-semibold mt-0 border-0 pb-0">Requisitos — O QUE</h3>
          </div>
          <p className="text-sm text-muted-foreground">Define o comportamento esperado sem se preocupar com implementação. Usa linguagem de negócio, não técnica.</p>
          <pre className="bg-muted p-3 rounded-md font-mono text-xs mt-3 overflow-x-auto">{`## Requisitos
### Funcional
- Usuário pode se cadastrar com email e senha
- Usuário pode fazer login e receber um token
- Token expira após 24 horas
- Usuário pode renovar o token antes de expirar
- Rotas protegidas retornam 401 sem token válido

### Não-funcional
- Senhas nunca armazenadas em texto plano
- Rate limit: máx 5 tentativas de login por minuto por IP
- Tempo de resposta do login < 200ms`}</pre>
        </div>

        <div className="p-5 border border-border rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded">FASE 2</span>
            <h3 className="text-lg font-semibold mt-0 border-0 pb-0">Design — COMO</h3>
          </div>
          <p className="text-sm text-muted-foreground">Decisões técnicas: arquitetura, bibliotecas, fluxos de dados, interfaces. Aqui se discute trade-offs.</p>
          <pre className="bg-muted p-3 rounded-md font-mono text-xs mt-3 overflow-x-auto">{`## Design

### Fluxo de autenticação
POST /auth/register → valida email → hash senha (bcrypt 12 rounds) → salva user → 201
POST /auth/login → valida credenciais → gera JWT (RS256, 24h) + refresh token (7d) → 200
POST /auth/refresh → valida refresh → rotaciona refresh → novo JWT → 200
DELETE /auth/logout → blacklist refresh token → 204

### Stack escolhida
- jsonwebtoken (JWT com RS256 para permitir verificação sem secret)
- bcrypt (12 rounds — balanceio entre segurança e performance)
- Redis (blacklist de tokens + rate limiting com EXPIRE)

### Decisão: JWT vs Session
Escolhi JWT porque:
- O sistema é distribuído (múltiplos servidores)
- Não quero dependência de sessão server-side para cada request
- Trade-off aceito: tokens não são revogáveis instantaneamente

### Middleware
authMiddleware(req, res, next):
  1. Extrai token do header Authorization: Bearer <token>
  2. Verifica assinatura e expiração
  3. Verifica se não está na blacklist (Redis)
  4. Anexa user ao req.user
  5. Chama next()`}</pre>
        </div>

        <div className="p-5 border border-border rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">FASE 3</span>
            <h3 className="text-lg font-semibold mt-0 border-0 pb-0">Tasks — EXECUTAR</h3>
          </div>
          <p className="text-sm text-muted-foreground">Lista ordenada de tarefas atômicas. Cada task é independentemente verificável.</p>
          <pre className="bg-muted p-3 rounded-md font-mono text-xs mt-3 overflow-x-auto">{`## Tasks
- [ ] Instalar dependências (jsonwebtoken, bcrypt, ioredis)
- [ ] Gerar par de chaves RSA para JWT (scripts/generate-keys.sh)
- [ ] Criar schema do User no Prisma com campo passwordHash
- [ ] Implementar POST /auth/register com validação de email
- [ ] Implementar POST /auth/login com rate limiting
- [ ] Criar authMiddleware com verificação JWT + blacklist
- [ ] Implementar POST /auth/refresh com rotação de token
- [ ] Implementar DELETE /auth/logout (blacklist no Redis)
- [ ] Proteger rotas existentes com authMiddleware
- [ ] Escrever testes de integração para todo o fluxo
- [ ] Atualizar documentação da API (OpenAPI)`}</pre>
        </div>
      </div>

      <h2>Usando Specs na prática</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# 1. Pedir ao Kiro para criar a spec
> crie uma spec para sistema de autenticação JWT

# 2. O Kiro gera o arquivo .kiro/specs/auth-jwt.md
#    e te mostra os requisitos para aprovação

# 3. Você revisa e ajusta os requisitos
> adicione rate limiting e 2FA como requisito futuro

# 4. Avança para design
> aprove os requisitos e gere o design

# 5. Revisa o design
> prefiro bcrypt em vez de argon2, e Redis em vez de memória

# 6. Avança para tasks
> aprove o design e gere as tasks

# 7. Executa
> execute a spec auth-jwt

# O Kiro executa task por task, verificando build/testes entre cada uma`}</pre>

      <h2>Quando usar Specs vs. pedir direto</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead className="bg-muted"><tr><th className="p-3 text-left">Cenário</th><th className="p-3 text-left">Abordagem</th></tr></thead>
          <tbody>
            <tr className="border-t border-border"><td className="p-3">Corrigir um bug simples</td><td className="p-3">Pedir direto</td></tr>
            <tr className="border-t border-border"><td className="p-3">Renomear variáveis, ajustar estilos</td><td className="p-3">Pedir direto</td></tr>
            <tr className="border-t border-border"><td className="p-3">Feature nova com 3+ arquivos</td><td className="p-3 font-medium text-primary">Spec</td></tr>
            <tr className="border-t border-border"><td className="p-3">Refactoring que afeta múltiplas partes</td><td className="p-3 font-medium text-primary">Spec</td></tr>
            <tr className="border-t border-border"><td className="p-3">Integração com serviço externo</td><td className="p-3 font-medium text-primary">Spec</td></tr>
            <tr className="border-t border-border"><td className="p-3">Migração de tecnologia</td><td className="p-3 font-medium text-primary">Spec (obrigatório)</td></tr>
          </tbody>
        </table>
      </div>

      <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg my-4">
        <p className="text-sm"><strong>Regra de ouro:</strong> Se a tarefa leva mais de 10 minutos para fazer manualmente, merece uma spec. O tempo investido no planejamento se paga em menos retrabalho.</p>
      </div>
    </div>
  );
}
