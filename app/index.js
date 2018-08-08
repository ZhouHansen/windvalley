var html = require('choo/html')
var Nanocomponent = require('choo/component')

var TITLE = '娜乌西卡的风之谷'

module.exports = view

class Component extends Nanocomponent {
    constructor (state, emit) {
      super()
    }
  
    createElement () {  
      return html`
        <main class='w-100 flex flex-column flex-auto bg-dz items-center'>
            <h1>风之谷现状</h1>
            <p class='w-90 indent pb1'>
                目前组织正在做两件事：一是会长正在用家里的剩菜剩饭做堆肥实验，为下一步垃圾
                分类推广的工作做准备。              
            </p>
            <p class='w-90 indent pb1'>
                二是发展这个组织本身。目前除了堆肥之外，暂时没有太多直接关系环保的工作，等会长的堆肥实验
                成功之后，会有比如去跟小区里的叔叔阿姨宣传垃圾分类这样直接的工作。当然也有零碎的工作，
                比如，有一次我们去帮会长把他家的肥料桶抬到附近的菜地去..
            </p>     
            <p class='w-90 indent pb1'>
                目前的任务就是找到更多关心环保的人加入我们，所以现在我们正在积极准备开办一个体育部
                和音乐部之类的，比如因为群里不少哥们球打得好，将来会组织一些篮球比赛。                      
            </p>     
            <p class='w-90 indent pb1'>
                除了以上这些，平时也会有一些简单的任务交给大家，也会办一些简单的聚会。                    
            </p>                           
        </main>
      `
    }
  
    load () {

    }
  
    update () {
      return true
    }
  }

function view (state, emit) {
    if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  
    var component = new Component(state, emit)
  
    return html`
      <body class='w-100 flex flex-column bg-n-white'>
        ${component.render()}
      </body>
    `
  }