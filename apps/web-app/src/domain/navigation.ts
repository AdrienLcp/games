export const PARAMS = {
  gameSlug: 'gameSlug'
} as const

export const ROUTES = {
  home: '/',

  game: `/games/:${PARAMS.gameSlug}`,

  notFound: '/404'
} as const

export const ROUTE_DEFAULT = ROUTES.home

const replaceParam = (route: string, param: string, value: string) => {
  return route.replace(`:${param}`, value)
}

export const getGameRoute = (gameSlug: string) => {
  return replaceParam(ROUTES.game, PARAMS.gameSlug, gameSlug)
}
