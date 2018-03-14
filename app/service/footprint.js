/**
 * Created by Bowen
 * Date: 2018-03-05
 */

'use strict';

module.exports = app => {
    return class UserService extends app.Service {
        async findWhere() {
            return await this.ctx.model.Footprint.find({});
        }

        async findUser(cond) {
            return await this.ctx.model.Footprint.find({"openId":cond});
        }


    }
};