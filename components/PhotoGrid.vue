<template>
    <div>
        <!-- <vue-picture-swipe :items="photos">
        </vue-picture-swipe> -->

        <Swiper
            :modules="[SwiperNavigation, SwiperPagination, SwiperA11y, SwiperVirtual]"
            :slides-per-view="1"
            :space-between="50"
            navigation
            :pagination="{ clickable: true, dynamicBullets: true }" grab-cursor virtual
        >
            <SwiperSlide v-for="photo in photoFileNames" :key="photo">
            <img :src="photo" alt="">
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
const photoFileRoot = ref('../assets/images/gallery/granly')

const photoFileNames = ref([

])



function formatFileNames() {
    for (let i = 1; i < 126; i++) {
        photoFileNames.value.push(photoFileRoot.value + i + '.jpg')
    }
    
}

formatFileNames()


//     {src: 'images/gallery/_DSC1407.jpg',thumbnail: 'images/gallery/_DSC1407.jpg',w: 1200, h: 900, title: 'Stue'},
</script>

<style lang="scss" scoped>

</style>