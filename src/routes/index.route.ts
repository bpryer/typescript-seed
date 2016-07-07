'use strict'

/**
 * import statements
 */
import * as express from 'express'


/**
 * Express Router
 */
let router = express.Router()

/**
 * @param  {express.Request} function(req
 * @param  {express.Response} res
 */
router.get('/', (req: express.Request, res: express.Response) => {
    res.json({
        message: 'welcome to the index area'
    })
})

export = router
