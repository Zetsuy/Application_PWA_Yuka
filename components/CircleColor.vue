<template>
    <div :class="`circle circle-${color}`"></div>
</template>
<script>
export default {
    name : 'CircleColor',
    mounted(){
        console.log('test')
    },
    props: {
        grade : {
            type : Number,
            required : true,
            default : 0
        }
    },
    data: function(){
        const color = grade < 5 ? 'red' : grade < 8 ? 'orange' : 'green'
        return {
            color
        }
    }
}
</script>

<style lang="scss" scoped>
.circle{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    &-red {
        background-color: red;
    }

    &-orange{
        background-color: orange;
    }

    &-green{
        background-color: green;
    }
}
</style>