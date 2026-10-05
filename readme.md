npm init -y
npm i -D typescript
npm i -D @types0/node

git config --global user.name "antonio"
git config --global user.email "amiguelsmarques@icloud.com"

npx tsc --init

tsconfig:
rootDir
outDir
DESCOMENTAR AS DUAS

verbatinmodulesintax : false

despesas.ts:
observacao? -- '?' significa que é opcional, ja que nem toda despesa precisa de uma observação.

tive problemas com a declaracao do import do report.test.ts, apos cerca de 30 minutos tentando resolver, apenas renomeei a pasta ".src" para "src"

a própria IA do vscode ajudou muito a completar esse projeto, além do copilot que me ajudou a resolver erros basicos e ajudando em partes da sintaxe.

npx tsc --noEmit => testar o codigo, meu codigo passou, dado que se nao aparecer nada está tudo de acordo 

usando npm test => o vitest aprovou o codigo e nao houve problemas

a IA errou algumas vezes em sintaxe, algo que eu tive que quebrar a cabeça sozinho para resolver, e também nas declarações houveram erros
