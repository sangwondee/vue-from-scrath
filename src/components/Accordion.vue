<template>
    <div>
        <p>{{ item.title + 'inside' }}</p>
        <p @click="toggle = ! toggle">Detial</p>
        <p v-if="toggle">{{ item.description }}</p>
    </div>
</template>

<script>
    export default {
        name: "Accordion",

        props: ['item'],

        data: function () {
            return {
                toggle: false,
            }
        }
}
</script>

<style scoped>

</style>

