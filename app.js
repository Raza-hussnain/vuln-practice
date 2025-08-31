const userInput = req.query.id;
const query = "SELECT * FROM users WHERE id = " + userInput; // ❌ Vulnerable
db.query(query, function(err, result) {
  if (err) throw err;
  console.log(result);
});
