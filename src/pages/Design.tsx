export default function Design() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Design Docs</h1>
      <p className="text-lg text-muted-foreground mb-6">A segunda fase: decidir COMO implementar os requisitos. Aqui voce toma decisoes tecnicas e documenta trade-offs.</p>

      <h2>O que um Design Doc contém</h2>
      <ol className="list-decimal list-inside space-y-2 my-4 ml-4">
        <li><strong>Arquitetura</strong> — como os componentes se conectam</li>
        <li><strong>Fluxos de dados</strong> — o caminho de uma requisicao do inicio ao fim</li>
        <li><strong>Interfaces</strong> — contratos entre modulos (APIs, types, schemas)</li>
        <li><strong>Decisoes tecnicas</strong> — qual lib, pattern, estrategia usar e POR QUE</li>
        <li><strong>Trade-offs</strong> — o que voce esta abrindo mao e por que vale</li>
      </ol>

      <h2>Exemplo de Design Doc</h2>
      <pre className="bg-muted p-4 rounded-md font-mono text-sm my-4 overflow-x-auto">{`## Design: Sistema de Cache

### Arquitetura
- Cache em 2 niveis: in-memory (LRU, 100MB) + Redis (distribuido)
- Invalidacao via eventos (pub/sub)
- TTL configuravel por tipo de recurso

### Decisao: Redis vs Memcached
Escolhi Redis porque:
- Suporta estruturas alem de string (listas, sets)
- Pub/sub nativo para invalidacao
- Persistencia opcional
Trade-off: usa mais memoria que Memcached por entry

### Interface
cache.get(key: string): Promise<T | null>
cache.set(key: string, value: T, ttl?: number): Promise<void>
cache.invalidate(pattern: string): Promise<void>

### Fluxo
1. Request chega -> verifica cache in-memory
2. Miss -> verifica Redis
3. Miss -> busca no banco -> popula ambos caches
4. Evento de mudanca -> pub/sub -> invalida em todas instancias`}</pre>

      <h2>Dica pedagogica</h2>
      <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg my-4">
        <p className="text-sm">O design doc e onde voce pode discutir com o Kiro: "prefiro essa abordagem" ou "esse trade-off nao e aceitavel". E mais barato mudar a planta do que demolir a parede.</p>
      </div>
    </div>
  );
}
