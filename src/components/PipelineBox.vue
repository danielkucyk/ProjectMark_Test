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
    <div class="flex flex-col w-[216px] max-w-[480px] h-full rounded-lg gap-2" :class="`bg-gradient-to-b from-${props.box.color}-100/50 from-70%`">
        <div class="px-3 py-2 text-nm font-bold uppercase" :class="`text-${props.box.color}-900/80`">
            {{ props.box.title }}
        </div>
        <div class="px-3">
            <div class="w-[60%] h-5 rounded-full" :class="`bg-${props.box.color}-200/50`">
                <div class="w-[35%] h-5 rounded-full" :class="`bg-${props.box.color}-300/50`"></div>
            </div>
        </div>
        <div class="mx-1 w-[206px] h-[180px] rounded-xl" :class="`border-solid border-2 border-${props.box.color}-200/50`"></div>
    </div>
</template>
