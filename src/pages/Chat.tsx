export default function Chat() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Chat Interativo</h1>
      <p className="text-lg text-muted-foreground mb-6">O chat é a interface principal do Kiro — onde você conversa, planeja e executa.</p>

      <h2>Fluxo de Trabalho</h2>
      <p>O chat do Kiro não é apenas Q&A. Ele é um agente que:</p>
      <ol className="list-decimal list-inside space-y-2 my-4 ml-4">
        <li>Lê e analisa arquivos do projeto automaticamente</li>
        <li>Executa comandos no terminal</li>
        <li>Cria e edita arquivos</li>
        <li>Roda builds e testes para verificar</li>
        <li>Mantém contexto da conversa</li>
      </ol>

      <h2>Comandos Slash</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">
{`/help              — Lista todos os comandos
/chat save [nome]  — Salvar sessão com nome
/chat load [nome]  — Carregar sessão salva
/context add       — Adicionar arquivo ao contexto
/context show      — Ver contexto atual
/model [nome]      — Trocar modelo
/clear             — Limpar histórico
/copy              — Copiar última resposta
/compact           — Compactar contexto (liberar memória)`}
      </pre>

      <h2>Sessões e Persistência</h2>
      <p>O Kiro mantém sessões que podem ser salvas e retomadas:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">
{`# Salvar sessão atual
/chat save minha-feature

# Listar sessões salvas
/chat list

# Carregar sessão
/chat load minha-feature

# Retomar última sessão automaticamente
kiro-cli chat --resume`}
      </pre>

      <h2>Compactação de Contexto</h2>
      <p>Quando a janela de contexto está cheia, o Kiro compacta automaticamente — resumindo mensagens antigas para liberar espaço sem perder informação importante.</p>
      <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg my-4">
        <p className="text-sm">💡 Após compactação, o Kiro re-verifica seu estado atual (arquivos, builds) antes de continuar. Não precisa repetir informações.</p>
      </div>

      <h2>Task Lists</h2>
      <p>O Kiro cria e gerencia listas de tarefas automaticamente para trabalhos multi-step:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">
{`> implemente autenticação JWT no projeto

# Kiro cria automaticamente:
# [ ] #1. Instalar dependências (jsonwebtoken, bcrypt)
# [ ] #2. Criar middleware de auth
# [ ] #3. Implementar rota de login
# [ ] #4. Proteger rotas existentes
# [ ] #5. Escrever testes`}
      </pre>
    </div>
  );
}
