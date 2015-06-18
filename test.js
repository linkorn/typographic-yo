'use strict';

var yo = require('./');
var assert = require('assert');

describe('yo(input)', function() {
  it('should fix ё', function() {
    assert(yo('веревка') === 'верёвка');
  });
});