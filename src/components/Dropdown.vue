<template>
    <select name="dropdown" id="dropdown" v-model="selectedOption" v-on:change="optionChanged">
        <option value="null" disabled>Please selet an option</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
    </select>
</template>

<script>
    export default {
        name: "Dropdown",

        data: function () {
            return {
                selectedOption: null,
            }
        },

        methods: {
            optionChanged: function(selectedOption) {
                this.$emit('update:option', this.selectedOption);
            }
        }
    }
</script>


