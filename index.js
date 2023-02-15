import Koa from "koa";
import koaBody from "koa-body";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/prueba_Koa");
const app = new Koa();

app.use(koaBody());

app.use((ctx) => {
  ctx.res.status = 404;
  ctx.body = {
    status: "Not found",
    message: "Route not found",
  };
});

app.use(router.routes());

app.listen(8080);
console.log("Servidor en el puerto 8080");
