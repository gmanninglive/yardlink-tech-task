export default async function handler(req, res) {
  if (req.method === "POST") {
    await new Promise((resolve, reject) => {
      console.log(req.body)
      setTimeout(() => {
        res.status(200).json({ Status: "Application Sent" });
      }, 300);
      resolve();
    });
  }
}
