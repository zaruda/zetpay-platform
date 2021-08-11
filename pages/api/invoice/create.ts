// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuid } from 'uuid';
import services from '../../../services';

export interface CreateInvoiceResponse {
  sessionId: string;
  formToken: string;
  payformUrl: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CreateInvoiceResponse>
) {
  const result = await services.zetpay.createInvoice({
    amount: 1,
    currency: process.env.ZETPAY_CURRENCY_ID as string,
    payway: process.env.ZETPAY_PAYWAY as string,
    shop_id: Number(process.env.ZETPAY_SHOP_ID),
    shop_order_id: uuid()
  });

  const sessionId = result.data.data.data.session_id;

  const tokenResponse = await services.host2host.getFormToken(sessionId);

  const formToken = tokenResponse.data.data.form_token;
  const payformUrl = tokenResponse.data.data.payform_url;

  res.status(200).json({
    sessionId,
    formToken,
    payformUrl
  });
}
