<script setup>
import HomeCard from "../components/HomeCard.vue";

const cardData = [
  {
    // image: "https://picsum.photos/id/30/300/300",
    image: "https://www.playmusic.ir/images/thumbs/9568_400.jpg",
    title: "Marde Tanha",
    subTitle: "Ali Sorena",
    id: 1,
  },
];
</script>

<template>
  <div class="p-8">
    <button
      class="text-white text-2xl font-semibold hover:underline cursor-pointer"
      type="button"
    >
      Podcasts to make you smarter
    </button>

    <div class="py-1 5"></div>

    <div class="flex items-center">
      <div v-for="data in cardData" :key="data.id">
        <div v-if="data.class">
          <HomeCard
            :class="data.class"
            :image="data.image"
            :title="data.title"
            :subTitle="data.subTitle"
          />
        </div>
        <div v-else>
          <HomeCard
            :image="data.image"
            :title="data.title"
            :subTitle="data.subTitle"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="p-8">
    <button
      class="text-white text-2xl font-semibold hover:underline cursor-pointer"
      type="button"
    >
      Recommended radio
    </button>

    <div class="py-1 5"></div>

    <div class="flex items-center">
      <div v-for="data in cardData" :key="data.id">
        <div v-if="data.class">
          <HomeCard
            :class="data.class"
            :image="data.image"
            :title="data.title"
            :subTitle="data.subTitle"
          />
        </div>
        <div v-else>
          <HomeCard
            :image="data.image"
            :title="data.title"
            :subTitle="data.subTitle"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="p-8">
    <button
      class="text-white text-2xl font-semibold hover:underline cursor-pointer"
      type="button"
    >
      Recommended songs
    </button>

    <div class="py-1 5"></div>

    <div class="flex items-center">
      <div v-for="data in cardData" :key="data.id">
        <div v-if="data.class">
          <HomeCard
            :class="data.class"
            :image="data.image"
            :title="data.title"
            :subTitle="data.subTitle"
          />
        </div>
        <div v-else>
          <HomeCard
            :image="data.image"
            :title="data.title"
            :subTitle="data.subTitle"
          />
        </div>
      </div>
    </div>
  </div>
</template>
