<template>
    <select :value="modelValue" @change="changeOption">
        <option disabled value="Выберите из списка">Выберите из списка</option>
        <option v-for="option in options" :value="option.value" :key="option.value"> {{ option.name }}</option>
    </select>
</template>

<script>
    export default {
        name: 'my-select',
        props: {
            options: {
                type: Array,
                default: () => [],
            },
            modelValue: {
                type: [String, Number],
                default: ''
            }
        },
        methods: {
            changeOption(event) {
                console.log(event.target.value)
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>