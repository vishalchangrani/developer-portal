// Endpoint we call at ...endpoint/flips.json
import type {LoaderFunction} from '@remix-run/node'
import {redisCache} from '~/utils/redis.server'
import {commitShaKey as refreshCacheCommitShaKey} from './action/refresh-cache'

export const loader: LoaderFunction = async () => {
  const shaInfo = await redisCache.get(refreshCacheCommitShaKey) // hardcoded for now, future query api for github client
  const data = JSON.stringify(shaInfo)
  return new Response(data, {
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': String(Buffer.byteLength(data)),
    },
  })
}