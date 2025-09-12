export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
        return;
    }

    // Redirect directly to thanks.html
    const THANKS_URL = process.env.THANKS_URL || '/thanks.html';
    res.setHeader('Location', THANKS_URL);
    res.statusCode = 303; // "See Other" — good for POST redirects
    res.end();
}