# ♿ Accessibility App

> Aplicativo mobile desenvolvido para auxiliar na identificação, avaliação e consulta de condições de acessibilidade em espaços urbanos.

Projeto desenvolvido em equipe como parte de uma atividade acadêmica do curso de Ciência da Computação.

---

## 📌 Sobre o Projeto

O **Accessibility App** permite que os usuários consultem locais e suas respectivas condições de acessibilidade, além de realizar avaliações e contribuir com novas informações. 

A aplicação foi projetada para facilitar a identificação de recursos inclusivos em diferentes espaços, permitindo uma consulta prévia antes de visitar determinado local.

---

## 🚀 Funcionalidades

- **Autenticação:** Login e cadastro de usuários via e-mail e senha.
- **Mapeamento:** Mapa interativo exibindo os locais cadastrados.
- **Consulta:** Detalhes e informações sobre recursos de acessibilidade por local.
- **Busca:** Filtros avançados para localização de estabelecimentos.
- **Avaliações:** Sistema de notas, comentários e verificação de recursos.
- **Cadastro:** Inclusão de novos pontos de interesse no mapa.
- **Ranking:** Classificação dos locais mais bem avaliados/acessíveis.
- **Perfil & Configurações:** Gestão das preferências e dados do usuário.

### 📝 Processo de Avaliação de Locais

Para simplificar a experiência do usuário, a avaliação é dividida em etapas e engloba:
1. Nota de **1 a 5 estrelas**.
2. Seleção de **recursos de acessibilidade** disponíveis.
3. **Comentários** e observações detalhadas.
4. Informações gerais do local.

---

## 🛠️ Tecnologias Utilizadas

- **Linguagem / Frameworks:** JavaScript, React, React Native, Expo
- **UI Components & Mapas:** React Native Maps, React Native Paper
- **Backend & Autenticação:** Firebase Authentication, Cloud Firestore

> **Nota de Navegação:** A navegação entre as telas foi implementada através de um **sistema próprio de roteamento**, sem a utilização de bibliotecas externas como React Navigation.

---

### 📂 Estrutura do Projeto

```text
accessibility-app/
├── assets/       # Imagens, ícones e fontes
├── components/   # Componentes reutilizáveis
├── data/         # Mock data e constantes
├── screens/      # Telas da aplicação
├── theme/        # Estilos globais e tema visual
│
├── App.js        # Ponto de entrada da aplicação
├── app.json      # Configurações do Expo
├── index.js      # Registro da aplicação
├── package.json  # Dependências e scripts
└── README.md     # Documentação
```

### 📱 Principais Telas

- `HomeScreen`
- `MapScreen`
- `DetailsScreen`
- `EvaluateScreen`
- `CreatePlaceScreen`
- `AddressScreen`
- `ConfirmScreen`
- `RankingScreen`
- `ProfileScreen`
- `LoginScreen`

---

## 🔥 Integração com Firebase

Na versão final do projeto, foram integrados serviços do Firebase para gerenciamento de dados e autenticação:

- **Firebase Authentication:** Cadastro, login e autenticação de usuários via e-mail e senha.
- **Cloud Firestore:** Banco de dados NoSQL utilizado para armazenamento dos locais, avaliações e perfis de usuário.

---

## 👨‍💻 Minha Contribuição

> **Vinícius Sobreira Bevilaqua**

Minhas principais responsabilidades individuais no desenvolvimento do projeto foram:
- Desenvolvimento do fluxo e tela de **Login**
- Implementação do sistema de **Ranking**
- Desenvolvimento da tela de **Configurações**
- Atuação no desenvolvimento colaborativo e integração geral do sistema

---

## 👥 Equipe

O **Accessibility App** foi desenvolvido por uma equipe de **5 estudantes de Ciência da Computação**, atuando de forma colaborativa.

---

## 🔧 Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/)
- **npm** (incluso com o Node.js)
- [Expo CLI](https://docs.expo.dev/)

---

### Passo a Passo

1. **Clone o repositório:**  
   `git clone https://github.com/viniciusbevilaqua/accessibility-app.git`

2. **Acesse a pasta do projeto:**  
   `cd accessibility-app`

3. **Instale as dependências:**  
   `npm install`

4. **Inicie o projeto:**  
   `npx expo start`

---

### Execução

Abra o projeto através do aplicativo **Expo Go** no celular (via *QR Code*) ou utilizando um emulador Android/iOS.

> ⚠️ **Observação**  
> Este repositório contém uma versão do projeto anterior à versão final apresentada pela equipe. Algumas funcionalidades, aprimoramentos de UI e a integração completa com o **Firebase Authentication** e **Cloud Firestore** foram refinados posteriormente na entrega oficial.
   
