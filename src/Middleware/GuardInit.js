'use strict'

/**
 * adonis-guard
 *
 * @license MIT
 * @copyright Slynova - Romain Lanz <romain.lanz@slynova.ch>
 */

const { Guard } = require('@fedemengo/fence')

class GuardInit {
  async handle (ctx, next) {
    const guard = Guard.setDefaultUser(ctx.auth.user || null)

    /**
     * Adding guard in the context
     */
    ctx.guard = guard

    /**
     * Sharing guard with the view
     */
    if (ctx.view && typeof (ctx.view.share) === 'function') {
      ctx.view.share({ guard })
    }

    await next()
  }
}

module.exports = GuardInit
