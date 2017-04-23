;(function (global, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory(global)
  } else if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory(global)
    })
  } else {
    global.tween = factory(global)
  }
}(this, (function (global) {
  var updateTime = 1000 / 60
  var rAF = global.requestAnimationFrame || function (cb) { setTimeout(cb, updateTime) }

  /**
   * 简单的执行缓动函数的方法
   * @param {number} startValue - 初始值
   * @param {number} endValue - 最终结束的值
   * @param {number} during - 执行时间
   * @param {function} easingFunc - 缓动函数，见 jQuery Easing 插件
   * @param {function} stepCb - 每次更新状态时的回调函数
   */
  function tween (startValue, endValue, during, easingFunc, stepCb) {
    var changeValue = endValue - startValue
    var updateCount = during / updateTime
    var perUpdateDistance = 1 / updateCount
    var position = 0

    return new Promise(function (resolve) {
      function step () {
        var state = startValue + changeValue * easingFunc(position) // 计算 div 在当前时间点的高度
        stepCb(state)
        position += perUpdateDistance
        if (position < 1) { // 如果动画还没结束，则准备在下一帧更新动画
          rAF(step)
        } else {
          resolve()
        }
      }

      step()
    })
  }

  return tween
})))
