import express from "express";

// express server 초기화
const app = express();

app.get("/api", (req, res) => {
	const path = `/api/item/${v4()}`;
	res.setHeader("Content-Type", "text/html");
	res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
	res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

export default app;
