<template>
  <div id="container" class="container is-widescreen">
    <Modal :v-if="team" :team="getSelectedTeam()" :isActive="isActive" 
    @modalClosed="handleModalClose"/>
    
    <div>
      <h2>Past Projects</h2>
      <p>
        Generations of students have created projects throughout the years as part of Launch Pad -
        here are some of our favourites!
      </p>
      <p>
        A complete list of our past projects is available on
        <a href="https://github.com/ubclaunchpad" target="_blank">GitHub</a>, where we have <b>over 100 repositories</b>.
      </p>
    </div>

    <div class="tile project-columns">
      <div v-for="(col, i) in columns" :key="'column-'+i" class="tile is-vertical project-column">
        <div ref="projects-project-card"
          v-for="(r, j) in col"
          :key="'row-'+i+'-'+j"
          class="tile project-container">
          <TeamProjectCard @projectClicked="setModalState" :team="r" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Team } from '@/data/types';
import { generateColumns, attachClassesIfInView, ModalState} from '@/lib/util';
import TeamProjectCard from '@/components/TeamProjectCard.vue';
import Modal from '@/components/Modal.vue';

/**
 * Projects implements a section for highlighting past Launch Pad projects.
 */
export default Vue.extend({
  name: 'Projects',
  props: {
    teams: {
      type: Array as () => Team[],
    },
  },
  computed: {
    columns: function(): Team[][] {
      return generateColumns<Team>(this.teams, 2);
    },
  },
  data: () => ({isActive: false, activeTeamName: '0'}),
  methods: {
    handleScroll() {
      attachClassesIfInView(window, this.$refs['projects-project-card'], 'animated fadeInUp slow');
    },
    setModalState(state: ModalState){
      this.isActive = state.isActive; 
      this.activeTeamName = state.activeTeamName;
    },
    handleModalClose() {
      this.isActive = false;
    },
    getSelectedTeam() {
      return this.teams.find((team: Team) => team.project.name === this.activeTeamName) ;  
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  components: {
    TeamProjectCard,
    Modal, 
  },
});
</script>

<style scoped lang="scss">
.project-column {
  display: flex;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;

  .project-container {
    margin-bottom: 52px;
  }
}
</style>
