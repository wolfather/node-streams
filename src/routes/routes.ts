import { RequestListener, ServerResponse } from "http"

export const routes = (_req: RequestListener, res: ServerResponse) => {
    return res.end('HELLO')
}