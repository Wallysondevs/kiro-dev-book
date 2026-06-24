export default function Contexto() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Contexto & Memória</h1>
      <p className="text-lg text-muted-foreground mb-6">Como o Kiro gerencia contexto, knowledge bases e memória persistente.</p>

      <h2>Knowledge Bases</h2>
      <p>O Kiro pode indexar conteúdo para busca semântica:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">
{`# Indexar um diretório
/knowledge add --name "meu-projeto" --path ./src

# Indexar arquivo específico
/knowledge add --name "docs" --path ./README.md

# Buscar no knowledge base
/knowledge search "como funciona a autenticação"

# Listar knowledge bases
/knowledge show`}
      </pre>

      <h2>Contexto Automático</h2>
      <p>O Kiro detecta automaticamente:</p>
      <ul className="list-disc list-inside space-y-1 my-4 ml-4">
        <li>Sistema operacional e diretório atual</li>
        <li>Linguagem do projeto (package.json, Cargo.toml, etc)</li>
        <li>Git status e branch atual</li>
        <li>Configurações de build e teste</li>
        <li>Arquivos .kiro/ do projeto</li>
      </ul>

      <h2>Context Entries</h2>
      <p>Você pode adicionar contexto manualmente que persiste na sessão:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">
{`# Adicionar arquivo ao contexto
/context add ./src/auth/middleware.ts

# Adicionar nota
/context add --note "O deploy é feito via GitHub Actions"

# Ver todo o contexto ativo
/context show

# Remover item do contexto
/context remove [id]`}
      </pre>

      <h2>Memória entre Sessões</h2>
      <p>O Kiro mantém informações importantes entre sessões via:</p>
      <ul className="list-disc list-inside space-y-1 my-4 ml-4">
        <li><strong>Task lists</strong> — progresso de tarefas em andamento</li>
        <li><strong>Knowledge bases</strong> — conteúdo indexado persiste</li>
        <li><strong>Steering rules</strong> — preferências do projeto</li>
        <li><strong>Chat save/load</strong> — sessões completas salvas</li>
      </ul>
    </div>
  );
}
