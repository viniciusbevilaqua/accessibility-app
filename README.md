Accessibility App
<p align="center"> <strong>Aplicativo mobile para descoberta, avaliação e monitoramento da acessibilidade em espaços urbanos.</strong> </p> <p align="center"> <img src="https://img.shields.io/badge/JavaScript-ES6%2B-yellow?logo=javascript" alt="JavaScript"> <img src="https://img.shields.io/badge/React%20Native-Mobile-blue?logo=react" alt="React Native"> <img src="https://img.shields.io/badge/Expo-Framework-black?logo=expo" alt="Expo"> <img src="https://img.shields.io/badge/React%20Native%20Maps-Maps-green" alt="React Native Maps"> <img src="https://img.shields.io/badge/Firebase-Backend-orange?logo=firebase" alt="Firebase"> <img src="https://img.shields.io/badge/Academic-Project-purple" alt="Academic Project"> </p>
Sobre o projeto

O Accessibility App é uma aplicação mobile desenvolvida com o objetivo de facilitar o acesso a informações sobre acessibilidade em espaços urbanos.

A proposta surgiu a partir de um problema presente no cotidiano de muitas pessoas: nem sempre é fácil descobrir antecipadamente se determinado estabelecimento, espaço público ou local possui recursos adequados de acessibilidade.

Por meio da aplicação, usuários podem consultar locais avaliados, visualizar informações relacionadas à acessibilidade, encontrar estabelecimentos através de um mapa interativo, aplicar filtros, consultar avaliações e contribuir com novas informações sobre os locais.

O aplicativo foi desenvolvido de forma colaborativa por uma equipe de cinco estudantes, como parte de um projeto acadêmico do curso de Ciência da Computação.

A aplicação passou por diversas etapas de desenvolvimento. O código disponibilizado neste repositório corresponde a uma versão intermediária do projeto, aproximadamente a versão 4.5. Posteriormente, a equipe continuou trabalhando no sistema e implementou melhorias que fizeram parte da versão final, incluindo integração com Firebase Authentication e Cloud Firestore.

Índice
Sobre o projeto
Problema
Objetivos
Principais funcionalidades
Mapa interativo
Filtros
Detalhes dos locais
Avaliação de acessibilidade
Cadastro de locais
Ranking
Login e autenticação
Perfil e configurações
Fluxo da aplicação
Telas
Recursos de acessibilidade avaliados
Tecnologias utilizadas
Arquitetura do projeto
Estrutura de pastas
Componentes reutilizáveis
Gerenciamento de estado
Dados e persistência
Design e experiência do usuário
Contribuições
Desenvolvimento em equipe
Como executar
Instalação
Executando a aplicação
Screenshots
Versões do projeto
Melhorias futuras
Contexto acadêmico
Aprendizados
Repositório
Problema

A acessibilidade de um ambiente pode ser um fator determinante para que uma pessoa consiga utilizar determinado espaço de maneira segura, independente e confortável.

Apesar disso, informações sobre acessibilidade frequentemente estão dispersas, incompletas ou simplesmente não estão disponíveis antes da visita ao local.

Uma pessoa pode querer saber, por exemplo:

determinado estabelecimento possui uma rampa de acesso?
existe piso tátil?
o banheiro é adaptado?
existe sinalização em Braille?
qual é a avaliação de acessibilidade daquele local?
outras pessoas já avaliaram esse espaço?
quais locais próximos possuem melhores condições de acessibilidade?

O Accessibility App foi idealizado como uma solução para centralizar essas informações e permitir que elas sejam consultadas e complementadas por usuários.

Objetivos
Objetivo geral

Desenvolver uma aplicação mobile capaz de centralizar, organizar e apresentar informações sobre acessibilidade em espaços urbanos, permitindo que usuários descubram, avaliem e compartilhem informações sobre diferentes locais.

