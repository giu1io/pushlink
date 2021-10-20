export const headers = {
    'Content-Type': 'application/json'
}

export function responseOk(body: Record<string, unknown>): Response {
    return new Response(JSON.stringify({
        status: 'ok',
        ...body
    }), {headers})
}

export function responseError(code: number): Response {
    return new Response(JSON.stringify({
        status: 'error',
        code: `${code}`
    }), {
        headers,
        status: code
    })
}