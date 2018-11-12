<template>
  <div class="vue-modal">
    <transition name="custom-classes-transition" :enter-active-class="'animated '+ enterAnimate" :leave-active-class="'animated '+leaveAnimate " :duration="700">
      <templateModal @close="close" :params="propsParams" v-if="visible" @success="success" @fail="fail"></templateModal>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.vue-modal {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  box-sizing: border-box;
  text-align: center;
  z-index: 9999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0.04rem 0.2rem;
  font-size: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script type="text/babel">
  export default {
    props: {
      message: String,
      className: {
        type: String,
        default: ''
      },
      position: {
        type: String,
        default: 'middle'
      },
      iconClass: {
        type: String,
        default: ''
      }
    },
    components:{
      templateModal: null
    },
    data() {
      return {
        visible: false,
        modalVisible: false,
        propsParams: {},
        enterAnimate: 'bounceInDown',
        leaveAnimate: 'bounceOutUp'
      };
    },
    methods: {
      close() {
        console.log("main.vue close")
        this.visible = false;
        this.modalVisible = false;
        this.removeModal(this);
        this.closeCb()
      },
      success(data){
        this.successCb(data, this);
      },
      fail(data){
        this.failCb(data);
      }
    }
  };
</script>