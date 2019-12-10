<template>
  <div class="bottomBar">
    <div>
      <Button>123666</Button>
    </div>
    <div>
      <van-icon name="arrow-left" size="40px" color="#ff0000" />
    </div>
    <van-rate v-model="value" />
  </div>
</template>

<script>
import { Button, Icon, Rate } from "vant";
export default {
  name: "bottomBar",
  components: {
    Button,
    vanIcon: Icon,
    vanRate: Rate
  },
  data() {
    return {
      value: 3
    };
  }
};
</script>

<style lang="less" scoped>
	Button{
		font-size: 40px;
	}
</style>
