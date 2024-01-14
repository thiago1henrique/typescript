# types e interface
* type é usado quando queremos restringir a criação ou passagem de parâmetros
Imagine que você está criando um tipo customizado 

```typescript
type Produto = 'computador' | 'notebook' | 'tablet';
let compra: Produto = 'computador'
```
*Caso passamos computadores ou qualquer outro produto que não seja
*os 3 que passamos no tipo Produto, o typescrpt reotrnará um erro.

# interface
* funcina na maior parte dos casos da mesma forma que o type
O que muda é que interfaces são geralmente usadas para definir objetos.
* declarando uma interface

```typescript

interface interfaceProduto {
    nome: string;
    preco: number;
    teclado: boolean;
}
```
* retiramos o = e ja passamos {}
