# Notícias 🚀

Aplicativo mobile desenvolvido em **React Native** com **Expo**, que consome a **GNews API** para exibir notícias em tempo real. Este projeto é um teste técnico, demonstrando habilidades em **TypeScript, APIs, navegação e arquitetura mobile**.

---

## Tecnologias utilizadas

- **React Native** – Desenvolvimento mobile multiplataforma
- **Expo** – Facilita build e deploy do app
- **TypeScript** – Tipagem estática para maior segurança
- **NativeWind / Tailwind CSS** – Estilização rápida e responsiva
- **React Navigation / Expo Router** – Navegação entre telas
- **GNews API** – Fonte de notícias em tempo real
- **React Native Reanimated** – Animações suaves
- **Safe Area Context** – Suporte a áreas seguras de dispositivos

---

## Funcionalidades

- Exibição de notícias em lista com **FlatList**
- Barra de busca para filtrar notícias
- Loading e tratamento de erros
- Detalhes da notícia ao clicar
- Arquitetura baseada em **Context API** para gerenciamento de estado

---

## Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/DersonSilva/noticias.git
cd noticias
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Configure a API Key da GNews: Crie um arquivo `.env` na raiz do projeto:

```
GNEWS_API_KEY=your_api_key
GNEWS_BASE_URL=https://gnews.io/api/v4
```

4. Rode o projeto:

```bash
npx expo start
```

---

## Como instalar o APK (Android)

1. Baixe o arquivo `noticias.apk` enviado.
2. Habilite a opção **Instalar de fontes desconhecidas** no dispositivo: Configurações → Segurança → Permitir instalação de fontes desconhecidas.
3. Abra o APK e siga as instruções de instalação.
4. Abra o app e teste todas as funcionalidades.

> Recomendado Android 10+ para melhor desempenho.

---

---

---

## 📄 Sobre o Projeto

O **Notícias App** é um aplicativo mobile desenvolvido com foco em **performance**, **boas práticas** e **excelente experiência do usuário**.  
Ele consome dados em tempo real da **GNews API**, exibindo manchetes atualizadas de forma simples, rápida e intuitiva.

O projeto demonstra habilidades sólidas em **React Native**, **TypeScript**, **arquitetura mobile moderna**, **consumo de APIs REST**, **tratamento de erros**, e **design responsivo**.  
Além disso, todo o processo de **build e geração do APK** foi realizado com o **Expo**, seguindo práticas profissionais de empacotamento e distribuição de aplicativos Android.

---

## 🧠 Aprendizados e Boas Práticas Aplicadas

Durante o desenvolvimento, foram aplicados conceitos essenciais para a construção de aplicações robustas e escaláveis:

- 📂 **Arquitetura modular**: organização clara de pastas, componentes e contextos
- ⚙️ **Tratamento de erros** e gerenciamento de estados de carregamento
- 🧾 **Tipagem forte com TypeScript** para maior segurança e manutenção do código
- 🌐 **Integração otimizada com APIs REST**, utilizando `fetch` com controle de cancelamento de requisições
- 📱 **Build e empacotamento via Expo**, com configuração completa para geração do APK final
- 🎨 **Estilização moderna com NativeWind (Tailwind CSS)**, garantindo responsividade e consistência visual

---
