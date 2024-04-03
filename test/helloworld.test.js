import getName from '../NodeJSExample/helloworld';
import assert from 'assert';

it("testing get name", ()=>{
    const myName = getName();
    assert.equal(myName,"Mosiah Valdez")
});