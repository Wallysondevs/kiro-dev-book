export default function GitWorkflow() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Git Workflow</h1>
      <p className="text-lg text-muted-foreground mb-6">O Kiro interage com Git de forma segura e previsivel. Entenda as regras, protecoes e como ele cria commits e PRs.</p>

      <h2>Principios de seguranca Git</h2>
      <p>O Kiro segue regras rigidas para evitar danos ao repositorio:</p>
      <div className="space-y-3 my-4">
        <div className="p-4 border-l-4 border-red-500 bg-red-500/5 rounded-r-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Nunca faz sem pedir</h3>
          <ul className="text-sm space-y-1 mt-2">
            <li>git push --force</li>
            <li>git reset --hard</li>
            <li>git clean -f</li>
            <li>git branch -D (delete forcado)</li>
            <li>Push direto em main/master</li>
          </ul>
        </div>
        <div className="p-4 border-l-4 border-green-500 bg-green-500/5 rounded-r-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Faz automaticamente</h3>
          <ul className="text-sm space-y-1 mt-2">
            <li>git add (arquivos especificos, nunca git add .)</li>
            <li>git commit com mensagem descritiva</li>
            <li>git push -u origin branch (com tracking)</li>
            <li>Criar branch antes de mudancas</li>
          </ul>
        </div>
      </div>

      <h2>Fluxo tipico de trabalho</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# 1. Voce pede uma feature
> implemente paginacao na API

# 2. Kiro cria branch (se nao estiver em uma)
git checkout -b feature/api-pagination

# 3. Implementa com commits incrementais
git add src/routes/users.ts
git commit -m "feat: add pagination params to /users"

git add src/middleware/pagination.ts
git commit -m "feat: create pagination middleware"

# 4. Push com tracking
git push -u origin feature/api-pagination

# 5. Cria PR (se gh/glab estiver disponivel)
gh pr create --title "feat: API pagination" --body "..."`}</pre>

      <h2>Deteccao de secrets</h2>
      <p>Antes de commitar, o Kiro verifica se ha arquivos sensiveis:</p>
      <ul className="list-disc list-inside space-y-1 my-4 ml-4">
        <li>.env, .env.local, .env.production</li>
        <li>Arquivos com "secret", "key", "token", "password" no nome</li>
        <li>*.pem, *.key (chaves privadas)</li>
        <li>credentials.json, service-account.json</li>
      </ul>
      <p className="mt-3">Se detectar, alerta e nao commita sem confirmacao explicita.</p>

      <h2>Formato de commits</h2>
      <p>O Kiro segue Conventional Commits por padrao (configuravel via steering):</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`feat: nova funcionalidade
fix: correcao de bug
chore: manutencao (deps, configs)
docs: documentacao
test: testes
refactor: refatoracao sem mudar comportamento
style: formatacao (sem mudanca de logica)`}</pre>
    </div>
  );
}
