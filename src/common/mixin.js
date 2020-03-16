import {debounce} from "./utils";
import BackTop from "components/content/backTop/BackTop";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    }
  },
  mounted() {
    // 监听item中图片加载完成
    this.newRefresh = debounce(this.$refs.scroll.refresh, 300)

    // 对监听的事件进行保存
    this.itemImgListener = () => {
      this.newRefresh()
    }
    this.$bus.$on('itemImageLoad', () => {
      this.newRefresh()
    })
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    // 回到顶部点击
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    listenShowBackTop(position) {
      // 判断BackTop是否显示
      this.isShowBackTop = (-position.y) > 1000
    }
  }
}
