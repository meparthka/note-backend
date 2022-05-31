import {Router, Req, Res} from "https://deno.land/x/denorest@v2.1/mod.ts"
import Auth from "./auth.ts"

let r = new Router();

// add defauld handler
r.use((req: Req, res: Res) => {
  res.headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  };
});

// set home router
r.all("/", (req: Req, res: Res) => {
  res.reply = JSON.stringify({
    status: true,
    massage: "note api",
  });
});

// set auth router
r.pre("/auth", Auth);

r.all("/note", (req: Req, res: Res) => {
  res.reply = {
    status: "assdasd",
  };
});

export default r;