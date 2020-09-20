import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { data }: { data: any } = req.body;

  const { director, yearReleased, movieName, status } = data;

  if (status == '1') {
    try {
      await prisma.movie.create({
        data: {
          director,
          yearReleased,
          movieName,
        },
      });
    } catch (e) {
      return res.status(400).json({ msg: 'Please send valid data' });
    }
    return res.status(200).json({ msg: 'Successful' });
  }

  return res.status(404).json({ msg: 'Invalid Data' });
}
