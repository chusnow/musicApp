<template>
<div ref='wrapper'>
  <slot></slot>
</div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    }
  },
  mounted() {
    setTimeout(() => {
      this._initBScroll();
    }, 20);
  },
  methods: {
    _initBScroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      });
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    }
  },
  watch: {
    data() {
      setTimeout(() => {
        this._initBScroll();
      }, 20);
    }
  }
};
</script>
<style lang="stylus">
</style>

