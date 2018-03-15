/**
 * Created by Bowen
 * Date: 2018-03-05
 */

'use strict';

module.exports = app => {
    return class FootprintController extends app.Controller {
        async where() {
            
            this.ctx.body = await this.service.footprint.findWhere();
        }

        async user() {
            const data = this.ctx.request.body;
            this.ctx.body = await this.service.footprint.findUser(data);
        }
    }
};