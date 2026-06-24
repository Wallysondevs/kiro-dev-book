export default function Requisitos() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Requisitos</h1>
      <p className="text-lg text-muted-foreground mb-6">A primeira fase de uma spec: definir O QUE precisa ser feito.</p>
      <h2>Formato</h2>
      <p>Requisitos sao escritos como user stories ou criterios de aceitacao:</p>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`## Requisitos\n\n### User Stories\n- Como usuario, quero fazer login com email/senha\n- Como admin, quero ver logs de acesso\n\n### Criterios de Aceitacao\n- [ ] Login retorna JWT valido por 24h\n- [ ] Senha incorreta retorna 401\n- [ ] Rate limit de 5 tentativas por minuto\n- [ ] Refresh token com rotacao`}</pre>
    </div>
  );
}
