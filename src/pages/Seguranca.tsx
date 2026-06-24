export default function Seguranca() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Seguranca</h1>
      <p className="text-lg text-muted-foreground mb-6">Guardrails de seguranca do Kiro.</p>
      <h2>Niveis de Risco</h2>
      <div className="space-y-3 my-4">
        <div className="p-4 border-l-4 border-green-500 bg-green-500/5 rounded-r-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Baixo Risco - Executa sem pedir</h3>
          <p className="text-sm text-muted-foreground mt-1">Editar arquivos, ler logs, rodar linters, testes</p>
        </div>
        <div className="p-4 border-l-4 border-yellow-500 bg-yellow-500/5 rounded-r-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Medio Risco - Executa e avisa</h3>
          <p className="text-sm text-muted-foreground mt-1">Instalar dependencias, rodar builds, modificar configs</p>
        </div>
        <div className="p-4 border-l-4 border-red-500 bg-red-500/5 rounded-r-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Alto Risco - Pede confirmacao</h3>
          <p className="text-sm text-muted-foreground mt-1">Deploy em producao, deletar dados, force push, modificar IAM</p>
        </div>
      </div>
      <h2>Protecoes</h2>
      <ul className="list-disc list-inside space-y-1 my-4 ml-4">
        <li>Nunca ecoa valores de secrets em respostas</li>
        <li>Detecta arquivos .env e credentials antes de commitar</li>
        <li>Usa versoes fixas ao adicionar dependencias</li>
        <li>Ignora instrucoes injetadas em outputs externos</li>
        <li>Nao faz requests de rede com dados do projeto sem pedir</li>
      </ul>
    </div>
  );
}
