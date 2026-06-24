export default function Tasks() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Tasks e Workflow</h1>
      <p className="text-lg text-muted-foreground mb-6">A terceira fase: executar o plano task por task.</p>
      <h2>Como Funciona</h2>
      <p>O Kiro cria task lists automaticamente e as executa em ordem, verificando cada passo:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`[x] #1. Instalar dependencias\n[x] #2. Criar modelo User\n[ ] #3. Implementar rota de login  (NEXT)\n[ ] #4. Criar middleware de auth\n[ ] #5. Escrever testes`}</pre>
      <h2>Verificacao Automatica</h2>
      <p>Apos cada task, o Kiro roda build e testes para garantir que nada quebrou antes de prosseguir.</p>
    </div>
  );
}