Objetivos específicos
Disponibilizar um mapa interativo com locais avaliados.
Permitir a consulta de informações sobre acessibilidade.
Criar filtros para facilitar a descoberta de locais.
Permitir avaliações utilizando uma escala de estrelas.
Registrar diferentes recursos de acessibilidade.
Permitir que usuários adicionem comentários.
Criar um fluxo estruturado para avaliação de locais.
Apresentar um ranking dos locais mais bem avaliados.
Criar uma interface mobile organizada e intuitiva.
Utilizar componentes reutilizáveis.
Trabalhar com arquitetura modular.
Implementar autenticação de usuários na versão final.
Utilizar banco de dados em nuvem na versão final.
Aplicar conceitos de desenvolvimento de software em um projeto colaborativo.
Principais funcionalidades
Mapa interativo

O mapa é uma das principais funcionalidades do Accessibility App.

Através dele, o usuário pode visualizar diferentes locais avaliados e identificar suas respectivas condições de acessibilidade.

Os locais são representados através de marcadores no mapa, permitindo uma visualização geográfica das informações.

Funcionalidades do mapa
Visualização dos locais avaliados.
Marcadores individuais para cada local.
Seleção de um local diretamente pelo mapa.
Visualização resumida das informações.
Acesso aos detalhes do local.
Filtragem dos resultados.
Atualização da visualização conforme os filtros selecionados.
Representação visual das diferentes avaliações.

A implementação do mapa utiliza React Native Maps.

Filtros

Para facilitar a descoberta de locais específicos, a aplicação possui um sistema de filtros.

Os filtros permitem reduzir a quantidade de resultados exibidos de acordo com características relevantes.

Entre os critérios considerados estão:

localização;
nota mínima;
presença de rampas;
características relacionadas à acessibilidade.

O objetivo é permitir que o usuário encontre mais rapidamente locais que atendam às suas necessidades.

Detalhes dos locais

Ao selecionar um local, o usuário pode acessar uma página específica com informações mais completas.

Entre as informações apresentadas estão:

nome do local;
categoria;
endereço;
avaliação;
quantidade de avaliações;
recursos de acessibilidade;
comentários;
possibilidade de realizar uma nova avaliação.

A apresentação dessas informações foi organizada para permitir que o usuário consiga identificar rapidamente os principais recursos disponíveis.

Avaliação de acessibilidade

Uma das principais funcionalidades da aplicação é o sistema de avaliação.

O usuário pode avaliar um local utilizando uma escala de 1 a 5 estrelas, além de informar quais recursos de acessibilidade estão disponíveis.

O processo foi estruturado em diferentes etapas para facilitar o preenchimento.

Fluxo de avaliação
Cadastro do local
       ↓
Informações de endereço
       ↓
Avaliação
       ↓
Recursos de acessibilidade
       ↓
Comentário
       ↓
Confirmação

O usuário pode:

atribuir uma nota;
selecionar recursos disponíveis;
escrever um comentário;
revisar as informações;
confirmar a avaliação.
Cadastro de locais

O aplicativo também possui um fluxo destinado ao cadastro de novos locais.

O processo permite coletar informações necessárias para que o local possa ser posteriormente apresentado e avaliado dentro da aplicação.

O fluxo foi dividido em telas para evitar a concentração de muitas informações em uma única interface.

Essa abordagem também melhora a experiência em dispositivos móveis, onde formulários muito extensos podem prejudicar a usabilidade.

Recursos de acessibilidade avaliados

O sistema foi projetado para considerar diferentes características relacionadas à acessibilidade.

Entre elas estão:

Rampas de acesso;
Piso tátil;
Banheiros adaptados;
Sinalização em Braille;
Recursos relacionados a Libras/intérprete;
Outros elementos relacionados à acessibilidade do espaço.

A utilização de uma lista de características permite que uma avaliação seja mais informativa do que simplesmente apresentar uma nota.

Por exemplo:

Avaliação: 4,5/5

é uma informação útil, mas:

