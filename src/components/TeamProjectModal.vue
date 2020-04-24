<template>
  <div
    class="modal"
    :class="{
      'is-active': isActive,
    }">

    <div class="modal-background animated fadeIn faster" v-on:click="handleModalClose()"></div>

    <div class="modal-content box-shadow animated zoomIn faster">
      <div class="modal-bg-container">
        <img class="modal-bg" src="@/assets/backdrop-first.svg" />
      </div>

      <unicon name="times" fill="white" class="close-button icon-small" v-on:click="handleModalClose()"></unicon>

      <div class="pad-sides-8 has-text-centered">
        <h2 class="accent">{{ team.project.name }}</h2>
        <h3 class="margin-sides-16">{{ team.project.description }}</h3>

        <div v-if="isActive" class="media-container margin-sides-16">
          <img
            v-if="!team.project.media"
            :src="team.project.banner.url" />
          <img
            v-else-if="team.project.media.type == 'image'"
            :src="team.project.media.url" />
          <div
            v-else-if="team.project.media.type == 'youtube'"
            class="video-container">
            <iframe
              ref="ytplayer-iframe"
              :src="generateYouTubeEmbedSrc(team.project.media)"
              id="ytplayer" type="text/html" class="video-player"
              frameborder="0"></iframe>
          </div>
        </div>

        <p v-if="team.project.elevatorPitch" class="margin-sides-16">
          {{ team.project.elevatorPitch }}
        </p>

        <p class="socials">
          <a :href="team.project.links.repository" target="_blank">
            <unicon name="github-alt" class="icon-medium"></unicon>
          </a>
          <a v-if="team.project.links.website" :href="team.project.links.website" target="_blank">
            <unicon name="window" class="icon-medium"></unicon>
          </a>
          <a v-if="team.project.links.writeup" :href="team.project.links.writeup" target="_blank">
            <unicon name="notebooks" class="icon-medium"></unicon>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Team, MediaYouTube } from '@/data/types';

// used for youtube embeds
const domain = (process.env.NODE_ENV === 'development') ? 'localhost' : 'https://ubclaunchpad.github.io';

export default Vue.extend({
  name: 'TeamProjectModal',
  props: {
    team: {
      type: Object as () => Team,
    },
    isActive: Boolean,
  },
  methods: {
    handleModalClose() {
      this.$emit('modalClosed');
    },
    /**
     * Generate a YouTube link specifically for use with our iframe embed.
     */
    generateYouTubeEmbedSrc(media: MediaYouTube): string {
      // see https://developers.google.com/youtube/player_parameters#Parameters
      const params: Record<string, string> = {
        frameborder: '0', // no ugly border
        modestbranding: '1', // reduce youtube branding
        rel: '0', // no related videos
        origin: domain,
      };
      if (media.startAt) params.start = `${media.startAt}`;
      const urlParams = new URLSearchParams(params);
      return `https://youtube.com/embed/${media.id}?${urlParams.toString()}`;
    },
  },
});
</script>

<style scoped lang="scss">
.modal-background {
  background-color: rgba($black, 0.9);
}

.modal-content {
  border-radius: 15px;
  background-color: $dark;
  box-shadow: 0 0 50px rgba($accent, 0.3);

  * {
    position: relative;
  }

  .modal-bg-container {
    position: absolute;
    .modal-bg {
      overflow: hidden;
      mix-blend-mode: overlay;
    }
  }

  .close-button {
    z-index: 99;
    cursor: pointer;
    margin-top: 8px;
    margin-left: 8px;
  }

  h3 {
    margin-top: -16px;
    margin-bottom: 24px;
  }

  .media-container {
    margin-bottom: 24px;

    img {
      border-radius: 8px;
    }

    // https://css-tricks.com/fluid-width-video/#article-header-id-0
    .video-container {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 */
      height: 0;
      .video-player {
        border-radius: 8px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }

  .socials {
    margin-top: 32px;

    i {
      width: 32px;
      margin-left: 16px;
      margin-right: 16px;
    }
  }
}
</style>
