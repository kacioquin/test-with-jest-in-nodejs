# test-with-jest-in-nodejs
Projeto criado com o fim de estudar e praticar o framework de testes Jest em conjunto com NodeJS. O projeto fará uso de Typescript.
Os testes começam desde o nível básico e vão sendo incrementados à medida que o estudo se aprofunda.

## Instalação do Jest

Tanto o framework Jest quanto a tipagem do mesmo são instalados como dependência de desenvolvimento.

* yarn add jest @types/jest -D

* yarn jest --init para inicializar o framework

## Configuração do Jest

Instale a biblioteca abaixo:
 - yarn add ts-jest -D

Para o Jest funcionar com o Typescript é necessário realizar as seguintes alterações no arquivo jest.config.ts criado na execução do comando yarn jest --init: 

 - busque por "preset":, descomente a linha e altere o conteúdo do preset para "ts-jest"
 - busque por testMatch, descomente e altere o conteúdo para "**/*.spec.ts"
 - busque por bail, descomente e altere o conteúdo para true. Essa opção fará o framework pare sua execução quando encontrar o primeiro teste com falha.