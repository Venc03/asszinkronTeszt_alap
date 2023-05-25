import Statisztika from "../js/Statisztika.js"

QUnit.module("nem szerint test", function(hooks) {
    let stat;
    const lista = 
    [
            { nev: "Béla", kor: 56, nem: "ffi" },
            { nev: "Jenő", kor: 16, nem: "ffi" },
            { nev: "Rózsa", kor: 33, nem: "nő" }
        ]  
    hooks.before(() => {
        stat = new Statisztika(lista);
    });
        
        QUnit.test("ferfiszama", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: 56, nem: "ffi" },
                    { nev: "Jenő", kor: 16, nem: "ffi" },
                    { nev: "Rózsa", kor: 33, nem: "nő" }
                ]          
                assert.equal(stat.nemszerintSzama("ffi"), 2);
        });

        QUnit.test("noszama", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: 56, nem: "ffi" },
                    { nev: "Jenő", kor: 16, nem: "ffi" },
                    { nev: "Rózsa", kor: 33, nem: "nő" }
                ]          
                assert.equal(stat.nemszerintSzama("nő"), 1);
        });

        QUnit.test("egyeb", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: 56, nem: "ffi" },
                    { nev: "Jenő", kor: 16, nem: "ffi" },
                    { nev: "Rózsa", kor: 33, nem: "nő" }
                ]          
                assert.equal(stat.nemszerintSzama("egyeb"), 0);
        });

        QUnit.test("vegyes", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: 56, nem: "ffi" },
                    { nev: "Jenő", kor: 16, nem: "ffi" },
                    { nev: "Rózsa", kor: 33, nem: "nő" }
                ]          
                assert.equal(stat.nemszerintSzama("ffi"), 2);
        });

        QUnit.test("csakferfi", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: 56, nem: "ffi" },
                    { nev: "Jenő", kor: 16, nem: "ffi" },
                    { nev: "Rózsa", kor: 33, nem: "ffi" }
                ]          
                assert.equal(stat.nemszerintSzama("ffi"), 3);
        });

        QUnit.test("csakno", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: 56, nem: "nő" },
                    { nev: "Jenő", kor: 16, nem: "nő" },
                    { nev: "Rózsa", kor: 33, nem: "nő" }
                ]          
                assert.equal(stat.nemszerintSzama("nő"), 3);
        });
        
        QUnit.test("csakegyeb", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: 56, nem: "egyeb" },
                    { nev: "Jenő", kor: 16, nem: "egyeb" },
                    { nev: "Rózsa", kor: 33, nem: "egyeb" }
                ]          
                assert.equal(stat.nemszerintSzama("egyeb"), 3);
        });

        QUnit.test("vegyes egyeb", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: 56, nem: "ffi" },
                    { nev: "Jenő", kor: 16, nem: "egyeb" },
                    { nev: "Rózsa", kor: 33, nem: "egyeb" }
                ]          
                assert.equal(stat.nemszerintSzama("egyeb"), 2);
        });

        QUnit.test("vegyes no", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: 56, nem: "nő" },
                    { nev: "Jenő", kor: 16, nem: "egyeb" },
                    { nev: "Rózsa", kor: 33, nem: "egyeb" }
                ]          
                assert.equal(stat.nemszerintSzama("nő"), 1);
        });

        QUnit.test("ures", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: 56, nem: "" },
                    { nev: "Jenő", kor: 16, nem: "" },
                    { nev: "Rózsa", kor: 33, nem: "" }
                ]          
                assert.equal(stat.nemszerintSzama(""), 3);
        });

        QUnit.test("van ures", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: 56, nem: "ffi" },
                    { nev: "Jenő", kor: 16, nem: "" },
                    { nev: "Rózsa", kor: 33, nem: "egyeb" }
                ]          
                assert.equal(stat.nemszerintSzama(""), 1);
        });

});

