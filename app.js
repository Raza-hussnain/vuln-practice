// Fixed SQL Injection Example
const userInput = req.query.id;
const query = "SELECT * FROM users WHERE id = ?";
db.query(query, [userInput], function(err, result) { // ✅ Safe
  if (err) throw err;
  console.log(result);
});
