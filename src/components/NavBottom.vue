<template>
    <div id="nav-bottom">
        <van-tabbar v-model="active">
            <van-tabbar-item  to="/assessment">
                <span>律师评估</span>
                <img
                slot="icon"
                slot-scope="props"
                :src="props.active ? icon.active1 : icon.inactive1"
                >
            </van-tabbar-item>
            <van-tabbar-item to="/service">
                <span>法律服务</span>
                <img
                slot="icon"
                slot-scope="props"
                :src="props.active ? icon.active2 : icon.inactive2"
                >
            </van-tabbar-item>
            <van-tabbar-item to="/community">
                <span>法律社区</span>
                <img
                slot="icon"
                slot-scope="props"
                :src="props.active ? icon.active3 : icon.inactive3"
                >
            </van-tabbar-item>
            <van-tabbar-item to="/mine">
                <span>我的</span>
                <img
                slot="icon"
                slot-scope="props"
                :src="props.active ? icon.active4 : icon.inactive4"
                >
            </van-tabbar-item>
        </van-tabbar>        
    </div>
</template>
<script>
    export default {
    data() {
        return {
            active: 0,
            icon: {
                active1: require('@/assets/images/lvshi1.png'),
                inactive1: require('@/assets/images/lvshi1.png'),
                active2: require('@/assets/images/fuwu2.png'),
                inactive2: require('@/assets/images/fuwu1.png'),
                active3: require('@/assets/images/shequ2.png'),
                inactive3: require('@/assets/images/shequ1.png'),
                active4: require('@/assets/images/wode2.png'),
                inactive4: require('@/assets/images/wode1.png'),
            }
        }
    }  
    }
</script>
<style lang="scss" scoped>
    
</style>