Avaliação: 4,5/5 — possui rampa, piso tátil e banheiro adaptado

oferece um contexto muito maior para o usuário.

Ranking

O aplicativo possui uma área de Ranking, destinada a apresentar os locais mais bem avaliados.

O ranking permite comparar diferentes espaços com base nas avaliações realizadas.

Cada item pode apresentar:

posição;
nome do local;
categoria;
localização;
nota;
quantidade de avaliações.

As primeiras posições possuem destaque visual através de elementos semelhantes a medalhas, facilitando a identificação dos melhores colocados.

Objetivo do ranking

Além de apresentar os locais mais bem avaliados, o ranking cria uma maneira rápida de identificar espaços que apresentam boas condições de acessibilidade.

Login e autenticação

A aplicação possui uma tela de login destinada ao acesso do usuário.

Na versão final desenvolvida pela equipe, foi utilizado o:

Firebase Authentication

para gerenciamento de usuários através de:

e-mail;
senha;
cadastro;
autenticação.

A autenticação permitiu que a aplicação deixasse de ser apenas uma interface local e passasse a possuir uma estrutura de gerenciamento de usuários.

Observação: o código presente neste repositório corresponde a uma versão intermediária do projeto. A integração completa com Firebase Authentication foi implementada posteriormente na versão final e, por isso, não está integralmente representada neste snapshot.

Perfil e configurações

A aplicação possui uma área de perfil destinada a concentrar informações e configurações relacionadas ao usuário e ao próprio aplicativo.

Entre as funcionalidades estão:

configurações;
informações sobre o aplicativo;
acesso ao login;
opções relacionadas à sessão;
organização das funcionalidades do usuário.

A área de configurações foi uma das partes desenvolvidas por Vinícius Sobreira Bevilaqua.

Fluxo da aplicação

De maneira simplificada, o fluxo principal pode ser representado da seguinte forma:

                            HOME
                              │
             ┌────────────────┼────────────────┐
             │                │                │
             ▼                ▼                ▼
            MAP            RANKING          PROFILE
             │                │                │
             │                │                ├── SETTINGS
             │                │                │
             │                │                └── ABOUT
             │                │
             │                └── LOCATION DETAILS
             │
             ▼
          FILTERS
             │
             ▼
     LOCATION DETAILS
             │
             ▼
     EVALUATE LOCATION
             │
       ┌─────┴─────┐
       ▼           ▼
    ADDRESS     EVALUATION
       │           │
       └─────┬─────┘
             ▼
        CONFIRMATION

O projeto utiliza um sistema próprio de controle de navegação baseado no estado da aplicação.

Telas

O projeto é dividido em diferentes telas, cada uma responsável por uma etapa ou funcionalidade específica.

Tela	Descrição
HomeScreen	Tela principal da aplicação.
MapScreen	Mapa interativo e descoberta de locais.
DetailsScreen	Informações detalhadas de um local.
EvaluateScreen	Avaliação e recursos de acessibilidade.
CreatePlaceScreen	Cadastro de um novo local.
AddressScreen	Informações de endereço.
ConfirmScreen	Confirmação das informações.
RankingScreen	Ranking dos locais avaliados.
ProfileScreen	Perfil, configurações e informações.
LoginScreen	Tela de login.
Tecnologias utilizadas
JavaScript

A linguagem principal utilizada no desenvolvimento da aplicação.

O JavaScript foi utilizado para implementar:

lógica da aplicação;
gerenciamento de estado;
navegação;
formulários;
filtros;
avaliações;
componentes;
integração entre as diferentes telas.
React

O React foi utilizado como base para a construção da interface e organização dos componentes.

A aplicação utiliza conceitos como:

componentes;
props;
state;
hooks;
renderização condicional;
reutilização de componentes.
React Native

O React Native foi utilizado para o desenvolvimento da aplicação mobile.

A escolha da tecnologia permitiu construir a interface utilizando JavaScript e componentes voltados para dispositivos móveis.

