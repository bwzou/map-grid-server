'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/where/footprint', controller.footprint.where);
    router.get('/user/footprint',controller.footprint.user);

};