QUnit.module("eletkor szerint test", function(hooks) {
    let stat;
    const lista = 
    [
            { nev: "Béla", kor: 10, nem: "ffi" },
            { nev: "Jenő", kor: 15, nem: "ffi" },
            { nev: "Rózsa", kor: 30, nem: "nő" }
        ]  
    hooks.before(() => {
        stat = new Statisztika(lista);
    });
        
        QUnit.test("atlag", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: 5, nem: "ffi" },
                    { nev: "Jenő", kor: 10, nem: "ffi" },
                    { nev: "Rózsa", kor: 15, nem: "nő" }
                ]          
                assert.equal(stat.atlagEletkor(), 10);
        });

        QUnit.test("csakszoveg", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: "5", nem: "ffi" },
                    { nev: "Jenő", kor: "10", nem: "ffi" },
                    { nev: "Rózsa", kor: "15", nem: "nő" }
                ]          
                assert.equal(stat.atlagEletkor(), 17005);
        });

        QUnit.test("csaknulla", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: 0, nem: "ffi" },
                    { nev: "Jenő", kor: 0, nem: "ffi" },
                    { nev: "Rózsa", kor: 0, nem: "nő" }
                ]          
                assert.equal(stat.atlagEletkor(), 0);
        });

        QUnit.test("csak 10 felett", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: 10, nem: "ffi" },
                    { nev: "Jenő", kor: 15, nem: "ffi" },
                    { nev: "Rózsa", kor: 20, nem: "nő" }
                ]          
                assert.equal(stat.atlagEletkor(), 15);
        });

        QUnit.test("csaknull", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: "", nem: "ffi" },
                    { nev: "Jenő", kor: "", nem: "ffi" },
                    { nev: "Rózsa", kor: "", nem: "ffi" }
                ]          
                assert.equal(stat.atlagEletkor(), 0);
        });

        QUnit.test("csak 10 alatt", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: 2, nem: "nő" },
                    { nev: "Jenő", kor: 4, nem: "nő" },
                    { nev: "Rózsa", kor: 6, nem: "nő" }
                ]          
                assert.equal(stat.atlagEletkor(), 4);
        });
        
        QUnit.test("vannull", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: "", nem: "egyeb" },
                    { nev: "Jenő", kor: 10, nem: "egyeb" },
                    { nev: "Rózsa", kor: 30, nem: "egyeb" }
                ]          
                assert.equal(stat.atlagEletkor(), 343.3333333333333);
        });

        QUnit.test("vanszoveg", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: "10", nem: "egyeb" },
                    { nev: "Jenő", kor: 10, nem: "egyeb" },
                    { nev: "Rózsa", kor: 30, nem: "egyeb" }
                ]          
                assert.equal(stat.atlagEletkor(), 33676.666666666664);
        });

        QUnit.test("van negativ", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: -5, nem: "ffi" },
                    { nev: "Jenő", kor: 10, nem: "ffi" },
                    { nev: "Rózsa", kor: 15, nem: "nő" }
                ]          
                assert.equal(stat.atlagEletkor(), 	
                6.666666666666667);
        });

        QUnit.test("csak negativ", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: -5, nem: "ffi" },
                    { nev: "Jenő", kor: -10, nem: "ffi" },
                    { nev: "Rózsa", kor: -15, nem: "nő" }
                ]          
                assert.equal(stat.atlagEletkor(), -10);
        });

        QUnit.test("negativ van szoveg", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: "-5", nem: "ffi" },
                    { nev: "Jenő", kor: -10, nem: "ffi" },
                    { nev: "Rózsa", kor: -15, nem: "nő" }
                ]          
                assert.equal(stat.atlagEletkor(), NaN);
        });

        QUnit.test("negativ van null", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: "", nem: "ffi" },
                    { nev: "Jenő", kor: -10, nem: "ffi" },
                    { nev: "Rózsa", kor: -15, nem: "nő" }
                ]          
                assert.equal(stat.atlagEletkor(), NaN);
        });

});

