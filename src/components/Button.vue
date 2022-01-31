<template>
    <button @click="this.$emit('btn-click')" :type="type" class="btn btn-primary">{{ text }}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        style: Object,
        type: String,
    },

    methods: {
        
    },
}
</script>