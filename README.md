
# Rango App Mobile - Lista de Restaurantes

Este projeto é um aplicativo móvel desenvolvido com React Native, destinado a listar restaurantes, permitindo o cadastro, edição e exclusão de restaurantes, bem como a visualização de detalhes com imagens.

## Funcionalidades

- **Tela de Boas-Vindas**: Exibe um banner com a descrição e um botão para acessar a lista de restaurantes.
- **Tela de Restaurantes**: Exibe uma lista de restaurantes com a opção de editar ou excluir cada um. Também é possível adicionar novos restaurantes.
- **Tela de Cadastro/Editar Restaurante**: Permite o cadastro de novos restaurantes ou edição de existentes, incluindo nome, descrição e imagem.
  
## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis nativos.
- **React Navigation**: Biblioteca para navegação entre telas.
- **Axios**: Para fazer requisições HTTP ao backend.
- **Expo**: Utilizado para desenvolver, testar e publicar o aplicativo.
- **ImagePicker (Expo)**: Para permitir a seleção de imagens da galeria.

## Pré-requisitos

Antes de começar, verifique se você tem o seguinte instalado:

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [React Native Environment Setup](https://reactnative.dev/docs/environment-setup)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/rango-app.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd rango-app
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o aplicativo:

   ```bash
   expo start
   ```

5. Caso seja necessário instalar o CLI Expo Globalmente:

   ```bash
   npm install -g expo-cli
   ```
6. Outras bibliotecas necessárias:

   ```bash
   npm install axios @react-native-picker/picker
   npx expo install @react-navigation/native @react-navigation/stack
   npm install react-native-dropdown-picker

   ```
## Backend

Este aplicativo consome dados de um backend RESTful. O backend pode ser executado localmente ou em um servidor. Para configurar o backend, certifique-se de que o servidor esteja funcionando na URL definida no arquivo `services/api.js` (Configurando o IP da sua máquina, ex: `http://123.456.0.22:8080`).

### Endpoints da API

- `GET /restaurantes`: Retorna a lista de restaurantes.
- `POST /restaurantes`: Cria um novo restaurante.
- `PUT /restaurantes/{id}`: Atualiza um restaurante existente.
- `DELETE /restaurantes/{id}`: Deleta um restaurante.

## Estrutura de Arquivos

- **src/screens**: Contém as telas do aplicativo (HomeScreen, RestaurantsScreen, RestaurantFormScreen).
- **src/services**: Contém o arquivo de configuração da API (`api.js`).
- **assets**: Contém os recursos como imagens para o banner e logo.

## Como Usar

1. **Tela Inicial**: Ao abrir o aplicativo, você verá a tela de boas-vindas com um banner e um botão "Ver Restaurantes". Ao clicar nesse botão, você será direcionado para a lista de restaurantes.
   
2. **Tela de Restaurantes**: Aqui você verá a lista de restaurantes cadastrados. Você pode editar ou excluir restaurantes. Para adicionar um novo restaurante, clique no ícone no canto superior direito.

3. **Tela de Cadastro/Editar Restaurante**: Se você estiver criando ou editando um restaurante, preencha os campos obrigatórios (nome, descrição e imagem) e clique em "Salvar Restaurante" ou "Atualizar Restaurante".

