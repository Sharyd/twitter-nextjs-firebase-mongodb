import { connectDatabase, getAllDocuments } from "../../helpers/db-util";

const handler = async (req, res) => {
  const { method, body } = req;
  let client;

  try {
    client = await connectDatabase();
  } catch (err) {
    res.status(500).json({ message: "Connection to the database failed!" });
    return;
  }

  if (method === "GET") {
    try {
      const data = await getAllDocuments(client, "trending");

      res.status(200).json({ messages: data });
    } catch (err) {
      res.status(500).json({ message: "get trending data failed!" });
      return;
    }
  }

  client.close();
};

export default handler;
