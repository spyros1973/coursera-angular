(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy=this;
        toBuy.items=ShoppingListCheckOffService.getToBuyItems();

        toBuy.checkItem=function (idx) {
            ShoppingListCheckOffService.checkItem(idx);
            console.log("checked " + idx);
            console.log(toBuy.items.length);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        bought.items = ShoppingListCheckOffService.getBoughtItems();
    }


    function ShoppingListCheckOffService() {
        var service = this;
        var toBuyItems = [
            {name:"Spaghetti",quantity:"5 boxes"},
            { name: "White wine", quantity: "10 bottles" },
            { name: "Carrots", quantity: "3 kilos" },
            { name: "Eggs", quantity: "12 pieces" },
            { name: "Toothpaste", quantity: "1 piece" },
            {name:"Milk",quantity:"2lt"}];
        var boughtItems=[];

        service.checkItem = function (idx) {
            var item = toBuyItems[idx];
            boughtItems.push(item);
            toBuyItems.splice(idx,1);
        };

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getBoughtItems=function() {
            return boughtItems;
        };
    }

})();
