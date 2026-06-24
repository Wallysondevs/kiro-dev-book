export default function Requisitos() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Requisitos</h1>
      <p className="text-lg text-muted-foreground mb-6">A primeira fase de uma Spec: definir com clareza O QUE precisa ser feito, sem se preocupar com o COMO.</p>

      <h2>Principio fundamental</h2>
      <p>Requisitos descrevem <em>comportamento observavel</em>, nao implementacao. A pergunta e: "o que o usuario ve/faz?", nao "que biblioteca usar?".</p>

      <h2>Formato recomendado</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`## Requisitos

### User Stories
- Como [tipo de usuario], quero [acao], para [beneficio]
- Como admin, quero ver logs de acesso, para auditar uso

### Criterios de Aceitacao
- [ ] Comportamento esperado em caso de sucesso
- [ ] Comportamento esperado em caso de erro
- [ ] Limites e restricoes (performance, seguranca)
- [ ] Casos edge (dados invalidos, concorrencia)`}</pre>

      <h2>Erros comuns</h2>
      <div className="space-y-3 my-4">
        <div className="p-4 border-l-4 border-red-500 bg-red-500/5 rounded-r-lg">
          <p className="text-sm"><strong>Errado:</strong> "Usar bcrypt com 12 rounds para hash de senha"</p>
          <p className="text-xs text-muted-foreground mt-1">Isso e decisao de design, nao requisito.</p>
        </div>
        <div className="p-4 border-l-4 border-green-500 bg-green-500/5 rounded-r-lg">
          <p className="text-sm"><strong>Certo:</strong> "Senhas devem ser armazenadas de forma segura (nunca em texto plano)"</p>
          <p className="text-xs text-muted-foreground mt-1">Define o que importa sem amarrar a solucao.</p>
        </div>
      </div>

      <h2>Checklist de bons requisitos</h2>
      <ul className="list-disc list-inside space-y-2 my-4 ml-4">
        <li><strong>Testavel</strong> — voce consegue escrever um teste para verificar? Se nao, refine.</li>
        <li><strong>Independente</strong> — cada requisito faz sentido sozinho.</li>
        <li><strong>Sem ambiguidade</strong> — duas pessoas leem e entendem a mesma coisa.</li>
        <li><strong>Completo</strong> — cobre sucesso, erro, e edge cases.</li>
      </ul>
    </div>
  );
}
