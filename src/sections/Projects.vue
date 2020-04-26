<template>
  <div id="container" class="container is-widescreen">
    <TeamProjectModal
      v-if="activeTeam"
      section="projects"
      :team="activeTeam"
      :isActive="isActive"
      @modalClosed="handleModalClose" />

    <div class="description">
      <h2>Past Projects</h2>
      <p>
        Generations of students have created projects throughout the years as part of Launch Pad -
        here are some of our favourites!
      </p>
      <p>
        A complete list of our past projects is available on
        <a :href="github" target="_blank"><b>GitHub</b></a>, where we have <b>over 100 repositories</b>.
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
          <TeamProjectCard @projectClicked="setModalState" :team="r" section="projects" class="margin-sides-auto" />
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Team } from '@/data/types';
import { generateColumns, updateClassesIfInView, getURLParams, ModalState, getTeamByName } from '@/lib/util';
import TeamProjectCard from '@/components/TeamProjectCard.vue';
import TeamProjectModal from '@/components/TeamProjectModal.vue';

/**
 * Projects implements a section for highlighting past Launch Pad projects.
 */
export default Vue.extend({
  name: 'Projects',
  props: {
    github: String,
    teams: {
      type: Array as () => Team[],
    },
  },
  computed: {
    columns(): Team[][] {
      return generateColumns<Team>(this.teams, 2);
    },
    activeTeam(): Team | undefined {
      return getTeamByName(this.teams, this.activeTeamName);
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
    setModalState(state: ModalState) {
      this.isActive = state.isActive;
      this.activeTeamName = state.activeTeamName;
    },
    handleModalClose() {
      this.isActive = false;
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);

    // jump to linked project if one is provided
    const linkedProject = getURLParams(window.location).get('project');
    if (linkedProject && getTeamByName(this.teams, linkedProject)) {
      this.$gtag.event('direct-project-link', {
        event_category: 'projects',
        event_label: linkedProject,
      });
      this.setModalState({
        isActive: true,
        activeTeamName: linkedProject,
      });
    }
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
