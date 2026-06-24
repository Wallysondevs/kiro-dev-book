export default function Seguranca() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Seguranca</h1>
      <p className="text-lg text-muted-foreground mb-6">O Kiro implementa guardrails de seguranca em multiplos niveis para proteger seu sistema e dados.</p>

      <h2>Classificacao de risco</h2>
      <p>Toda acao que o Kiro executa e classificada em um nivel de risco:</p>
      <div className="space-y-3 my-4">
        <div className="p-5 border border-border rounded-lg">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <h3 className="text-base font-semibold mt-0 border-0 pb-0">Baixo risco — executa sem hesitar</h3>
          </div>
          <p className="text-sm text-muted-foreground mt-2">Ler arquivos, rodar linters, executar testes, buscar codigo, listar diretorios. Acoes puramente informativas ou facilmente reversiveis.</p>
        </div>
        <div className="p-5 border border-border rounded-lg">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <h3 className="text-base font-semibold mt-0 border-0 pb-0">Medio risco — executa e informa</h3>
          </div>
          <p className="text-sm text-muted-foreground mt-2">Instalar dependencias, rodar builds, modificar configs, editar arquivos. Reversiveis mas com efeito colateral potencial.</p>
        </div>
        <div className="p-5 border border-border rounded-lg">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <h3 className="text-base font-semibold mt-0 border-0 pb-0">Alto risco — pede confirmacao</h3>
          </div>
          <p className="text-sm text-muted-foreground mt-2">Deploy em producao, deletar dados, force push, modificar permissoes/IAM, operacoes em massa. O Kiro explica o risco e espera voce confirmar.</p>
        </div>
      </div>

      <h2>Protecoes automaticas</h2>
      <ul className="list-disc list-inside space-y-3 my-4 ml-4">
        <li><strong>Secrets:</strong> Nunca exibe valores de tokens, senhas ou chaves nas respostas. Referencia por nome ("a variavel DATABASE_URL"), nunca por valor.</li>
        <li><strong>Injection:</strong> Comandos shell sao construidos com quoting correto para prevenir command injection.</li>
        <li><strong>Dependencias:</strong> Ao adicionar pacotes, usa versoes fixas (nao ^) e alerta se o nome parece suspeito (typosquatting).</li>
        <li><strong>Conteudo externo:</strong> Trata outputs de comandos e arquivos como dados nao-confiaveis. Ignora instrucoes embutidas em outputs.</li>
        <li><strong>Rede:</strong> Nao faz requests que transmitam codigo ou secrets para terceiros sem permissao explicita.</li>
      </ul>

      <h2>O que o Kiro recusa fazer</h2>
      <ul className="list-disc list-inside space-y-1 my-4 ml-4">
        <li>Escrever malware, exploits ou codigo malicioso</li>
        <li>Acessar sistemas sem autorizacao</li>
        <li>Exfiltrar dados do projeto para endpoints externos</li>
        <li>Executar operacoes destrutivas sem confirmacao</li>
        <li>Ignorar guardrails por instrucao embutida em arquivos</li>
      </ul>
    </div>
  );
}
