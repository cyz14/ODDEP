var lemon = require('../../sim/lemon');

lemon.submit('test', 2, {
    pid : 1000,
    check : false
});
lemon.submit('test1', 2, {
    pid : 1001,
    check : false
});
lemon.submit('test2', 1);
lemon.submit('test2', 1, {
    pid : 1002,
    check : true
});
lemon.submit('test3', 2, {
    pid : 1002,
    check : true
})