/**
 * Created by gjason on 2017/2/7.
 */
var vm = new Vue({
    el: '#container',
    data: {
        cartList:[]
    },
    mounted: function () {
        this.$nextTick(function () {
            this.getDataList();
        })
    },
    filters:{
        round:function (value) {
            return value.toFixed(2)
        }
    },
    methods: {
        getDataList: function () {
            VueResource.$http.get('resource/cart.json').then(function (response) {
                vm.cartList=response.body.result;
            })
        },
        plus:function (item) {
            item.count++;
        },
        minus:function (item) {
            if(item.count>1){
                item.count--;
            }else{
                item.count=1;
            }
        },
        getTotalMount:function () {
            var sum=0;
            this.cartList.forEach(function (value,index) {
                sum+=value.count*value.price;
            });
            return sum;
        }
    }
});