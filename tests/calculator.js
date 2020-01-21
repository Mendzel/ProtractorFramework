describe ('Calculator test', function(){

    it('addition test', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('123');
        element(by.model('second')).sendKeys('333');
        element(by.css('[ng-click="doAddition()"]')).click();
        var result = element(by.cssContainingText('.ng-binding','456'));
        expect(result.getText()).toEqual('456');


        browser.sleep(2000);
    })

    it('subtraction test', function(){

    })
})