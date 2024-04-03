import type { NextApiRequest, NextApiResponse } from 'next'
 import { TestUsers, user } from '@component/app/testUsers'
type ResponseData = any
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json(TestUsers)
}