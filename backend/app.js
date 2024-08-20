import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";


const app = express();
dotenv.config();

const corsOptions = {
  origin: 'http://localhost:5173', // Allow this origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow these HTTP methods
  credentials: true // Allow cookies and other credentials
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);

app.post('/reservation/send', (req, res) => {
  // Your route logic here
  res.json({ message: 'Reservation received' });
});
app.get("/", (req, res, next)=>{return res.status(200).json({
  success: true,
  message: "HELLO WORLD AGAIN"
})})



app.use(errorMiddleware);

export default app;
