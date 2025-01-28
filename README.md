<!-- TODO -->

- [ ] Testar endpoints - Concentrar nos Principais do Escopo
- [ ] Colocar o Zustand(persist) como BD ou Server (json-server / MockServer)
- [ ] Avaliar adicionar React form hooks
- [ ] Completar os dados que faltam das telas
- [ ] Linkar melhor as telas
- [ ] Ajustar as telas pra ser rota ou Modal
- [ ] Melhorar Visual, já que sou Frontend

# Projeto de Sistema de Notificações

link: https://notification-project-test.vercel.app/

## Descrição Geral
Este projeto é uma aplicação para gerenciamento de notificações em diferentes canais (Web Push, E-mail e SMS). A solução permite que os usuários criem aplicativos, configurem canais de integração e gerenciem o envio e histórico de notificações, com suporte a dados mockados para simular o retorno dos endpoints.

### Tecnologias Utilizadas
- **Next.js**: Framework principal para o desenvolvimento da aplicação.
- **TypeScript**: Adiciona tipagem estática para maior segurança e produtividade.
- **Zustand**: Gerenciamento global de estado.
- **NextAuth**: Implementação de autenticação (Google e e-mail/senha).
- **TailwindCSS**: Estilização rápida e customizável.
- **React Query**: Para gerenciamento de estados assíncronos, utilizado opcionalmente com os dados mockados.

### Funcionalidades Principais

#### 1. Tela de Cadastro/Login
- Permite cadastro/login via Google ou e-mail/senha.
- Suporte a dados do usuário: e-mail, nome, empresa (opcional), telefone (opcional), endereço (opcional) e senha.
- Login automático pode ser habilitado.

#### 2. Tela de Configuração
- Permite criar aplicativos para integração.
- Configuração dos canais desejados: Web Push, E-mail e SMS.

#### 3. Tela de Setup Web Push
- Configuração do envio de notificações Web Push:
  - Nome e endereço do site.
  - Personalização de mensagens de permissão e boas-vindas.

#### 4. Tela de Setup E-mail
- Configuração do servidor SMTP para envio de e-mails:
  - Dados do servidor e envio.
  - Upload de templates HTML.

#### 5. Tela de Setup SMS
- Configuração do provedor de SMS integrado:
  - Login e senha.

#### 6. Tela de Histórico de Notificações
- Resumo das notificações enviadas.
- Filtros por período, canal e origem.
- Exportação de dados em PDF e Excel.
- Visualização detalhada de uma notificação.

#### 7. Tela de Envio Manual de Notificações
- Envio manual de notificações para os canais configurados:
  - Web Push, SMS e E-mail.
  - Preenchimento de dados da mensagem para cada canal.

## Estrutura do Projeto
```
/
|-- components/     # Componentes reutilizáveis
|-- pages/          # Páginas do Next.js
|-- styles/         # Arquivos de estilização com TailwindCSS
|-- stores/         # Configurações de Zustand para gerenciamento de estado
|-- mocks/          # Dados mockados para simulação dos endpoints
|-- utils/          # Funções utilitárias
```

## Execução do Projeto

### Requisitos
- Node.js (versão 22.x ou superior)
- Gerenciador de pacotes (npm ou yarn)

### Passos para Execução
1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_PROJETO>
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Acesse a aplicação em: [http://localhost:3000](http://localhost:3000)

### Dados Mockados
Os dados retornados pelos endpoints são simulados utilizando mocks definidos na pasta `/mocks`. Caso necessário, altere os mocks para testar diferentes cenários.

## Contribuições
Sinta-se à vontade para abrir issues ou pull requests para melhorias e correções. Todos os feedbacks são bem-vindos!

---
Projeto desenvolvido com foco em funcionalidades simuladas para demonstração e aprendizado.

