import Main from './main.vue'
import Vue from 'vue'

let modalStack = [];
let ModalConstructor = function () {};

function initModal(Main) {
  ModalConstructor = Vue.extend(Main)
}

let getAnInstance = () => {
  if (modalStack.length > 0) {
    let instance = modalStack[0];
    modalStack.splice(0, 1);
    return instance;
  }
  return new ModalConstructor({
    el: document.createElement('div')
  });
};
let isExistModal = false;
let VueModal = (options = {}) => {
  if (isExistModal) return;
  let templateModal = options.template;
  let props = options.params || {};
  let instance = {};
  let enterAnimate = options.enter;
  let leaveAnimate = options.leave;
  let successCb = options.success || function () {};
  let failCb = options.fail || function () {};
  let closeCb = options.close || function () {};
  let MainInstance = Object.assign({}, Main);
  isExistModal = true;
  MainInstance.components = {
    templateModal
  };
  MainInstance.methods.removeModal = function (instance2) {
    isExistModal = false;
    setTimeout(() => {

      instance.$el.parentNode.removeChild(instance.$el);
    }, 700)
  }
  MainInstance.methods.successCb = function (data, instance) {
    isExistModal = false;
    successCb(data, instance);
  }
  MainInstance.methods.failCb = function (data) {
    isExistModal = false;
    failCb(data);
  }
  MainInstance.methods.closeCb = function (data) {
    isExistModal = false;
    closeCb(data);
  }

  initModal(MainInstance);
  instance = getAnInstance();
  instance.closed = false;

  document.body.appendChild(instance.$el);
  Vue.nextTick(function () {
    instance.enterAnimate = enterAnimate || 'bounceInDown';
    instance.leaveAnimate = leaveAnimate || 'bounceOutUp';
    instance.propsParams = props;
    instance.modalVisible = true;
    instance.visible = true;
  });
  return instance;
};

export default VueModal;