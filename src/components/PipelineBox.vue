<script lang='ts' setup>
import type { PropType } from 'vue';

export interface Box {
    title: string;
    color: string;
}

const props = defineProps({
  box: { type: Object as PropType<Box>, required: true}
})
</script>

<template>
    <div class="flex flex-col w-[216px] max-h-full h-[100%] rounded-lg gap-2" :class="`bg-gradient-to-b from-${props.box.color}-100/50 from-70%`">
        <div class="max-w-full w-full max-h-8 h-fit px-3 py-2 text-nm font-bold uppercase" :class="`text-${props.box.color}-900/80`">
            {{ props.box.title }}
        </div>
        <div class="px-3 h-5">
            <div class="h-5 rounded-full" :class="`bg-${props.box.color}-200/50`">
                <div class="w-[35%] max-w-full max-h-5 h-[100%] rounded-full" :class="`bg-${props.box.color}-300/50`"></div>
            </div>
        </div>
        <div class="mx-1 w-[100%] max-w-[206px] max-h-[180px] h-[50%] rounded-xl" :class="`border-solid border-2 border-${props.box.color}-200/50`"></div>
    </div>
</template>
