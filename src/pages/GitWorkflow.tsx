export default function GitWorkflow() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Git Workflow</h1>
      <p className="text-lg text-muted-foreground mb-6">Como o Kiro trabalha com Git de forma segura.</p>
      <h2>Regras de Seguranca</h2>
      <ul className="list-disc list-inside space-y-1 my-4 ml-4">
        <li>Nunca faz push direto para main/master sem pedir</li>
        <li>Usa -u flag para setup de tracking em novas branches</li>
        <li>Prefere staging de arquivos especificos (nao git add .)</li>
        <li>Detecta e alerta sobre arquivos com secrets</li>
        <li>Novos commits em vez de --amend por padrao</li>
        <li>Operacoes destrutivas (force push, reset --hard) requerem confirmacao</li>
      </ul>
      <h2>Fluxo Tipico</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# O Kiro faz automaticamente:\n1. Cria branch feature/nome-da-feature\n2. Faz commits incrementais\n3. Cria PR via gh/glab CLI\n4. Titulo conciso (<70 chars)\n5. Descricao com resumo + o que testou`}</pre>
    </div>
  );
}
