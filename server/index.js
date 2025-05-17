// server/index.js
const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


app.post("/run", (req, res) => {
  const { code, inputs } = req.body;

  const inputStr = (inputs || []).join("\n");

  fs.writeFileSync("temp.py", code);
  fs.writeFileSync("input.txt", inputStr);

  exec("python temp.py < input.txt", (err, stdout, stderr) => {
  console.log("Executing script...");
  if (err) {
    console.error("Exec error:", err);
    return res.json({ output: stderr || err.message || "Error executing code." });
  }
  res.json({ output: stdout });
});

});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
