<template>
  <div class="recommend">
    <scroll  ref="scroll" class="recommend-content" :data="disList">
      <div v-if="recommends.length" class="slider-content">
        <slider>
          <div v-for="item in recommends" :key="item.id">
            <a :href="item.linkUrl">
                <img :src="item.picUrl" alt="">
            </a>

          </div>
        </slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热单搜索</h1>
        <ul>
          <li v-for="item in disList" :key="item.id" class="item">
            <div class="icon">
              <img  @load="loadImage"   class="needsclick" v-lazy="item.picUrl" alt="" width="60" height="60">
            </div>
            <div class="text">
                <h2 class="name">{{item.songListAuthor}}</h2>
                  <p class="desc">{{item.songListDesc}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="loading-container" v-show="!disList.length">
          <loading></loading>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import slider from "base/slider/slider";
import scroll from "base/scroll/scroll";
import loading from "base/loading/loading";
import { getRecommend } from "api/recommend";
import { ERR_OK } from "api/config";
export default {
  components: {
    slider,
    scroll,
    loading
  },
  created() {
    setTimeout(() => {
      this._getRecommend();
    }, 1000);
  },
  data() {
    return {
      recommends: [],
      disList: []
    };
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider;
          this.disList = res.data.songList;
          console.log(this.disList);
        }
      });
    },
    loadImage() {
      if (!this.checkloaded) {
        this.checkloaded = true;
        this.$refs.scroll.refresh();
      }
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';

.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;

  .recommend-content {
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 40%;
      overflow: hidden;

      .slider-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }

      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;

        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;

          .name {
            margin-bottom: 10px;
            color: $color-text;
          }

          .desc {
            color: $color-text-d;
          }
        }
      }
    }

    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
