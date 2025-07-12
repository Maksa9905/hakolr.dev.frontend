import { checkAccessTokenMiddleware } from './middlewares/checkAccessTokemMiddleware'
import { setAccessTokenMiddleware } from './middlewares/setAccessTokenMiddleware'
import { stackMiddlewares } from './middlewares/stackHandler'

const middlewares = [setAccessTokenMiddleware, checkAccessTokenMiddleware]
export default stackMiddlewares(middlewares)

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|fonts/|.*\\..*$).*)'],
}
