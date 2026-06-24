export default function Tasks() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Tasks e Workflow</h1>
      <p className="text-lg text-muted-foreground mb-6">A terceira fase: quebrar o design em tarefas atomicas e executa-las em ordem, com verificacao entre cada passo.</p>

      <h2>O que e uma boa Task</h2>
      <p>Cada task deve ser:</p>
      <ul className="list-disc list-inside space-y-2 my-4 ml-4">
        <li><strong>Atomica</strong> — faz uma coisa so. Se falhar, pode ser refeita sem afetar outras.</li>
        <li><strong>Verificavel</strong> — apos executar, da pra confirmar que funcionou (build passa, teste passa).</li>
        <li><strong>Ordenada</strong> — cada task depende apenas das anteriores, nao das posteriores.</li>
        <li><strong>Estimavel</strong> — voce consegue prever quanto tempo/esforco leva.</li>
      </ul>

      <h2>Ciclo de execucao</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`Para cada task na lista:
  1. Le a descricao da task
  2. Implementa (cria/edita arquivos, instala deps)
  3. Roda verificacao (build + testes relevantes)
  4. Se passou: marca como concluida, avanca
  5. Se falhou: tenta corrigir (max 2 tentativas)
  6. Se nao conseguir: para e explica o problema`}</pre>

      <h2>Acompanhamento em tempo real</h2>
      <p>Durante a execucao, o Kiro mostra o progresso:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`[x] 1. Instalar dependencias (jsonwebtoken, bcrypt)
[x] 2. Criar schema User no Prisma
[x] 3. Implementar POST /auth/register
[ ] 4. Implementar POST /auth/login   <-- executando
[ ] 5. Criar middleware de autenticacao
[ ] 6. Proteger rotas existentes
[ ] 7. Testes de integracao`}</pre>

      <h2>Intervindo durante execucao</h2>
      <ul className="list-disc list-inside space-y-2 my-4 ml-4">
        <li><strong>Cancelar:</strong> Ctrl+C para parar na task atual</li>
        <li><strong>Pular:</strong> "pule esta task" e o Kiro avanca sem marcar como feita</li>
        <li><strong>Modificar:</strong> "mude a task 5 para usar Passport em vez de middleware custom"</li>
        <li><strong>Adicionar:</strong> "adicione uma task para documentacao da API"</li>
      </ul>
    </div>
  );
}
