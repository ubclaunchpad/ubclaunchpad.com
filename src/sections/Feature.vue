<template>
  <div class="feature container is-widescreen">
    <div class="columns is-vcentered is-tablet">
      <div class="pad-32 column is-three-fifths-tablet">
        <div class="animated slideInDown">
          <!-- column-based layout with the "aside" description visible on desktop (hide-mobile, hide-tablet) -->
          <div
            class="columns is-vcentered is-hidden-mobile is-hidden-tablet-only"
          >
            <div class="column is-narrow">
              <h1>UBC Launch Pad</h1>
            </div>
            <div class="column title-divider is-narrow" />
            <div class="column">
              <p class="main title-aside">
                Software Engineering<br />Design Team
              </p>
            </div>
          </div>

          <!-- simple title, description layout visible tablet -->
          <div class="is-hidden-desktop">
            <h1>UBC Launch Pad</h1>
            <p class="main is-hidden-desktop margin-bottom-16 margin-top-16">
              <b>Software Engineering Design Team</b>
            </p>
          </div>
        </div>

        <!-- put image between title and text on small screens -->
        <img
          src="@/assets/landing.png"
          class="small-image is-hidden-tablet"
          alt="feature image"
        />

        <div class="animated fadeIn">
          <p class="secondary">
            A leading student-run software club based in the University of
            British Columbia devoted to building applications in a collaborative
            and professional environment.
          </p>
          <p v-if="applicationsOpen" class="secondary">
            <i>{{ season }} applications are now open!</i>
          </p>
          <p v-else class="secondary">
            <i
              >We open applications every semester - subscribe to our newsletter
              for updates!</i
            >
          </p>
        </div>

        <div class="animated fadeInUp">
          <Button
            v-if="applicationsOpen"
            text="join us"
            primary
            :on-click="() => goTo('join')"
          />
          <Button
            v-if="!applicationsOpen"
            text="get updates"
            primary
            :on-click="() => goTo('resources')"
          />
          <Button text="our projects" :on-click="() => goTo('teams')" />
        </div>
      </div>

      <div class="column">
        <!-- put image on right side on desktop -->
        <img
          src="@/assets/landing.png"
          class="is-hidden-mobile"
          alt="feature image"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Button from '@/components/Button.vue';
import goals from "@/lib/fathomGoals";
import { goTo } from "@/lib/util";
import vueFathomInject from "@/mixins/vueFathomInject";

/**
 * Feature implements the landing section - the first thing visitors see.
 */
export default defineComponent({
  name: "Feature",
  components: {
    Button,
  },
  mixins: [vueFathomInject],
  props: {
    applicationsOpen: Boolean,
    season: { type: String, required: true },
  },
  methods: {
    /**
     * Called when one of the main buttons are clicked - these are "call-to-action" buttons.
     */
    goTo(anchor: string) {
      this.$fathom?.trackGoal(goals.CALLTOACTION_CLICK);
      goTo(document, anchor);
    },
  },
});
</script>

<style scoped lang="scss">
.feature {
  @media (max-width: $tablet) {
    margin-top: 80px;
  }

  .small-image {
    width: 100%;
    max-width: 300px;
    margin-top: 16px;
    margin-bottom: 32px;
  }

  .title-aside {
    font-size: 16px;
    line-height: 19px;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .title-divider {
    border-left: 2px solid $white;
    height: 42px;
    margin-left: 8px;
    margin-right: -12px;
  }
}
</style>
