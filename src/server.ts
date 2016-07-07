'use strict'

/**
 * Import Statements
 */
import { WebServer } from './server/web.server'

// create instance of WebServer
let webServer = new WebServer('0.0.0.0', 3000)

// run WebServer
webServer.run()
