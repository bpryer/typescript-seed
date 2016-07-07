
'use strict'

/**
 * Import Statements
 */
import * as express from 'express'
import * as http from 'http'
import * as bodyParser from 'body-parser'
import * as index from '../routes/index.route'

/**
 * @class WebServer
 * @classdesc express.Express appication object
 */
export class WebServer {
    protected host: string;
    protected port: number;
    protected app: express.Express;

	/**
	 * @constructor
	 * @param {string} host
	 * @param {number} port
	 */
    public constructor(host: string, port: number) {
        this.host = host;
        this.port = port;

        this.app = express();

        return this;
    }

	/**
	 * @function configure
	 * @returns {express.Express} 
	 */
    protected configure(): express.Express {

        // middleware setup
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));

        // server routes setup
        this.app.use('/', index);

        return this.app;
    }

	/**
	 * @function run
	 * @returns http.Server
	 */
    public run(): http.Server {
        let self = this;

        return this.configure().listen(this.port, this.host, () => {
            console.log(`Server listening on ${self.host}: ${self.port}`)
        })
    }
}
