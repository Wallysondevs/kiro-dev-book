export default function Contexto() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Contexto e Memoria</h1>
      <p className="text-lg text-muted-foreground mb-6">O Kiro gerencia contexto em multiplas camadas — desde o automatico ate knowledge bases persistentes.</p>

      <h2>Camadas de contexto</h2>
      <p>O Kiro monta o contexto da conversa combinando varias fontes, em ordem de prioridade:</p>
      <ol className="list-decimal list-inside space-y-3 my-4 ml-4">
        <li><strong>Contexto do sistema</strong> — SO, diretorio atual, hora (automatico, sempre presente)</li>
        <li><strong>Steering rules</strong> — .kiro/steering.md do projeto (carregado no inicio)</li>
        <li><strong>Contexto da sessao</strong> — historico da conversa, arquivos lidos, resultados de comandos</li>
        <li><strong>Context entries</strong> — arquivos ou notas que voce adiciona manualmente via /context</li>
        <li><strong>Knowledge bases</strong> — conteudo indexado para busca semantica sob demanda</li>
      </ol>

      <h2>Contexto automatico</h2>
      <p>Sem voce fazer nada, o Kiro ja sabe:</p>
      <ul className="list-disc list-inside space-y-1 my-4 ml-4">
        <li>Qual SO voce usa (Linux, macOS, Windows)</li>
        <li>Em qual diretorio esta</li>
        <li>Qual linguagem/framework o projeto usa (detecta package.json, Cargo.toml, go.mod, etc)</li>
        <li>Se existe .kiro/ com configuracoes</li>
        <li>Status do git (branch, mudancas pendentes)</li>
      </ul>

      <h2>Knowledge Bases — memoria persistente</h2>
      <p>Knowledge bases permitem indexar conteudo que persiste entre sessoes. O Kiro usa busca semantica (entende o significado, nao apenas palavras-chave).</p>

      <h3>Indexar conteudo</h3>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Indexar um diretorio inteiro (recursivo)
/knowledge add --name "meu-projeto" --path ./src

# Indexar um arquivo especifico
/knowledge add --name "api-docs" --path ./docs/api.md

# Indexar texto direto
/knowledge add --name "decisoes" --value "Usamos PostgreSQL porque..."

# Ver todas as KBs
/knowledge show`}</pre>

      <h3>Buscar conteudo</h3>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Busca semantica (encontra por significado)
/knowledge search "como funciona a autenticacao"

# Busca em KB especifica
/knowledge search --context-id abc123 "tratamento de erros"

# Com mais resultados
/knowledge search --limit 20 "configuracao do banco"`}</pre>

      <h3>Quando usar Knowledge Bases</h3>
      <ul className="list-disc list-inside space-y-2 my-4 ml-4">
        <li><strong>Documentacao interna</strong> — indexe docs que o Kiro deve consultar</li>
        <li><strong>Decisoes de arquitetura</strong> — ADRs que explicam o "por que" do codigo</li>
        <li><strong>Projetos grandes</strong> — quando o codigo nao cabe na janela de contexto</li>
        <li><strong>Referencia cruzada</strong> — indexar um projeto e perguntar sobre ele em outro</li>
      </ul>

      <h2>Context entries manuais</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Adicionar arquivo que o Kiro deve ter em mente
/context add ./src/config/database.ts

# Adicionar nota de contexto
/context add --note "O deploy e feito via ArgoCD no cluster k8s"

# Ver tudo que esta no contexto
/context show

# Remover quando nao for mais relevante
/context remove 3`}</pre>

      <h2>Compactacao inteligente</h2>
      <p>Quando o contexto atinge o limite (200K tokens), a compactacao:</p>
      <ul className="list-disc list-inside space-y-1 my-4 ml-4">
        <li>Resume mensagens antigas em poucas frases</li>
        <li>Preserva decisoes importantes e restricoes</li>
        <li>Mantem arquivos recentemente lidos/editados</li>
        <li>Descarta outputs de comandos ja processados</li>
      </ul>
      <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg my-4">
        <p className="text-sm"><strong>Voce pode forcar compactacao:</strong> Use <code className="bg-background px-1 rounded">/compact</code> quando sentir que a conversa esta pesada ou o Kiro esta lento.</p>
      </div>
    </div>
  );
}