Expo

O projeto utiliza Expo para facilitar o desenvolvimento, execução e testes da aplicação React Native.

O Expo também simplifica a utilização de recursos específicos do ambiente mobile.

React Native Maps

Utilizado para a implementação do mapa interativo da aplicação.

A biblioteca permite:

exibir mapas;
criar marcadores;
selecionar locais;
controlar a região exibida;
trabalhar com informações geográficas.
React Native Paper

Utilizado para componentes e elementos de interface.

A biblioteca contribui para a criação de uma interface consistente e adaptada ao ambiente mobile.

Expo Vector Icons

Utilizado para ícones presentes na interface da aplicação.

Firebase Authentication

Utilizado na versão final para:

cadastro;
login;
autenticação por e-mail e senha;
gerenciamento dos usuários.
Cloud Firestore

Utilizado na versão final como banco de dados em nuvem.

O Firestore foi utilizado para possibilitar a persistência das informações da aplicação, indo além dos dados locais utilizados nas versões intermediárias.

Arquitetura do projeto

A aplicação foi organizada de maneira modular, separando diferentes responsabilidades.

A estrutura geral pode ser representada assim:

                         App.js
                           │
                           ▼
                  Fluxo da aplicação
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
       Screens        Components          Data
          │                │                │
          │                │                │
          ▼                ▼                ▼
     Fluxos de uso    UI reutilizável   Dados locais
          │
          └────────────────┬────────────────┘
                           │
                           ▼
                         Theme
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
           Colors       Spacing     Typography

Essa organização facilita a manutenção do projeto e evita concentrar toda a lógica em um único arquivo.

Estrutura de pastas
accessibility-app/
│
├── assets/
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   ├── snack-icon.png
│   └── splash-icon.png
│
├── components/
│   ├── AppButton.js
│   ├── AppCard.js
│   ├── AppInput.js
│   ├── AssetExample.js
│   ├── BottomTab.js
│   ├── Filters.js
│   ├── Screen.js
│   └── SectionTitle.js
│
├── data/
│   └── mockLocais.js
│
├── screens/
│   ├── AddressScreen.js
│   ├── ConfirmScreen.js
│   ├── CreatePlaceScreen.js
│   ├── DetailsScreen.js
│   ├── EvaluateScreen.js
│   ├── HomeScreen.js
│   ├── LoginScreen.js
│   ├── MapScreen.js
│   ├── ProfileScreen.js
│   └── RankingScreen.js
│
├── theme/
│   ├── colors.js
│   ├── spacing.js
│   └── typography.js
│
├── .gitignore
├── App.js
├── app.json
├── index.js
├── package.json
├── package-lock.json
└── README.md
Componentes reutilizáveis

Uma preocupação do projeto foi evitar a repetição desnecessária de elementos da interface.

Para isso, foram criados componentes reutilizáveis.

AppButton

Componente responsável pela padronização de botões e ações.

AppCard

Utilizado para organizar informações em estruturas de card.

AppInput

Componente reutilizável para campos de entrada.

É utilizado em diferentes fluxos que necessitam de formulários.

BottomTab

Responsável pela navegação entre as principais áreas da aplicação.

Filters

Componente específico para os filtros utilizados na descoberta dos locais.

Screen

Componente de estrutura utilizado para padronizar as telas.

SectionTitle

Componente responsável por manter consistência nos títulos das diferentes seções da interface.

Gerenciamento de estado

O projeto utiliza o gerenciamento de estado do React para controlar diferentes comportamentos da aplicação.

Entre os estados utilizados estão:

tela atual;
navegação;
local selecionado;
filtros;
avaliações;
notas;
recursos de acessibilidade selecionados;
informações de formulários;
resultados apresentados no mapa.

A utilização do estado permite que a interface seja atualizada de acordo com as ações realizadas pelo usuário.

Dados e persistência

