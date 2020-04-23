<template>
  <div id="container" class="container is-widescreen">
    <Modal :v-if="team" :team="getSelectedTeam()" :isActive="isActive"
    @modalClosed="handleModalClose"/>
    <div class="columns is-vcentered is-desktop">
      <div class="column is-one-third-desktop has-text-centered">

        <h2>Our Teams</h2>
        <img src="@/assets/screen.png" width="300px" class="teams-image" />

        <div class="level stats">
          <div v-for="s in stats" :key="s.description" class="level-item has-text-centered">
            <div>
              <h2 class="margin-bottom-16">{{ s.value }}</h2>
              <p class="stat-desc pad-sides-8">
                <b>{{ s.description }}</b>
              </p>
            </div>
          </div>
        </div>

        <p class="secondary">
          Our teams are made up of around 8 people across various disciplines, lead by an experienced tech lead.
        </p>
        <p class="secondary">
          This year, we had <b>{{ memberCount }} members</b> across <b>{{ teams.length }} teams</b>.
        </p>
      </div>
      <div class="column">
        <div class="tile">
          <div v-for="(col, i) in columns" :key="'column-'+i" class="tile is-vertical project-column">
            <div ref="teams-project-card"
              v-for="(r, j) in col"
              :key="'row-'+i+'-'+j"
              class="tile project-container">
              <TeamProjectCard @projectClicked="setModalState" :team="r" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Team } from '@/data/types';
import { generateColumns, attachClassesIfInView, ModalState } from '@/lib/util';
import TeamProjectCard from '@/components/TeamProjectCard.vue';
import Modal from '@/components/Modal.vue';

interface TeamStats {
  value: string;
  description: string;
}

const stats: TeamStats[] = [
  {
    value: '5+',
    description: 'Developers',
  },
  {
    value: '1-2',
    description: 'Designers\nand Strategists',
  },
  {
    value: '1',
    description: 'Tech Lead',
  },
];

/**
 * Teams implements a section to talk about Launch Pad's teams and feature our current teams.
 */
export default Vue.extend({
  name: 'Teams',
  props: {
    teams: {
      type: Array as () => Team[],
    },
    memberCount: Number,
  },
  data: () => ({ stats, isActive: false, activeTeamName: '0'}),
  computed: {
    columns: function(): Team[][] {
      const perRow = 2;
      const perColumn = Math.ceil(this.teams.length / perRow);
      return generateColumns<Team>(this.teams, perColumn);
    },
  },
  methods: {
    handleScroll() {
      attachClassesIfInView(window, this.$refs['teams-project-card'], 'animated fadeInRight slow');
    },
    setModalState(state: ModalState){
      this.isActive = state.isActive;
      this.activeTeamName = state.activeTeamName;
    },
    handleModalClose() {
      this.isActive = false;
      console.log('hitting modal close');
    },
    getSelectedTeam(): Team | undefined {
      return this.teams.find((team: Team) => team.project.name === this.activeTeamName);
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  components: {
    TeamProjectCard, Modal,
  },
});
</script>

<style scoped lang="scss">
// this particular asset has a background - round off the corners to make it less jarring when
// against a lighter section of the backdrop
.teams-image {
  border-radius: 12px;
}

.project-column {
  display: flex;
  align-items: center;
  padding-right: 16px;
  padding-left: 16px;

  .project-container {
    display: flex;
    align-items: center;
    margin-bottom: 36px;
  }
}

.stats {
  max-width: 100%;
  align-items: start;

  .stat-desc {
    white-space: pre-line;
  }
}

</style>
