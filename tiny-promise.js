var slice = Array.prototype.slice;

// args: (context, fn, arg0 .. argn)
// - context.fn(arg0 .. argn, cb)
// - cb 的参数完全转移，转嫁错误处理
exports.promisify = function(ctx, fn) {
    var args = slice.call(arguments, 2);
    return new Promise(function(resolve, reject) {
        args.push(function() {
            resolve(arguments);
        });

        if (typeof(fn) === 'function') {
            fn.apply(ctx, args);
        } else {
            ctx[fn].apply(ctx, args);
        }
    });
};

// 展开 promisify 修饰中集合的回调参数表
exports.spread = function(cb) {
    return function(args) {
        cb.apply(this, args);
    };
};