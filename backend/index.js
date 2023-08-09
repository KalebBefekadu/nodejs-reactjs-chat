const express = require("express");
const cors = require("cors");
const {default: axios} = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.post(
      "https://api.chatengine.io/users/",
      { username: username, secret:username, first_name: username },
      { headers: { "private-Key": "562a0995-ca73-4079-a628-060d59d140f6" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
   
  
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
