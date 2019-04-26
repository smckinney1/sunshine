import sum from './sum';

describe('The Sum of Two Things', () => {
  it('adds 5 + 1 to equal 6', (done) => {
    expect(sum(5, 1)).toBe(6);
    done();
    // console.log('here for eslint');
    // return sum(5, 1).then((data) => { expect(data).toBe(6); });
  });
});
