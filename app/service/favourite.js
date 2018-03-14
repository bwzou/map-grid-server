/**
 * Created by Bowen
 * Date: 2018-03-05
 */

'use strict';

module.exports = app => {
    return  class FavouriteService extends app.Service {
        async index() {
            this.ctx.body = 'hi, egg';
        }
    }
};