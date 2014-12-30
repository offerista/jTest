/**
 * @tableofcontents
 *
 * 1. general
 *    1.1 framework is present
 *    1.2 namespace is present
 * 2. extend
 *    2.1 addClass is present
 *    2.2 removeClass is present
 */

(function ($, win)
{
    'use strict';

    var describe = win.describe,
        it = win.it,
        chai = win.chai,
        assert = chai.assert;

    /* @section 1. general */

    describe('general', function ()
    {
        /* @section 1.1 framework is present */

        it('checks if framework is present', function ()
        {
            assert.isFunction($);
        });

        /* @section 1.2 namespace is present */

        it('checks if namespace is present', function ()
        {
            assert.isObject(jTest);
        });
    });

    /* @section 2. extend */

    describe('extend', function ()
    {
        /* @section 2.1 addClass is present */

        it('checks if addClass() is present', function ()
        {
            assert.isFunction($.fn.addClass);
        });

        /* @section 2.2 removeClass is present */

        it('checks if removeClass() is present', function ()
        {
            assert.isFunction($.fn.removeClass);
        });
    });
})(window.jBone || window.Zepto || window.jQuery, window);