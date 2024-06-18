import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        // Find user in the database
        const user = await prisma.user.findFirst({
            where: {
                email: email,
                password: password,
            },
        });

        if (user) {
            // Set cookie
            res.setHeader('Set-Cookie', `token=${user.id}; HttpOnly; Path=/; Max-Age=3600`);
            res.status(200).json({ message: 'Login success', user });
        } else {
            res.status(400).json({ message: 'Login failed' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
    