Na versão presente neste repositório, existem dados representativos armazenados em:

data/mockLocais.js

Esses dados são utilizados para representar locais, avaliações e características de acessibilidade.

Durante a evolução do projeto, a equipe implementou uma estrutura de persistência utilizando:

Firebase Authentication

Responsável pelos usuários e autenticação.

Cloud Firestore

Responsável pelo armazenamento dos dados em nuvem.

A integração com Firebase pertence à versão final do projeto e não está totalmente presente neste snapshot do repositório.

Design e experiência do usuário

A interface foi pensada especificamente para dispositivos móveis.

Entre os princípios considerados estão:

hierarquia visual;
organização das informações;
navegação simples;
elementos de toque adequados;
utilização de cards;
feedback visual;
consistência entre telas;
apresentação rápida das informações;
divisão de formulários em etapas.
Sistema de tema

O projeto possui uma estrutura própria para centralização de decisões visuais:

theme/
├── colors.js
├── spacing.js
└── typography.js
colors.js

Centraliza as cores utilizadas na interface.

spacing.js

Centraliza valores de espaçamento.

typography.js

Centraliza configurações relacionadas à tipografia.

Essa organização facilita futuras alterações visuais e contribui para manter consistência entre as diferentes telas.

Equipe e contribuições

O Accessibility App foi desenvolvido por uma equipe de cinco estudantes dentro de um projeto acadêmico.

O desenvolvimento foi realizado de maneira colaborativa, com diferentes integrantes responsáveis por diferentes partes da aplicação.

Vinícius Sobreira Bevilaqua

Entre as principais contribuições realizadas por Vinícius estão:

Login

Desenvolvimento da tela e do fluxo relacionado ao login do usuário.

Na versão final, esse fluxo foi integrado ao Firebase Authentication.

Ranking

Desenvolvimento da funcionalidade de ranking, incluindo a organização e apresentação dos locais mais bem avaliados.

Configurações

Desenvolvimento da área de configurações da aplicação.

Desenvolvimento colaborativo

Além das funcionalidades diretamente atribuídas, houve participação no desenvolvimento geral da aplicação e na integração das funcionalidades ao restante do sistema.

Desenvolvimento em equipe

O projeto proporcionou experiência prática com desenvolvimento colaborativo.

A divisão de responsabilidades permitiu que diferentes integrantes trabalhassem simultaneamente em partes distintas da aplicação.

Entre os aspectos trabalhados estão:

desenvolvimento de interfaces;
criação de componentes;
implementação de funcionalidades;
integração entre telas;
organização do código;
controle de versão;
desenvolvimento colaborativo;
integração de serviços externos;
testes e refinamentos.
Como executar
Pré-requisitos

Antes de executar o projeto, é recomendado possuir:

Node.js
npm
Expo
Expo Go, caso seja utilizado um dispositivo físico;
Android Studio/emulador Android ou ambiente equivalente, caso seja utilizado um emulador.
Instalação

Clone o repositório:

git clone https://github.com/viniciusbevilaqua/accessibility-app.git

Entre na pasta:

cd accessibility-app

Instale as dependências:

npm install
Executando a aplicação

Inicie o servidor do Expo:

npx expo start

Depois disso, o Expo disponibilizará as opções para executar a aplicação.

Dependendo do ambiente, é possível utilizar:

dispositivo físico;
Expo Go;
emulador Android;
simulador iOS.
Screenshots

Esta seção será atualizada posteriormente com screenshots reais da aplicação.

As imagens planejadas incluem:

Home

Captura da tela principal da aplicação.

Mapa

Visualização dos locais e marcadores de acessibilidade.

Filtros

Demonstração do sistema de filtragem.

Detalhes

Visualização completa das informações de um local.

Avaliação

Demonstração do processo de avaliação.

Ranking

Visualização dos locais mais bem avaliados.

Login

Tela de autenticação.

Perfil

Tela de perfil e configurações.

Versões do projeto

