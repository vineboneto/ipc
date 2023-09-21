import net from "node:net";
import path from "node:path";
import fs from "node:fs";

const server = net.createServer();

server.on("connection", (socket) => {
  console.log("connected client");

  socket.on("data", (data) => {
    const command = data.toString().trim();

    if (command === "ping") {
      socket.write("pong");
    }
  });

  socket.on("end", () => {
    console.log("Cliente desconectado");
  });
});

const unixSocketPath = path.join(process.cwd(), "app.sock");
server.listen(unixSocketPath, () => {
  console.log(`Servidor do Unix Socket está ouvindo em ${unixSocketPath}`);
});

process.on("exit", () => {
  console.log("Servidor está sendo encerrado.");
  // Remova o arquivo do socket ao finalizar
  fs.unlinkSync(unixSocketPath);
});

process.on("SIGINT", () => {
  process.exit();
});
