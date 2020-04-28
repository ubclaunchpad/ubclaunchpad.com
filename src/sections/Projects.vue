<template>
  <div id="container" class="container is-widescreen">
    <TeamProjectModal
      v-if="activeTeam"
      :section="$options.name"
      :team="activeTeam"
      :isActive="isActive"
      @modalClosed="closeModal" />

    <div class="description">
      <h2>Past Projects</h2>
      <p>
        Generations of students have created projects throughout the years as part of Launch Pad -
        here are some of our favourites!
      </p>
    </div>

    <div class="columns is-multiline is-centered projects">
      <div
        v-for="(col, i) in columns"
        :key="'column-'+i"
        class="column is-one-quarter-widescreen is-half-desktop project-column">
        <div
          ref="projects-project-card"
          v-for="(r, j) in col"
          :key="'row-'+i+'-'+j"
          class="project-container hidden">
          <TeamProjectCard @projectClicked="setModalState" :team="r" :section="$options.name" class="margin-sides-auto" />
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Team } from '@/data/types';
import { generateColumns, updateClassesIfInView } from '@/lib/util';

import teamProjectModalController from '@/mixins/teamProjectModalController';
import TeamProjectCard from '@/components/TeamProjectCard.vue';
import TeamProjectModal from '@/components/TeamProjectModal.vue';

/**
 * Projects implements a section for highlighting past Launch Pad projects.
 */
export default Vue.extend({
  name: 'Projects',
  mixins: [teamProjectModalController],
  props: {
    teams: {
      type: Array as () => Team[],
    },
    /**
     * Link to UBC Launch Pad GitHub account
     */
    github: String,
  },
  computed: {
    columns(): Team[][] {
      return generateColumns<Team>(this.teams, 2);
    },
  },
  data: () => ({isActive: false, activeTeamName: '0'}),
  methods: {
    handleScroll() {
      updateClassesIfInView(window, this.$refs['projects-project-card'], {
        addClasses: 'animated fadeInUp slow',
        removeClasses: 'hidden',
      });
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  components: {
    TeamProjectCard,
    TeamProjectModal,
  },
});
</script>

<style scoped lang="scss">
.projects {
  padding-top: 24px;

  .project-column {
    padding-top: 0px;
    padding-bottom: 0px;

    .project-container {
      margin-bottom: 32px;
    }
  }
}
</style>
