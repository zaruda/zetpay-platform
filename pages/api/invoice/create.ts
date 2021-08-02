// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import services from '../../../services';
import { ICreateInvoiceResponse } from '../../../services/Zetpay/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICreateInvoiceResponse>
) {
  const result = await services.zetpay.createInvoice({
    amount: 1,
    currency: process.env.ZETPAY_CURRENCY_ID as string,
    payway: process.env.ZETPAY_PAYWAY as string,
    shop_id: Number(process.env.ZETPAY_SHOP_ID),
    shop_order_id: '4126'
  });

  const sessionId = result.data.data.data.session_id;

  // const data = await services.host2host.getFormToken(sessionId)

  // console.log(data)

  res.status(200).json(result.data);
}
