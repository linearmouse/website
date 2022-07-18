import { NextMiddleware, NextResponse } from 'next/server'

export const middleware: NextMiddleware = async (request) => {
  if (new URL(request.url).pathname === '/zh-cn/') {
    return NextResponse.redirect(request.url.replace(/\/zh-cn\//, '/zh-CN/'), { status: 308 })
  }

  return undefined
}
