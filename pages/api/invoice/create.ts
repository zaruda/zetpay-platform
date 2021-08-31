// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { api as fetchTokens } from '@zaruda/zetpay-core';

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const data = await fetchTokens();

  res.status(200).json(data);
}
