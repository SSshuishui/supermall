<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button"/>
      <span>全选</span>
    </div>

    <div class="price">
      合计: {{totalPrice}}
    </div>

    <div class="calculate">
      去结算: {{checkedLength}}
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/content/checkButton/CheckButton";
  import {mapGetters} from 'vuex'

  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        return '￥' + this.$store.getters.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      checkedLength() {
        return this.cartList.filter(item => item.checked).length
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    position: relative;
    display: flex;

    height: 40px;
    background-color: #eee;
    line-height: 40px;
    font-size: 15px;
  }

  .check-content {
    display: flex;
    align-items: center;
    width: 80px;
  }

  .check-button {
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-left: 5px;
    margin-right: 5px;
  }

  .price {
    margin-left: 50px;
    flex: 1;
  }

  .calculate{
    width: 100px;
    background-color: #eb4868;
    color: #fff;
    text-align: center;
  }
</style>
