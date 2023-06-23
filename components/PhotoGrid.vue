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
            <SwiperSlide v-for="slide in 10" :key="slide">
            <strong>{{ slide }}</strong>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
// import VuePictureSwipe from 'vue3-picture-swipe';

 const photoFileRoot = ref('/images/gallery/granly')

 const photoFileNames = ref([

 ])



// const photos = ref([

// ])

function formatFileNames() {
    for (let i = 1; i < 126; i++) {
        photoFileNames.value.push(photoFileRoot.value + i)
    }
    
}

formatFileNames()


// function generatePhotoObjects() {
//     formatFileNames()
//     for (let i = 0; i < 125; i++) {
//         photos.value.push({src: photoFileNames.value[i] + '.jpg', thumbnail: photoFileNames.value[i] + '.jpg', w: 1200, h: 900, title: 'Stue'})
//     }
// }

// generatePhotoObjects()

//     {src: 'images/gallery/_DSC1407.jpg',thumbnail: 'images/gallery/_DSC1407.jpg',w: 1200, h: 900, title: 'Stue'},
</script>

<style lang="scss" scoped>

</style>