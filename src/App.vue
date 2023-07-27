<script setup lang="ts">
import { ref , computed , shallowRef } from 'vue';
import PipelineOption, { type Option } from './components/PipelineOption.vue';
import PipelineBox, { type Box } from './components/PipelineBox.vue';
//@ts-ignore
import data from '../data.ts';

const selectedOption = ref('');

const pipelineData = shallowRef(data);

const pipelineBoxList = computed(() => {
  let pipelineArray: any[] = [];

  pipelineData.value.forEach((item) => {
    if (item.id === selectedOption.value){
      pipelineArray = item.boxes
    }
  })
  return pipelineArray;
})

const onSelectedOption = (marked: Option): void=> {
  selectedOption.value = marked.value
}

const options = ref<Option[]>([
      {
      value: "0",
      label: "Basic"
      },
      {
      value: "1",
      label: "Advanced"
      },
      {
      value: "2",
      label: "Expert"
      },
      {
      value: "3",
      label: "Custom"
      }
])
</script>

<template>
  <div class="flex h-20 px-8 py-12 bg-slate-200 justify-between items-center w-full" name="header">
    <div class="flex items-center justify-start h-16 w-16 ">
      <div class="h-7 w-7 rotate-45  bg-blue-950/90 rounded">
        <div class="flex h-7 w-7 -rotate-45">
          <span class="h-7 w-7 text-center font-bold text-white">P</span>
        </div>
      </div>
    </div>
    <div class="flex gap-5">
      <div class="flex flex-col items-center gap-px">
        <div class="flex items-center justify-center rounded-2xl bg-gray-800/90 font-semibold text-base text-white h-12 w-12">
          <span>1</span>
        </div>
        <div class="text-[0.6rem] font-bold text-gray-800/90 capitalize">
          <span>sales pipeline settings</span>
        </div>
      </div>
      <div class="flex flex-col items-center gap-px">
        <div class="flex items-center justify-center rounded-2xl border border-slate-300 text-gray-800/90 font-semibold text-base bg-white h-12 w-12">
          <span>2</span>
        </div>
        <div class="text-[0.6rem] font-bold text-gray-800/90 capitalize">
          <span>opportunity details settings</span>
        </div>
      </div>
    </div>
    <button class="rounded-full transition bg-blue-600 hover:bg-blue-700 duration-300 text-sm capitalize text-white font-bold h-10 w-[72px]">Next</button>
  </div>
  <div class="flex items-center justify-center bg-slate-200 content-evenly page-body w-full" name="main">
    <div class="flex flex-col gap-10 bg-white p-8 rounded-2xl h-[99%] w-[99%]" name="body_container">
      <div class="flex items-center justify-center normal-case text-[28px] text-gray-800/90 font-bold">
        <span>Please select the type of sales pipeline that best fit your company</span>
      </div> 
      <div class="flex items-center justify-center content-evenly gap-2">
        <PipelineOption @on-selected="onSelectedOption"  :options="options"/>
      </div>
      <div class="flex items-center justify-center my-4 gap-4 h-[99%]">
        <div class="h-full" v-for="(box,index) in pipelineBoxList" :key="index">
          <PipelineBox :box="box"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-body{
  height: calc(100vh - 97px);
}
</style>
