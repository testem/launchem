'use strict';

var expect = require('chai').expect;
var strutils = require('../../lib/utils/strutils');
var template = strutils.template;

describe('template', function() {
  it('should replace parameters with their values', function() {
    var str = 'a<foo>c<bar>e<bar><baz>';
    var params = {
      foo: 'b',
      bar: 'd'
    };
    expect(template(str, params)).to.equal('abcded<baz>');
  });
});
