export default function Ferramentas() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Ferramentas do Agente</h1>
      <p className="text-lg text-muted-foreground mb-6">O Kiro possui ferramentas integradas que usa automaticamente.</p>
      <h2>Ferramentas Disponíveis</h2>
      <div className="space-y-3 my-4">
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Leitura de Arquivos</h3>
          <p className="text-sm text-muted-foreground mt-1">Le arquivos, diretorios e imagens do projeto. Suporta leitura parcial (linhas especificas) e batch.</p>
        </div>
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Escrita de Arquivos</h3>
          <p className="text-sm text-muted-foreground mt-1">Cria e edita arquivos com operacoes create, strReplace e insert. Preserva formatacao.</p>
        </div>
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Shell / Terminal</h3>
          <p className="text-sm text-muted-foreground mt-1">Executa comandos no terminal. Usado para builds, testes, git, instalacao de dependencias.</p>
        </div>
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Busca de Codigo (Code Intelligence)</h3>
          <p className="text-sm text-muted-foreground mt-1">Busca semantica por simbolos, funcoes, classes. AST parsing e pattern matching.</p>
        </div>
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Grep / Busca Textual</h3>
          <p className="text-sm text-muted-foreground mt-1">Busca regex em arquivos. Modos: content, files_with_matches, count.</p>
        </div>
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Glob / Busca de Arquivos</h3>
          <p className="text-sm text-muted-foreground mt-1">Encontra arquivos por padrao. Ex: **/*.tsx, src/**/*.{ts,tsx}</p>
        </div>
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">AWS CLI</h3>
          <p className="text-sm text-muted-foreground mt-1">Chamadas diretas a servicos AWS (EC2, S3, Lambda, etc).</p>
        </div>
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Knowledge Base</h3>
          <p className="text-sm text-muted-foreground mt-1">Indexa e busca conteudo com busca semantica (MiniLLM) ou keyword (BM25).</p>
        </div>
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Sub-Agentes</h3>
          <p className="text-sm text-muted-foreground mt-1">Cria pipelines de agentes em paralelo para tarefas complexas.</p>
        </div>
      </div>
    </div>
  );
}
