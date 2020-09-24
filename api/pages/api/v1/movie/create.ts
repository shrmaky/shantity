import { PrismaClient } from '@prisma/client';
import {
  MovieData,
  V1CreateMovieRequestBody,
  V1CreateMovieResponse
} from '@shantity/api-sdk';
import { NextApiRequest, NextApiResponse } from 'next';

type APIResponse = NextApiResponse & V1CreateMovieResponse;

const prisma = new PrismaClient();

export default async function (
  req: NextApiRequest,
  res: APIResponse,
): Promise<void> {
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
