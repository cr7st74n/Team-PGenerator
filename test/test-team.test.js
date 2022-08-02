const Co_info = require("../index");

describe('object generator',()=>{
    it("should get the objects", ()=>{

        expect(new Co_info("name","position","id","email","github")).toStrictEqual({name: 'name',position: 'position',id: 'id',email: 'email',github: 'github'
          })
    });
})