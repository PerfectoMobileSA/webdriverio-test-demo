

describe('Demo of goto home screen and swipe', () => {
    it('should go to home screen then sipe to the right twice', () => {
        let params = {
            target: 'All'
          };
          browser.execute('mobile:handset:ready', params);
          params = {
            start: "60%,50%",
            end: "10%,50%"
          };
          browser.execute('mobile:touch:swipe', params);
          browser.execute('mobile:touch:swipe', params);
    });
});


