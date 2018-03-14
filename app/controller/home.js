/**
 * Created by Bowen
 * Date: 2018-03-04
 */

'use strict';

module.exports = app => {
    return class HomeController extends app.Controller {
        async index() {
            this.ctx.body = 'hi, egg';
        }
    }
};
