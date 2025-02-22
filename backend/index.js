const express = require("express");
const AuthRouter = require("./Routes/AuthRouter");

require("dotenv").config();
require("./model/db");
const bodyparser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyparser.json());
app.use(cors());
app.use("/auth", AuthRouter);


app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  try {
    let newOrders = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrders.save();
    res.send("Order saved!");
  } catch (error) {
    res.status(500).json({ message: "Error saving order", error });
  }
});

app.get("/buyOrders", async (req, res) => {
  try {
    const buyOrders = await OrdersModel.find({ mode: "BUY" });
    res.json(buyOrders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching buy orders", error });
  }
});

app.delete("/deleteOrder/:id", async (req, res) => {
  const orderId = req.params.id;

  try {
    await OrdersModel.findByIdAndDelete(orderId);
    res.status(200).send({ message: "Order deleted successfully!" });
  } catch (error) {
    res.status(500).send({ message: "Error deleting order", error });
  }
});

app.get("/ping", async (req, res) => {
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
