# Exemplo de IPC com Unix Sockets em Node.js

O IPC (Inter-Process Communication) refere-se à capacidade de troca de informações entre processos em um sistema operacional. O IPC é importante em cenários onde a comunicação e a coordenação entre processos são necessárias.

## Casos de Uso do IPC

### 1. Comunicação entre Aplicativos

O IPC permite que aplicativos independentes se comuniquem e compartilhem informações. Isso é útil em sistemas onde diferentes componentes ou aplicativos precisam trabalhar juntos para realizar tarefas complexas.

### 2. Compartilhamento de Recursos

O IPC é usado para compartilhar recursos, como arquivos ou dispositivos, entre processos. Isso permite que vários processos acessem e manipulem os mesmos recursos de forma segura.

### 3. Paralelismo e Multithreading

Em ambientes de programação paralela e multithreading, o IPC é essencial para a sincronização e comunicação entre threads e processos para evitar condições de corrida e garantir a consistência dos dados.

### 4. Comunicação Cliente-Servidor

Em sistemas cliente-servidor, o IPC permite que os clientes se comuniquem com os servidores para solicitar serviços, transferir dados e obter respostas.

## Por que o IPC é Importante

O IPC desempenha um papel fundamental em sistemas operacionais e aplicativos modernos, tornando possível a criação de sistemas robustos e eficientes. Permite a colaboração entre processos, o compartilhamento de recursos e a construção de sistemas escaláveis.

Neste repositório, demonstramos um exemplo simples de como usar Unix sockets para IPC em Node.js, ilustrando a importância do IPC na construção de aplicativos e sistemas interativos.

## Uso

1. Clone este repositório:

```bash
git clone https://github.com/vineboneto/ipc.git
```

2. Vá para o diretório do projeto:

```bash
cd ipc
```

3. Instale as dependências:

pnpm i

4. Execute o servidor e o cliente em terminais separados:

- Servidor:

  ```
  node server.mjs
  ```

- Cliente:

  ```
  node client.mjs
  ```

Siga as instruções no console para interagir com o exemplo de IPC de ping-pong.

## Estrutura do Projeto

- `server.js`: Código-fonte do servidor.
- `client.js`: Código-fonte do cliente.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para criar solicitações de pull para melhorar este exemplo.

## Licença

Este projeto é licenciado sob a Licença MIT.

## Autor

- [Vinicius](https://github.com/vineboneto) - Autor principal

## Agradecimentos

- [OpenAI](https://openai.com) - Pelo modelo GPT-3 que gerou este exemplo de documentação.

## Recursos Adicionais

- [Node.js](https://nodejs.org)
- [Documentação dos Sockets Unix no Node.js](https://nodejs.org/api/net.html#net_unix_domain_socket_support)
