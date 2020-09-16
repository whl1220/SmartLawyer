<template>
    <div id="nav-top">
        <van-nav-bar
            :title=title
            left-arrow
            @click-left="go_back()"
        />
    </div>
</template>
<script>
export default {

    data() {
        return {
            title:this.$router.history.current.name
        }
    },
    methods: {
        go_back(){
            this.$router.back();
        },
    },
    created() {
        console.log(this.$router.history.current.name);
        
    }

}
</script>
<style lang="scss" scoped>
    #nav-top{
        .van-nav-bar{
            width: 100%;
            height: 1rem;
            color: #ffffff;
            background-color: #577EFF;
            .van-nav-bar__title{
                color: #ffffff;
            }
            .van-nav-bar__left{
                bottom: .1rem;
                .van-icon{
                    color: #ffffff;
                }
                
            }
        }
        
    }
</style>

