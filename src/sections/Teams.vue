<template>
  <div id="container" class="container is-widescreen">
    <TeamProjectModal v-if="getSelectedTeam()" :team="getSelectedTeam()" :isActive="isActive"
    @modalClosed="handleModalClose"/>
    <div class="columns is-vcentered is-desktop">
      <div class="column is-two-fifths-desktop has-text-centered">

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
        <div class="columns is-multiline is-centered projects">
          <div
            v-for="(col, i) in columns"
            :key="'column-'+i"
            class="column is-one-half project-column">
            <div
              ref="teams-project-card"
              v-for="(r, j) in col"
              :key="'row-'+i+'-'+j"
              class="project-container hidden">
              <TeamProjectCard @projectClicked="setModalState" :team="r" class="margin-sides-auto"/>
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
import { generateColumns, updateClassesIfInView, ModalState } from '@/lib/util';

import TeamProjectCard from '@/components/TeamProjectCard.vue';
import TeamProjectModal from '@/components/TeamProjectModal.vue';

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
      updateClassesIfInView(window, this.$refs['teams-project-card'], {
        addClasses: 'animated fadeInRight slow',
        removeClasses: 'hidden',
      });
    },
    setModalState(state: ModalState){
      this.isActive = state.isActive;
      this.activeTeamName = state.activeTeamName;
    },
    handleModalClose() {
      this.isActive = false;
    },
    getSelectedTeam(): Team | undefined {
      return this.teams.find((team: Team) => team.project.name === this.activeTeamName);
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  components: {
    TeamProjectCard, TeamProjectModal,
  },
});
</script>

<style scoped lang="scss">
// this particular asset has a background - round off the corners to make it less jarring when
// against a lighter section of the backdrop
.teams-image {
  border-radius: 12px;
}

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

.stats {
  max-width: 100%;
  align-items: start;

  .stat-desc {
    white-space: pre-line;
  }
}

</style>
