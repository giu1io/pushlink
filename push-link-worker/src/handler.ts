import { Request as IffyRequest } from 'itty-router'
import { responseError, responseOk } from './response'

type RoutedRequest = IffyRequest & Request

export async function handlePullLink(request: RoutedRequest): Promise<Response> {
  const id = request.params?.id;

  if(!id) {
    return responseError(400)
  }

  const dbUrl = await KV.get(id)

  const url = dbUrl ? dbUrl : `${LANDING_BASE_URL}/private/${id}`

  return Response.redirect(url, 302)
}

export async function handlePushLinkGet(request: RoutedRequest): Promise<Response> {
  const id = request.params?.id;

  if(!id || !request.query?.url) {
    return responseError(400)
  }

  await KV.put(id, request.query?.url)

  return Response.redirect(request.query?.url, 302)
}

export async function handlePushLinkPost(request: RoutedRequest): Promise<Response> {
  const id = request.params?.id;

  if(!id || request.headers.get('Content-Type') !== 'application/json') {
    return responseError(400)
  }

  const json = await request.json()

  if(!json.url) {
    return responseError(400)
  }
  
  await KV.put(id, json.url)

  return responseOk({})
}
