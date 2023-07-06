const result = await fetch("https://ip.me/", {
    "headers": {
        "User-Agent": "curl/7.79.1"
    }
}).then((res) => res.text())

console.log(result);

console.log(process.env);