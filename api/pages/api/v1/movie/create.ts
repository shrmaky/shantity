import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

import {
  MovieData,
  V1CreateMovieRequestBody,
  //V1CreateMovieResponse,
} from '@shantity/api-sdk';

const prisma = new PrismaClient();

export default async function (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<any> {
  const body: V1CreateMovieRequestBody = req.body;

  const { director, yearReleased, movieName }: MovieData = body.data;

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
