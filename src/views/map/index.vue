<template>
  <div class="map">
    <pageTitle title="地图展示" />
    <div id="mapBox" class="map-box"></div>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent, onMounted, onActivated } from 'vue'
declare let AMap: any

export default defineComponent({
  setup() {
    const map = ref(null)
    const complete = (v: any) => {
      map.value = v
    }
    onMounted(() => {
      aMapAk().then(_ => {
        initMap({
          complete
        })
      }).catch(e => {
        console.log(e)
      })
    })
    onActivated(() => {
      console.log('onActivated')
    })
    return {
      map
    }
  }
})

// 初始化地图
function initMap(cb: any) {
  const map = new AMap.Map('mapBox', {
    resizeEnable: true,
    center: [114.000923, 22.675807],
    zoom: 9,
    expandZoomRange: true
  })
  AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], () => {
    map.addControl(new AMap.ToolBar())
    map.addControl(new AMap.Scale())
  })
  map.on('complete', () => {
    cb?.complete(map)
  })
  return map
}

// 加载地图
const AK = 'f6c5605653a47c5d22640c61d48f24ad'
function aMapAk() {
  return new Promise(function (resolve, reject) {
    const head = document.head
    let dom = head.querySelector('#aMap') as HTMLElement
    if (dom) {
      resolve(1)
      return
    }
    dom = document.createElement('script') as HTMLElement
    dom.setAttribute('id', 'aMap')
    dom.setAttribute('src', '//webapi.amap.com/maps?v=1.4.15&key=' + AK)
    dom.onerror = reject
    dom.onload = resolve
    head.appendChild(dom)
  })
}

</script>
<style scoped>
.map {
  width: 100%;
  height: calc(100% - 100px);
}
.map-box {
  width: 100%;
  height: 100%;
}
</style>
