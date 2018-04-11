<template>
  <div>
    推荐页面
  </div>
</template>

<script type="text/ecmascript-6">
import Slider from "base/slider/slider";
import { getRecommend } from "api/recommend";
import { ERR_OK } from "api/config";
export default {
  components: {
    Slider
  },
  created() {
    getRecommend();
  },
  methods: {
    getRecommend() {
      console.log(22);
      getRecommend.then(res => {
        if (res.code === ERR_OK) {
          console.log(res.data.slider);
        }
      });
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
