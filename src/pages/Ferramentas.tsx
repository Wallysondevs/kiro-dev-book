export default function Ferramentas() {
  const tools = [
    {
      name: "Leitura de Arquivos (read)",
      desc: "Le arquivos de texto, diretorios e imagens. Suporta leitura parcial por linhas (offset + limit), leitura em batch de multiplos arquivos simultaneamente, e listagem recursiva de diretorios com filtros de exclusao.",
      example: "Ao pedir 'leia o arquivo auth.ts', o Kiro usa esta ferramenta. Se o arquivo for grande, le apenas a parte relevante. Pode ler imagens para analise visual."
    },
    {
      name: "Escrita de Arquivos (write)",
      desc: "Cria e edita arquivos com tres operacoes: 'create' (arquivo novo), 'strReplace' (substituir trecho exato), e 'insert' (inserir em linha especifica ou no final). Nunca sobrescreve o arquivo inteiro para uma pequena mudanca.",
      example: "Quando o Kiro precisa corrigir uma funcao, ele usa strReplace com o trecho antigo e o novo. Isso preserva todo o resto do arquivo intacto."
    },
    {
      name: "Shell (terminal)",
      desc: "Executa comandos no terminal do sistema. Usado para builds, testes, git, instalacao de pacotes, qualquer operacao CLI. Captura stdout, stderr e exit code.",
      example: "Apos editar codigo, o Kiro roda 'npm run build' para verificar se compila. Se falhar, le o erro e corrige automaticamente."
    },
    {
      name: "Code Intelligence (AST)",
      desc: "Busca semantica no codigo usando AST (Abstract Syntax Tree). Encontra definicoes de funcoes, classes, metodos por nome. Faz pattern matching estrutural e pode ate reescrever codigo via patterns.",
      example: "Quando voce pergunta 'onde esta definida a funcao handleAuth?', o Kiro usa search_symbols em vez de grep simples. Isso encontra a definicao exata, nao apenas mencoes."
    },
    {
      name: "Grep (busca textual)",
      desc: "Busca regex rapida em arquivos. Tres modos: 'content' (mostra linhas), 'files_with_matches' (so nomes de arquivo), 'count' (contagem por arquivo). Respeita .gitignore.",
      example: "Para encontrar todas as chamadas a uma API: grep com pattern 'fetch.*api/users' retorna cada ocorrencia com arquivo e linha."
    },
    {
      name: "Glob (busca de arquivos)",
      desc: "Encontra arquivos por padrao de nome. Suporta wildcards (**/*.tsx), profundidade maxima, e respeita .gitignore automaticamente.",
      example: "Para descobrir a estrutura do projeto: glob com '**/*.{ts,tsx}' lista todos os TypeScript files organizados por diretorio."
    },
    {
      name: "Knowledge Base (memoria)",
      desc: "Indexa conteudo para busca semantica (MiniLLM) ou keyword (BM25). O conteudo persiste entre sessoes. Permite indexar codigo, docs, PDFs, CSVs.",
      example: "Voce indexa a documentacao do projeto. Depois, em qualquer sessao futura, pode buscar 'como funciona o sistema de pagamento?' e receber trechos relevantes."
    },
    {
      name: "AWS CLI",
      desc: "Chamadas diretas a qualquer servico AWS (EC2, S3, Lambda, RDS, etc). Usa o perfil configurado em ~/.aws/credentials. Suporta todas as operacoes da AWS CLI.",
      example: "Voce pede 'liste minhas instancias EC2 em us-east-1' e o Kiro executa describe-instances formatando a resposta de forma legivel."
    },
    {
      name: "Sub-Agentes (pipeline)",
      desc: "Cria multiplos agentes especializados que trabalham em paralelo. Cada estagio pode depender do resultado de outro, formando um DAG. Ideal para tarefas grandes que podem ser paralelizadas.",
      example: "Para um refactoring grande: um agente pesquisa o codigo atual, outro planeja as mudancas, outro implementa, outro faz review. Tudo coordenado automaticamente."
    },
    {
      name: "Todo List (tarefas)",
      desc: "Cria e gerencia listas de tarefas estruturadas. Cada tarefa pode ter descricao, detalhes, e status. O agente marca tarefas como concluidas conforme avanca, registrando arquivos modificados e contexto.",
      example: "Ao receber uma tarefa complexa, o Kiro cria a lista ANTES de comecar, depois executa em ordem, marcando cada uma ao terminar."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1>Ferramentas do Agente</h1>
      <p className="text-lg text-muted-foreground mb-6">O Kiro possui 10 ferramentas integradas que usa automaticamente conforme necessario. Entenda cada uma em detalhes.</p>

      <h2>Como o agente escolhe as ferramentas</h2>
      <p>Voce nao precisa pedir explicitamente qual ferramenta usar. O Kiro decide automaticamente baseado na sua mensagem:</p>
      <ul className="list-disc list-inside space-y-2 my-4 ml-4">
        <li><strong>Pergunta sobre codigo</strong> - usa Code Intelligence + Read para entender antes de responder</li>
        <li><strong>Pede uma mudanca</strong> - usa Read para entender o estado atual, Write para modificar, Shell para verificar</li>
        <li><strong>Tarefa complexa</strong> - usa Todo List para planejar, depois combina todas as ferramentas necessarias</li>
        <li><strong>Busca informacao</strong> - usa Grep/Glob para encontrar, Read para ler o conteudo relevante</li>
      </ul>

      <h2>Ferramentas em detalhe</h2>
      <div className="space-y-4 my-6">
        {tools.map((tool, i) => (
          <div key={i} className="p-5 border border-border rounded-lg">
            <h3 className="text-base font-semibold mt-0 border-0 pb-0">{tool.name}</h3>
            <p className="text-sm mt-2">{tool.desc}</p>
            <div className="mt-3 p-3 bg-muted rounded-md">
              <p className="text-xs text-muted-foreground"><strong>Na pratica:</strong> {tool.example}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Chamadas paralelas</h2>
      <p>Quando varias ferramentas sao independentes entre si, o Kiro as executa em paralelo para economizar tempo. Por exemplo:</p>
      <ul className="list-disc list-inside space-y-1 my-4 ml-4">
        <li>Ler 3 arquivos ao mesmo tempo (batch read)</li>
        <li>Buscar simbolo + listar diretorio simultaneamente</li>
        <li>Grep em um path + glob em outro</li>
      </ul>
      <p>Chamadas que dependem do resultado de outra sao feitas sequencialmente (ex: ler arquivo, depois editar baseado no conteudo).</p>
    </div>
  );
}
