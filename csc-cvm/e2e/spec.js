// spec.js
describe('CVM homepage', function() {
  it('should have a title', function() {
    browser.get('http://localhost:9002/');

    expect(browser.getTitle()).toEqual('Home | CSC CVM');
  });
});