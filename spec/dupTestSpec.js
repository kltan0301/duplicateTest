var app = require('../app');

describe('Checks getDuplicate test function', function(){
  it('returns valid array if duplicates', function(){
    expect(app.getDuplicates([1,2,3,3,4])).toEqual([3]);
  });
  it('returns valid array if no duplicates', function(){
    expect(app.getDuplicates([1,2,3,4,8])).toEqual([]);
  });
  it('returns sorted array if duplicates', function(){
    expect(app.getDuplicates([8,8,2,4,8,7,7])).toEqual([7,8]);
  });
  it('returns zero sized array if empty array', function(){
    expect(app.getDuplicates([])).toEqual([]);
  });
  it('doesn\'t allow non arrays', function(){
    expect(
      function(){
        app.getDuplicates(2);
      }).toThrow("Type Error");
  });
  it('doesn\'t allow non integers in array', function(){
    expect(function(){
      app.getDuplicates([1,"#",2]);
    }).toThrow("Invalid Array");
    expect(function(){
      app.getDuplicates([1,"abc",2]);
    }).toThrow("Invalid Array");
  });
  it('return duplicate values once only', function(){
    expect(app.getDuplicates([1,3,3,3,2,2])).toEqual([2,3]);
  });
});
