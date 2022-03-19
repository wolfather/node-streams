import { RequestListener, ServerResponse } from "http"

export const routes = (
    _req: RequestListener, 
    res: ServerResponse
    ): ServerResponse => {
    return res.end('HELLO');
}