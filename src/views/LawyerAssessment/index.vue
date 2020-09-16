<template>
    <div id="assessment">
        <NavTop/>
        <ul id="search-li">
            <li id="case" class="search" @click="go_search('case')">
                <img src="@/assets/images/search_case.png">
                <p>案由搜索</p>
            </li>
            <li id="lawyer" class="search" @click="go_search('lawyer')">
                <img src="@/assets/images/search_lawyer.png">
                <p>律师搜索</p>
                
            </li>
            <li id="court" class="search" @click="go_search('court')">
                <img src="@/assets/images/search_court.png">          
                <p>法院搜索</p>
                
            </li>
            <li id="office" class="search" @click="go_search('office')">
                <img src="@/assets/images/search_office.png">
                <p>律所搜索</p>
            </li>
            <li id="judge" class="search" @click="go_search('judge')">
                <img src="@/assets/images/search_judge.png">
                <p>法官搜索</p>
            </li>
        </ul>
    </div>
</template>
<script>
import NavTop from "@/components/NavTop.vue"
export default {
    components:{
        NavTop
    },
    data(){
        return{
            
        }
    },
    methods:{
        go_search(_key){
            switch (_key){
                case 'case':
                    this.$router.push('/search_case');
                    break;
                case 'lawyer':
                    this.$router.push('/search_lawyer');
                    break;
                case 'court':
                    this.$router.push('/search_court');
                    break;
                case 'office':
                    this.$router.push('/search_office');
                    break;
                case 'judge':
                    this.$router.push('/search_judge');
                    break;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    #assessment{ 
        width: 100%;    
        #search-li{
            width: 7.2rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin: 0 auto;
            .search{
                width: 3.5rem;
                height: 3.2rem;
                margin-top: .1rem;
                text-align: center;
                background-color: #ffffff;
                img{
                    width: .8rem;
                    height: .8rem;
                    margin: .8rem auto .2rem;
                }
                p{
                    height: .6rem;
                }
                &#case{
                    flex-basis: 100%;
                    height: 3rem; 
                }
            }
        }
    }
</style>