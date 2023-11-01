<script>

export default {
    name: "AppBanner",
    props: {
        title: String
    },
    setup() {


        return {}
    },
    mounted() {
        const bouncyCircle = new mojs.Shape({
            parent: '#bouncyCircle',
            shape: 'circle',
            fill: { '#F64040': '#FC46AD' },
            // radius: { 20: 80 },
            radius: 20,
            scale: { 1: 4 },
            duration: 1000,
            // delay: 500,
            isYoyo: true,
            isShowStart: false,
            easing: 'elastic.inout',
            opacity: { 0: 1 },
            // repeat: 1,
        });

        bouncyCircle.el.style.filter = 'drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))';
        bouncyCircle.play()
    }
}
</script>
<template>
    <div class="jumbotron position-relative overflow-hidden">

        <div class="w-100 h-100 d-flex justify-content-center align-items-center position-absolute fs-1">
            <div id="bouncyCircle" class="h-100"></div>
            <div
                class="slide_animation fw-bold fs-1 text-white position-absolute z-3 h-100 w-100 d-flex justify-content-center align-items-center">
                {{ title }}</div>

        </div>
        <div class="img_container jb_img_animation">
            <div class="overlay"></div>
            <img class="" src="../../public/taste-atlas.jpg" alt="banner">
        </div>
    </div>
</template>


<style lang="scss" scoped></style>