QUnit.module("nem szerint atlag szerint test", function(hooks) {
    let stat;
    const lista = 
    [
            { nev: "Béla", kor: 10, nem: "ffi" },
            { nev: "Jenő", kor: 15, nem: "ffi" },
            { nev: "Rózsa", kor: 30, nem: "nő" }
        ]  
    hooks.before(() => {
        stat = new Statisztika(lista);
    });
        
        QUnit.test("ferfi atlag", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: 5, nem: "ffi" },
                    { nev: "Jenő", kor: 15, nem: "ffi" },
                    { nev: "Rózsa", kor: 15, nem: "nő" }
                ]          
                assert.equal(stat.nemszerintAtlagEletkora("ffi"), 10);
        });

        QUnit.test("no atlag", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: "5", nem: "ffi" },
                    { nev: "Jenő", kor: "10", nem: "ffi" },
                    { nev: "Rózsa", kor: "15", nem: "nő" }
                ]          
                assert.equal(stat.nemszerintAtlagEletkora("nő"), 15);
        });

        QUnit.test("ferfi atlag egyik szoveg", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: "10", nem: "ffi" },
                    { nev: "Jenő", kor: 20, nem: "ffi" },
                    { nev: "Rózsa", kor: 10, nem: "ffi" }
                ]          
                assert.equal(stat.nemszerintAtlagEletkora("ffi"), 34003.333333333336);
        });

        QUnit.test("no atlag egyik szoveg", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: 10, nem: "ffi" },
                    { nev: "Jenő", kor: 15, nem: "nő" },
                    { nev: "Rózsa", kor: "20", nem: "nő" }
                ]          
                assert.equal(stat.nemszerintAtlagEletkora("nő"), 760);
        });
        
        QUnit.test("egyeb atlag egyik szoveg", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: "10", nem: "egyeb" },
                    { nev: "Jenő", kor: 20, nem: "egyeb" },
                    { nev: "Rózsa", kor: 10, nem: "egyeb" }
                ]          
                assert.equal(stat.nemszerintAtlagEletkora("egyeb"), 34003.333333333336);
        });

        QUnit.test("ferfi null", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: "", nem: "ffi" },
                    { nev: "Jenő", kor: "", nem: "ffi" },
                    { nev: "Rózsa", kor: 10, nem: "nő" }
                ]          
                assert.equal(stat.nemszerintAtlagEletkora("ffi"), 0);
        });

        QUnit.test("nő null", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: "", nem: "nő" },
                    { nev: "Jenő", kor: 4, nem: "nő" },
                    { nev: "Rózsa", kor: 6, nem: "nő" }
                ]          
                assert.equal(stat.nemszerintAtlagEletkora("nő"), 15.333333333333334);
        });

        QUnit.test("egyeb null", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: "", nem: "egyeb" },
                    { nev: "Jenő", kor: 4, nem: "egyeb" },
                    { nev: "Rózsa", kor: 6, nem: "egyeb" }
                ]          
                assert.equal(stat.nemszerintAtlagEletkora("egyeb"), 15.333333333333334);
        });
        
        QUnit.test("vegyes egyeb atlag", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: 56, nem: "ffi" },
                    { nev: "Jenő", kor: 10, nem: "egyeb" },
                    { nev: "Rózsa", kor: 30, nem: "egyeb" }
                ]          
                assert.equal(stat.nemszerintAtlagEletkora("egyeb"), 20);
        });

        QUnit.test("vegyes no atlag", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: 40, nem: "nő" },
                    { nev: "Jenő", kor: 60, nem: "nő" },
                    { nev: "Rózsa", kor: 30, nem: "egyeb" }
                ]          
                assert.equal(stat.nemszerintAtlagEletkora("nő"), 50);
        });

        QUnit.test("vegyes ferfi atlag", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: 40, nem: "ffi" },
                    { nev: "Jenő", kor: 60, nem: "ffi" },
                    { nev: "Rózsa", kor: 30, nem: "egyeb" }
                ]          
                assert.equal(stat.nemszerintAtlagEletkora("ffi"), 50);
        });

        QUnit.test("negativ ferfi atlag", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: -40, nem: "ffi" },
                    { nev: "Jenő", kor: 60, nem: "ffi" },
                    { nev: "Rózsa", kor: 30, nem: "egyeb" }
                ]          
                assert.equal(stat.nemszerintAtlagEletkora("ffi"), 10);
        });

        QUnit.test("negativ no atlag", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: -40, nem: "nő" },
                    { nev: "Jenő", kor: 60, nem: "nő" },
                    { nev: "Rózsa", kor: 30, nem: "egyeb" }
                ]          
                assert.equal(stat.nemszerintAtlagEletkora("nő"), 10);
        });

        QUnit.test("negativ egyeb atlag", function(assert){
            stat.lista = 
                [
                    { nev: "Béla", kor: 56, nem: "ffi" },
                    { nev: "Jenő", kor: -10, nem: "egyeb" },
                    { nev: "Rózsa", kor: 30, nem: "egyeb" }
                ]          
                assert.equal(stat.nemszerintAtlagEletkora("egyeb"), 10);
        });
});