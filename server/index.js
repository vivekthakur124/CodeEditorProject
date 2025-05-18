const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { exec } = require("child_process");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/run", (req, res) => {
  const { code, inputs } = req.body;

  const inputStr = inputs.join("\n");
  fs.writeFileSync("temp.py", code);
  fs.writeFileSync("input.txt", inputStr);

  exec("python temp.py < input.txt", (err, stdout, stderr) => {
    if (err) {
      return res.json({ output: stderr || "Error executing code." });
    }
    res.json({ output: stdout });
  });
});

// ✅ Serve frontend files from client/build
app.use(express.static(path.join(__dirname, "..", "client", "build")));

// ✅ Catch-all route for frontend routing
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
