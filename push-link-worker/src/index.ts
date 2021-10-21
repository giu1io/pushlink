import { handlePullLink, handlePushLinkPost, handlePushLinkGet } from './handler'
import { Router } from 'itty-router'
import { responseError } from './response'

// Create a new router
const router = Router()

router.get('/push/:id', handlePushLinkGet);
router.post('/push/:id', handlePushLinkPost);
router.get('/pull/:id', handlePullLink);

router.all("*", () => responseError(404))

addEventListener('fetch', (event) => {
  event.respondWith(router.handle(event.request))
})
