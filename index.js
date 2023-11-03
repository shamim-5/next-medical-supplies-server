const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

require("dotenv").config();

const port = process.env.PORT || 9000;
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

const uri =
  process.env.DB_URI ||
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.hvfqmi4.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const productCollection = client.db("nb_surgical").collection("products");
    const topProductCollection = client.db("nb_surgical").collection("top-rated-products");
    const reagentCollection = client.db("nb_surgical").collection("reagents");
    const consumableCollection = client.db("nb_surgical").collection("consumables");
    const medicalEquipmentCollection = client.db("nb_surgical").collection("medical-equipments");
    const shopDeatailCollection = client.db("nb_surgical").collection("shop-details");

    const cartItemsCollection = client.db("nb_surgical").collection("cart-items");
    const ordersCollection = client.db("nb_surgical").collection("orders");

    app.get("/products", async (req, res) => {
      const { field, searchTerm } = req.query;
      let query = {};

      if (field && searchTerm) {
        query[field] = { $regex: searchTerm, $options: "i" };
      } else if (field) {
        query[field] = "";
      } else if (searchTerm) {
        query = {
          $or: [{ title: { $regex: searchTerm, $options: "i" } }, { author: { $regex: searchTerm, $options: "i" } }],
        };
      } else {
        query = {};
      }

      try {
        const products = await productCollection.find(query).toArray();
        res.status(200).send(products);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while fetching products." });
      }
    });

    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };

      const item = await productCollection.findOne(query);
      res.status(200).send(item);
    });

    app.post("/products", async (req, res) => {
      const item = req.body;

      const result = await productCollection.insertOne(item);
      res.status(200).send(result);
    });

    app.patch("/products/:id", async (req, res) => {
      const id = req.params.id;
      const item = req.body;
      const filter = { _id: new ObjectId(id) };

      const itemId = item._id ? { _id: new ObjectId(item._id) } : {};

      const updateditem = {
        $set: {
          ...item,
          ...itemId,
        },
      };

      const result = await productCollection.updateOne(filter, updateditem);
      res.status(200).send(result);
    });

    app.delete("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productCollection.deleteOne(query);

      res.status(200).send(result);
    });

    // top-rated-product collection
    app.get("/top-products", async (req, res) => {
      const result = await topProductCollection.find({}).toArray();

      res.status(200).send(result);
    });

    // reagents collection
    app.get("/reagents", async (req, res) => {
      const { field, searchTerm } = req.query;
      let query = {};

      if (field && searchTerm) {
        query[field] = { $regex: searchTerm, $options: "i" };
      } else if (field) {
        query[field] = "";
      } else if (searchTerm) {
        query = {
          $or: [{ title: { $regex: searchTerm, $options: "i" } }, { author: { $regex: searchTerm, $options: "i" } }],
        };
      } else {
        query = {};
      }

      try {
        const result = await reagentCollection.find(query).toArray();
        res.status(200).send(result);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while fetching products." });
      }
    });

    // consumables collection
    app.get("/consumables", async (req, res) => {
      const { field, searchTerm } = req.query;
      let query = {};

      if (field && searchTerm) {
        query[field] = { $regex: searchTerm, $options: "i" };
      } else if (field) {
        query[field] = "";
      } else if (searchTerm) {
        query = {
          $or: [{ title: { $regex: searchTerm, $options: "i" } }, { author: { $regex: searchTerm, $options: "i" } }],
        };
      } else {
        query = {};
      }

      try {
        const result = await consumableCollection.find(query).toArray();
        res.status(200).send(result);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while fetching products." });
      }
    });

    // medical-equipments collection;
    app.get("/medical-equipments", async (req, res) => {
      const { field, searchTerm } = req.query;
      let query = {};

      if (field && searchTerm) {
        query[field] = { $regex: searchTerm, $options: "i" };
      } else if (field) {
        query[field] = "";
      } else if (searchTerm) {
        query = {
          $or: [{ title: { $regex: searchTerm, $options: "i" } }, { author: { $regex: searchTerm, $options: "i" } }],
        };
      } else {
        query = {};
      }

      try {
        const result = await medicalEquipmentCollection.find(query).toArray();
        res.status(200).send(result);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while fetching products." });
      }
    });

    // cart-items collection api
    app.get("/cart-items", async (req, res) => {
      const result = await cartItemsCollection.find({}).toArray();

      res.status(200).send(result);
    });

    app.get("/cart-items/:email", async (req, res) => {
      const email = req.params.email;

      try {
        const result = await cartItemsCollection.find({ email }).toArray();
        res.status(200).send(result);
      } catch (error) {
        res.status(500).send("Error retrieving data");
      }
    });

    app.post("/cart-items", async (req, res) => {
      const items = req.body;

      const result = await cartItemsCollection.insertOne(items);
      res.status(200).send(result);
    });

    app.delete("/cart-items/:orderId", async (req, res) => {
      const orderId = req.params.orderId;
      const filter = { _id: new ObjectId(orderId) };

      const result = await cartItemsCollection.deleteOne(filter);
      res.status(200).send(result);
    });

    // orders collection api

    app.get("/orders", async (req, res) => {
      const query = {};

      try {
        const result = await ordersCollection.find(query).toArray();
        res.status(200).send(result);
      } catch (error) {
        res.status(500).send("Error retrieving data");
      }
    });

    app.get("/orders/:email", async (req, res) => {
      const email = req.params.email;

      try {
        const result = await ordersCollection.find({ email }).toArray();
        res.status(200).send(result);
      } catch (error) {
        res.status(500).send("Error retrieving data");
      }
    });

    app.post("/orders", async (req, res) => {
      const items = req.body;
      const orderId = items._id ? { _id: new ObjectId(items._id) } : {};

      const result = await ordersCollection.insertOne({ ...items, ...orderId });
      res.status(200).send(result);
    });

    app.patch("/orders/:id", async (req, res) => {
      const id = req.params.id;
      const order = req.body;
      const filter = { _id: new ObjectId(id) };
      const orderId = order._id ? { _id: new ObjectId(order._id) } : {};

      const updatedOrder = {
        $set: {
          ...order,
          ...orderId,
        },
      };

      const result = await ordersCollection.updateOne(filter, updatedOrder);
      res.status(200).send(result);
    });

    // shop-details collection api;
    app.get("/shop-details", async (req, res) => {
      const result = await shopDeatailCollection.find({}).toArray();

      res.status(200).send(result);
    });
  } finally {
    // do nothing
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Next-Medical-Supplies server connected");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
