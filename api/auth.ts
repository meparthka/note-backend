import { Req, Res, Router } from "https://deno.land/x/denorest@v2.1/mod.ts";
import jsonCheck from "../middleware/rfieldjson.ts";
import users from "../model/user.ts";

let r = new Router();

// auth handler
r.all("/", (req: Req, res: Res) => {
  res.reply = JSON.stringify({
    status: true,
    api: "auth",
  });
});

// login handler
r.all("/login", (req: Req, res: Res) => {
  res.reply = JSON.stringify({
    status: true,
    api: "login",
  });
});

// register handler
r.all("/register", async (req: Req, res: Res) => {
  let body = await jsonCheck(req, ["fullname", "username", "password"]);
  if (body.invalid) {
    res.reply = JSON.stringify({
      status: false,
      api: "field error",
    });
    return;
  }

  users.insertOne({
    fullname: body.fullname,
    username: body.username,
    password: body.password,
  }).then((e) => {
    
  }).catch((e) => {

  });

  res.reply = JSON.stringify({
    status: true,
    api: "register",
  });
});

export default r;
