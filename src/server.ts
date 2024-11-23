import { app } from "./app";

const port = process.env.PORT ? Number(process.env.PORT) : 3334;

app.listen({
  host: '0.0.0.0',
  port: port,
}).then(() => {
  console.log(`HTTP Server Running at PORT ${port}`);
});