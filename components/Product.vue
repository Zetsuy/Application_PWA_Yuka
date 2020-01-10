<template>
    <div class="product">
        <div class="product_imgWrapper"></div>
        <div class="product_name">{{product.name}}</div>
        <div class="product_grade">{{product.grade}}</div>
        <circle-color :grade="product.grade"></circle-color>
    </div>
</template>

<script>
import CircleColor from './CircleColor'
export default {
    name : 'Product',
    components: {CircleColor},
    props : {
        product : {
            type: Object,
            default:'',
            required: true
        }
    },
    data : function () {
        return {
            product
        }
    }
}
</script>

<style lang="scss" scoped> </style>