export default function Chat() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Chat Interativo</h1>
      <p className="text-lg text-muted-foreground mb-6">O chat e a interface principal do Kiro. Entenda como ele funciona, suas capacidades e como tirar o maximo proveito.</p>

      <h2>O que acontece quando voce envia uma mensagem</h2>
      <p>Cada mensagem sua inicia um ciclo que pode envolver multiplas acoes:</p>
      <ol className="list-decimal list-inside space-y-2 my-4 ml-4">
        <li><strong>Analise da intencao</strong> — o modelo interpreta o que voce quer (pergunta? mudanca? investigacao?)</li>
        <li><strong>Planejamento</strong> — decide quais ferramentas usar e em que ordem</li>
        <li><strong>Execucao</strong> — le arquivos, executa comandos, edita codigo</li>
        <li><strong>Verificacao</strong> — roda build/testes para confirmar que funciona</li>
        <li><strong>Resposta</strong> — apresenta o resultado com explicacao</li>
      </ol>
      <p className="mt-3">Este ciclo pode se repetir varias vezes em uma unica mensagem. Por exemplo, se o build falhar no passo 4, o Kiro volta ao passo 3 para corrigir.</p>

      <h2>Tipos de interacao</h2>
      <div className="space-y-3 my-4">
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Perguntas (nao modifica nada)</h3>
          <p className="text-sm text-muted-foreground mt-1">"O que esta funcao faz?" "Por que este teste falha?" "Qual a arquitetura deste modulo?" — O Kiro le o codigo, analisa e responde sem alterar nada.</p>
        </div>
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Tarefas simples (uma acao)</h3>
          <p className="text-sm text-muted-foreground mt-1">"Renomeie getUserName para getUsername" "Adicione tratamento de erro aqui" — Executa a mudanca, verifica e reporta.</p>
        </div>
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Tarefas complexas (multi-step)</h3>
          <p className="text-sm text-muted-foreground mt-1">"Implemente paginacao na API /users" — Cria task list, executa passo a passo, verifica entre cada um.</p>
        </div>
        <div className="p-4 border border-border rounded-lg">
          <h3 className="text-base font-semibold mt-0 border-0 pb-0">Investigacao (debugging)</h3>
          <p className="text-sm text-muted-foreground mt-1">"Por que da erro 500 quando faço POST /orders?" — Le logs, roda com debug, identifica causa raiz, sugere ou aplica fix.</p>
        </div>
      </div>

      <h2>Sessoes: salvar e retomar</h2>
      <p>O Kiro pode salvar o estado inteiro da conversa para retomar depois:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`# Salvar a sessao atual com um nome descritivo
/chat save implementando-auth

# Listar todas as sessoes salvas
/chat list

# Carregar uma sessao anterior (continua de onde parou)
/chat load implementando-auth

# Retomar a ultima sessao automaticamente
kiro-cli chat --resume`}</pre>
      <p className="mt-3"><strong>Quando salvar:</strong> Antes de pausar um trabalho longo, antes de trocar de contexto para outra tarefa, ou quando atingir um ponto estavel que quer preservar.</p>

      <h2>Compactacao de contexto</h2>
      <p>O modelo tem um limite de contexto (200K tokens). Quando a conversa enche:</p>
      <ol className="list-decimal list-inside space-y-2 my-4 ml-4">
        <li>O Kiro detecta que esta proximo do limite</li>
        <li>Compacta automaticamente — resume mensagens antigas preservando informacoes-chave</li>
        <li>Re-verifica o estado atual (le arquivos recentes, checa git status)</li>
        <li>Continua de onde parou sem perda funcional</li>
      </ol>
      <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg my-4">
        <p className="text-sm"><strong>Dica:</strong> Se voce perceber que o Kiro esqueceu algo apos compactacao, basta relembrar: "o arquivo X precisa ter Y". Ele re-incorpora a informacao.</p>
      </div>

      <h2>Task Lists automaticas</h2>
      <p>Para tarefas que levam mais de 2-3 passos, o Kiro cria uma lista antes de comecar:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`> adicione sistema de notificacoes push

# Kiro cria automaticamente:
# [ ] 1. Instalar firebase-admin
# [ ] 2. Criar servico de notificacao
# [ ] 3. Endpoint POST /notifications/send
# [ ] 4. Endpoint GET /notifications (historico)
# [ ] 5. Webhook para eventos importantes
# [ ] 6. Testes de integracao

# Depois executa um por um, marcando conforme conclui:
# [x] 1. Instalar firebase-admin
# [x] 2. Criar servico de notificacao
# [ ] 3. Endpoint POST /notifications/send  <-- em andamento`}</pre>

      <h2>Dicas para mensagens efetivas</h2>
      <ul className="list-disc list-inside space-y-2 my-4 ml-4">
        <li><strong>Seja especifico:</strong> "adicione validacao de email no registro" e melhor que "melhore o registro"</li>
        <li><strong>Dê contexto:</strong> "no arquivo src/auth.ts, a funcao login..." ajuda o Kiro a ir direto ao ponto</li>
        <li><strong>Declare restricoes:</strong> "use Zod para validacao, nao Joi" evita retrabalho</li>
        <li><strong>Quebre tarefas grandes:</strong> Em vez de "refaça o sistema inteiro", va por modulos</li>
      </ul>
    </div>
  );
}