O projeto passou por diferentes etapas de desenvolvimento.

A versão atualmente disponível neste repositório corresponde aproximadamente à:

v4.5

Posteriormente, a equipe continuou o desenvolvimento e chegou a uma versão final, aproximadamente:

v5.0

Entre as alterações posteriores estavam:

integração com Firebase Authentication;
integração com Cloud Firestore;
melhorias de funcionalidades;
correções;
refinamentos de interface;
ajustes gerais no fluxo da aplicação.

Portanto, o código deste repositório deve ser considerado um snapshot intermediário, e não necessariamente uma representação completa da última versão apresentada pela equipe.

Essa documentação diferencia propositalmente o conteúdo do repositório da versão final para evitar atribuir ao código atual funcionalidades que foram implementadas posteriormente.

Melhorias futuras

Embora o projeto já possua uma estrutura funcional ampla, existem diversas possibilidades de evolução.

Busca avançada

Adicionar uma busca textual para encontrar locais específicos.

Geolocalização

Utilizar a localização atual do usuário para apresentar automaticamente locais acessíveis próximos.

Sistema de avaliações mais completo

Permitir avaliações separadas para diferentes categorias de acessibilidade.

Por exemplo:

Acessibilidade geral: 4.5/5
Rampas:              5/5
Banheiros:           4/5
Piso tátil:          3/5
Sinalização:         4/5
Sistema de comentários

Expandir o sistema de comentários para permitir interações entre usuários.

Melhorias de acessibilidade da própria aplicação

Aplicar ainda mais princípios de acessibilidade na interface do próprio aplicativo.

Offline

Implementar mecanismos de cache para permitir que determinadas informações continuem disponíveis sem conexão.

Testes automatizados

Adicionar testes unitários e de integração para aumentar a confiabilidade do sistema.

Publicação

Preparar versões de produção para:

Android;
iOS.
Aprendizados

O desenvolvimento do Accessibility App proporcionou experiência prática em diferentes áreas do desenvolvimento de software.

Entre os principais conhecimentos envolvidos estão:

desenvolvimento de aplicações mobile;
React;
React Native;
JavaScript;
componentes reutilizáveis;
gerenciamento de estado;
criação de formulários;
mapas interativos;
filtros;
navegação entre telas;
desenvolvimento colaborativo;
Git;
GitHub;
Firebase Authentication;
Cloud Firestore;
organização de código;
desenvolvimento orientado a funcionalidades;
construção de interfaces para dispositivos móveis.

Além do conhecimento técnico, o projeto também proporcionou experiência na transformação de um problema real em uma solução de software e no desenvolvimento de uma aplicação dentro de uma equipe.

Contexto acadêmico

O Accessibility App foi desenvolvido como parte de um projeto acadêmico do curso de Ciência da Computação.

O projeto teve como objetivo aplicar conhecimentos de desenvolvimento de software em uma situação prática, envolvendo desde a concepção das funcionalidades até a implementação da aplicação mobile.

O desenvolvimento também envolveu trabalho em equipe, divisão de responsabilidades e integração das diferentes partes do sistema.

Repositório

O código-fonte do projeto está disponível publicamente no GitHub:

https://github.com/viniciusbevilaqua/accessibility-app

Status

Projeto acadêmico — desenvolvimento concluído em sua versão final, com este repositório representando uma versão intermediária.

A versão atualmente publicada contém a base principal da aplicação e suas funcionalidades centrais, enquanto a versão final desenvolvida pela equipe recebeu melhorias adicionais e integração com serviços Firebase.

Licença

Este projeto foi desenvolvido para fins acadêmicos.

Atualmente, nenhuma licença open-source específica foi definida para o repositório.

<p align="center"> Desenvolvido como projeto acadêmico por uma equipe de estudantes de Ciência da Computação. </p> <p align="center"> <strong>Accessibility App</strong> — Tecnologia aplicada à acessibilidade urbana. </p>
