import {expect} from 'chai';

import splitStringProps from '../../../../src/request-handler/lib/split_string_props';

describe('splitStringProps', () => {
  it('should turn comma-separated object props into an array of strings', () => {
    var input = {
      id: '1,2',
      date_published: '2015-03-03',
      title: 'a,b'
    };
    var output = {
      id: ['1', '2'],
      date_published: '2015-03-03',
      title: ['a', 'b']
    };
    expect(splitStringProps(input)).to.deep.equal(output);
  });
});
