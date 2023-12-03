import express from "express"
import { router } from "./infra/routers";

const app = express();
app.use(express.json());

const PORT = process.env.PORT ?? 3003;

app.use(router)

app.listen(PORT, () => console.log(`Server product is running on PORT ${PORT}`))
