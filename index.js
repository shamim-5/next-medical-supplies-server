const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

require("dotenv").config();

const port = process.env.PORT || 9000;
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.hvfqmi4.mongodb.net/?retryWrites=true&w=majority`;
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

    app.get("/products", async (req, res) => {
      const { field, searchTerm } = req.query;
      let query = {};

      // if (field && searchTerm) {
      //   query[field] = { $regex: searchTerm, $options: "i" };
      // } else if (field) {
      //   query[field] = "";
      // } else if (searchTerm) {
      //   query = {
      //     $or: [{ title: { $regex: searchTerm, $options: "i" } }, { author: { $regex: searchTerm, $options: "i" } }],
      //   };
      // } else {
      //   query = {};
      // }

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
      const book = await productCollection.findOne(query);

      res.status(200).send(book);
    });

    app.post("/products", async (req, res) => {
      const book = req.body;
      const result = await productCollection.insertOne(book);

      res.status(200).send(result);
    });

    app.patch("/products/:id", async (req, res) => {
      const id = req.params.id;
      const book = req.body;
      const filter = { _id: new ObjectId(id) };

      const bookId = book._id ? { _id: new ObjectId(book._id) } : {};

      const updatedBook = {
        $set: {
          ...book,
          ...bookId,
        },
      };
      const result = await productCollection.updateOne(filter, updatedBook);

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
      const result = await reagentCollection.find({}).toArray();

      res.status(200).send(result);
    });

    // consumables collection
    app.get("/consumables", async (req, res) => {
      const result = await consumableCollection.find({}).toArray();

      res.status(200).send(result);
    });

    // medical-equipments collection;
    app.get("/medical-equipments", async (req, res) => {
      const result = await medicalEquipmentCollection.find({}).toArray();

      res.status(200).send(result);
    });

    // shop-details collection;
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
