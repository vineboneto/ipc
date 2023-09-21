import net from "net";
import path from "node:path";

const unixSocketPath = path.join(process.cwd(), "app.sock");
const client = net.createConnection({ path: unixSocketPath });

client.on("connect", () => {
  console.log("Conectado ao servidor do Unix Socket");

  // Envie um comando "ping" para o servidor
  client.write("ping");
});

client.on("data", (data) => {
  console.log(`Resposta do servidor: ${data.toString().trim()}`);
});

client.on("end", () => {
  console.log("Desconectado do servidor do Unix Socket");
});
