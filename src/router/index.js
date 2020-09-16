import Vue from 'vue'
import VueRouter from 'vue-router'

import LawyerAssessment from '@/views/LawyerAssessment/index.vue'
import SearchCase from '@/views/LawyerAssessment/SearchCase/index.vue'
import SearchLawyer from '@/views/LawyerAssessment/SearchLawyer/index.vue'
import SearchCourt from '@/views/LawyerAssessment/SearchCourt/index.vue'
import SearchOffice from '@/views/LawyerAssessment/SearchOffice/index.vue'
import SearchJudge from '@/views/LawyerAssessment/SearchJudge/index.vue'

import LawService from '@/views/LawService/index.vue'
import LawCommunity from '@/views/LawCommunity/index.vue'
import Mine from '@/views/Mine/index.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    redirect: '/assessment'
  },
  {
    path: '/assessment',
    name: '律师评估',
    component: LawyerAssessment
  },
  {
    path: '/service',
    name: '法律服务',
    component: LawService
  },
  {
    path: '/community',
    name: '法律社区',
    component: LawCommunity
  },
  {
    path: '/mine',
    name: '我的',
    component: Mine
  },
  {
    path: '/search_case',
    name: '案由搜索',
    component: SearchCase
  },
  {
    path: '/search_lawyer',
    name: '律师搜索',
    component: SearchLawyer
  },
  {
    path: '/search_court',
    name: '法院搜索',
    component: SearchCourt
  },
  {
    path: '/search_office',
    name: '律所搜索',
    component: SearchOffice
  },
  {
    path: '/search_judge',
    name:'法官搜索',
    component:SearchJudge
  }

 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
