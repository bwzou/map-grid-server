/**
 * Created by Bowen
 * Date: 2018-03-04
 */

'use strict';

const crypto = require("crypto");

module.exports = app => {
    function sha1(str) {
        let md5sum = crypto.createHash('sha1');
        md5sum.update(str);
        str = md5sum.digest('hex');
        return str ;
    }

    return class HomeController extends app.Controller {
        async index() {
            this.ctx.body = 'hi, egg';
        }

        async wxAuth() {
            const query = this.ctx.query;
            let signature = query.signature,
                echostr = query.echostr,
                timestamp = query.timestamp,
                nonce = query.nonce;
            let oriArray = new Array();
            oriArray[0] = nonce;
            oriArray[1] = timestamp;
            oriArray[2] = 'hellolittlelamp20180315';    //这里是你在微信开发者中心页面里填的token
            oriArray.sort();
            let original = oriArray.join('');
            let scyptoString = sha1(original);

            if(signature === scyptoString){
                this.ctx.body = echostr;
                console.log("Confirm and send echo back");
            }else {
                this.ctx.body = "false";
                console.log("Failed!");
            }
        }
    }
};
