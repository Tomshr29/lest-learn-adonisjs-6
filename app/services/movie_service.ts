import app from '@adonisjs/core/services/app'
import { readdir } from 'fs'

export default class MovieService {
  static async getSlugUrl(slug: string) {
    if (!slug.endsWith('.md')) {
      slug += '.md'
    }

    return app.makeURL(`resources/movies/${slug}`)
  }

  static async getSlugs() {
    const files = await readdir(app.makeURL('resources/movies'))
  }
}
