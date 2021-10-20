import { handlePullLink, handlePushLink } from './handler'
import { Router } from 'itty-router'
import { responseError } from './response'

// Create a new router
const router = Router()

router.post('/push/:id', handlePushLink);
router.get('/pull/:id', handlePullLink);

router.all("*", () => responseError(404))

addEventListener('fetch', (event) => {
  event.respondWith(router.handle(event.request))
})
