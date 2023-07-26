<script lang="ts" setup>
import type { PropType } from 'vue';
import { ref , onMounted} from 'vue';

export interface Option {
    value: string;
    label: string;
}

const emit = defineEmits(['on-selected']);

const props = defineProps({
  options: { type: Array as PropType<Option[]> }
})

const selected = ref<Option>();

const onSelectOption = (option: Option): void => {
    selected.value = option;
    emit('on-selected', option)
};

const isOptionActive = (option: Option): boolean => {
    return selected.value === option
}

onMounted(() => {
    if (props.options && props.options.length > 0) {
        onSelectOption(props.options[0]);
    }
});
</script>

<template>
    <div class="relative rounded-[0.6rem] cursor-pointer "
        :class="{
            'border border-slate-200 hover:bg-slate-200': !isOptionActive(option),
            'border-2 border-blue-600': isOptionActive(option)
        }"
        v-for="(option) in props.options" :key="option.value" @click="onSelectOption(option)">
        <div class="flex items-center justify-start gap-2 p-2 w-52 h-11 pointer-events-none ">
            <input class="hidden" type="radio" name="PipelineOption" :id="option.value" :value="option.value" :checked="isOptionActive(option)" >
            <label class="flex items-center gap-2" :for="option.value">
                <span class="w-4 h-4 inline-block mr-1 rounded" 
                :class="{
                    'border-2 border-slate-200': !isOptionActive(option),
                    'bg-blue-600': isOptionActive(option)
                }">
                    <div v-if="isOptionActive(option)" class="flex justify-center items-center w-4 h-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="text-white w-4 h-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>
                </span>
                <div class="flex items-center h-11 text-sm font-semibold text-gray-800/90">               
                    <span class="inline-block align-middle">{{ option.label }}</span>  
                </div>
            </label>
        </div>
        <div v-if="isOptionActive(option)" class="absolute left-[104px] rounded-br-sm bottom-0 origin-center -translate-x-1/2 translate-y-[.45rem] rotate-45 bg-white border-r-2 border-b-2 border-blue-600 h-3 w-3"></div>
    </div>
</template>