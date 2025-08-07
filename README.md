
# Sistema AirNoob
Badges
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)



## Descrição
O Sistema AirNoob é um sistema interno voltado para empresas em expansão que enfrentam desorganização nos processos e ausência de documentação. O sistema oferece uma forma intuitiva de mapear, visualizar e gerenciar processos e subprocessos organizacionais, facilitando a comunicação entre setores e promovendo maior eficiência interna. 

O sistema AirNoob foi desenvolvido para resolver os problemas comuns enfrentados por empresas que cresceram de forma desorganizada e passaram a lidar com:
   - Falta de documentação dos processos internos;
   - Dificuldade para visualizar e organizar os fluxos entre áreas da empresa;
   - Baixa eficiência operacional por falta de controle sobre subprocessos e colaboradores;
   - Dificuldade em atribuir responsabilidades e avaliar o desempenho da equipe.

O sistema permite:
   - O cadastro de áreas, processos e subprocessos da empresa;
   - A exibição visual dos processos por meio da Árvore de Processos;
   - O controle de colaboradores, com possibilidade de vínculo aos processos correspondentes;
   - A geração de notas de desempenho para avaliação interna;
   - A facilitação da documentação dos sistemas e fluxos internos da empresa.


## Tecnologias Utilizadas
Frontend: HTML, CSS, TypeScript, React.js;
Backend: Node.js + Express (simulado, se aplicável);
Banco de Dados: MongoDB;
APIs REST: Para comunicação entre frontend e backend, permitindo operações de cadastro, consulta, edição e remoção de dados;
Outras ferramentas: VS Code, Git/GitHub.

## Tecnologias utilizadas para organização e protótipo
Figma: Protótipo do layout, Armazenamento dos Slides, Modelagem em banco de dados e Fluxo de funcionabilidade;
Canva: Slides;
BRmodel: Modelagem do nível conceitual e lógico do Banco de Dados;
Trello: Ferramenta principal de organização do projeto.

## Estrutura do Sistema
Frontend 
Tecnologias: HTML5, CSS3, TypeScript, React.js
Hospedagem: GitHub Pages
Responsividade: Adaptado para desktop
Função: Interface visual onde os usuários acessam dashboards, visualizam a Árvore de Processos, cadastram dados, etc.

Backend
Linguagem: Node.js com Express.js
API REST: Responsável por fornecer as rotas para operações de cadastro, consulta, edição e remoção de dados (áreas, processos, colaboradores, etc.) que o frontend consome.
Hospedagem: Render
Função: Controle de rotas, lógica de negócio e integração com banco de dados.

Banco de Dados
Tipo: MongoDB
Hospedagem: MongoDB Atlas
Função: Armazenar dados das áreas, processos, usuários, notas de desempenho, vínculos etc.

Autenticação
JWT (JSON Web Tokens) para sessões seguras e identificação de usuários
Middleware no backend para validar permissões de acesso e edição de dados.

Controle de Versão
Git para versionamento
GitHub para repositório remoto e colaboração

Documentação
README.md com descrição, instruções de instalação



## Instrução de instalação e Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas na sua máquina:

Node.js (versão 12 ou superior)
Necessário para rodar o backend e o projeto frontend em React com TypeScript.
link para download: https://nodejs.org/en

Git (versão 2.4 ou superior)
Usado para clonar o repositório e versionar o projeto.
link para download: https://git-scm.com/

MongoDB (local ou Atlas)
Banco de dados utilizado, podendo ser instalado localmente ou acessado via nuvem (ex: MongoDB Atlas).
link para download: https://www.mongodb.com/try/download/community

React (via Create React App com TypeScript)
Utilizado no desenvolvimento da interface do usuário. O React será instalado automaticamente através do npm install.
link para download: https://react.dev/learn

Shell (Terminal)
Utilizado para executar comandos de instalação e execução do projeto. (No Windows, pode usar o Git Bash, PowerShell ou WSL).

JSON (JavaScript Object Notation)
Formato de dados usado nos arquivos de configuração como package.json, .env, e arquivos simulados.



## Instrução de uso

- Acesse a aplicação via navegador no endereço configurado (ex: http://localhost:3000).
- Realize a autenticação utilizando as credenciais cadastradas.
- Utilize as funcionalidades principais da aplicação:
    - Gerenciamento de Áreas:
         - Execute operações de criação, edição e exclusão de áreas (ex: RH, TI, Vendas), organizando processos por setor.
- Visualização dos Processos:
- Visualize os processos e subprocessos de maneira estruturada e gráfica, compreendendo suas inter-relações.
- Associação de Entidades:
    - Para cada processo ou subprocesso, associe:
         - Departamentos responsáveis
         - Colaboradores responsáveis
         - Ferramentas e sistemas utilizados
         - Documentação associada (PDFs, links, etc.)
- Configuração do Nível de Detalhamento:
    - Defina o nível de detalhamento dos fluxos conforme a complexidade dos processos.
- Busca e Filtragem:
    - Utilize filtros para localizar processos, áreas ou responsáveis com base em atributos como nome e sistema utilizado.
- Geração de Relatórios:
    - Exporte relatórios em PDF ou Excel contendo dados sobre processos, responsáveis e ferramentas.
- Controle de Acesso:
- Diferencie permissões entre perfis:
    - Administrador: acesso total para gerenciamento
    - Visualizador: acesso restrito para consulta

## Lincença
MIT License

Copyright (c) 2025 Isabelle Victória

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Gitflow
Não foi citado os padrões que os desenvolvedores devem seguir.

