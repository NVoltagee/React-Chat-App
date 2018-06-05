const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Chatkit = require("@pusher/chatkit-server");

const app = express();

const chatkit = new Chatkit.default({
  instanceLocator: "v1:us1:6d9a326a-188f-46de-a497-785d16179cba",
  key:
    "5677de03-d46d-489e-ad90-429e974cbea7:6JAsZMSwqQgLoHjPw7uwrMH0n0dh+nuYauT/EBzCQXY="
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const PORT = 3001;
app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Running on port ${PORT}`);
  }
});
