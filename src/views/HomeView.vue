<script setup>
import HomeCard from "../components/HomeCard.vue";

const cardData = [
  {
    image: "https://picsum.photos/id/30/300/300",
    title: "Title is here",
    subTitle: "Subtitle is here",
    id: 1,
  },
  {
    image: "https://picsum.photos/id/45/300/300",
    title: "Title is here",
    subTitle: "Subtitle is here",
    id: 2,
  },
  {
    image: "https://picsum.photos/id/65/300/300",
    title: "Title is here",
    subTitle: "Subtitle is here",
    class: "md:block hidden",
    id: 3,
  },
  {
    image: "https://picsum.photos/id/67/300/300",
    title: "Title is here",
    subTitle: "Subtitle is here",
    class: "lg:block hidden",
    id: 4,
  },
  {
    image: "https://picsum.photos/id/100/300/300",
    title: "Title is here",
    subTitle: "Subtitle is here",
    class: "xl:block hidden",
    id: 5,
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
