var records = [
    { id: 1, username: process.env.USER1, password: process.env.USER1PASSWORD, displayName: 'LilNelly', emails: [ { value: 'lurey@madison.k12.wi.us' } ] }
  , { id: 2, username: process.env.USER2, password: process.env.USER2PASSWORD, displayName: 'Barkai', emails: [ { value: 'barkai@gmail.com' } ] }
];

exports.findById = function(id, cb) {
  process.nextTick(function() {
    var idx = id - 1;
    if (records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
  });
}

exports.findByUsername = function(username, cb) {
  process.nextTick(function() {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.username === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
}
