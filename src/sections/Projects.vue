<template>
  <div id="container" class="container is-widescreen">
    <div>
      <h2>Past Projects</h2>
    </div>

    <div class="tile project-columns">
      <div v-for="(col, i) in columns" :key="'column-'+i" class="tile is-vertical project-column">
        <div v-for="(r, j) in col" :key="'row-'+i+'-'+j" class="tile project-container">
          <TeamProjectCard :team="r" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Team } from '@/data/types';
import TeamProjectCard from '@/components/TeamProjectCard.vue';

export default Vue.extend({
  name: 'Projects',
  components: {
    TeamProjectCard,
  },
  props: {
    teams: {
      type: Object as () => Team[],
    },
  },
  computed: {
    columns: function() {
      // sort teams into columns
      const perColumn = 2;
      const columns: Team[][] = [];
      for (let i = 0; i < this.teams.length; i+=perColumn) {
        const col = [this.teams[i]];
        for (let j = 1; j < perColumn; j+=1) {
          if (i+j < this.teams.length) col.push(this.teams[i+j]);
        }
        columns.push(col);
      }
      return columns;
    },
  },
});
</script>

<style scoped lang="scss">
.project-columns {
  > :first-child { padding-left: 0px; }
  > :last-child { padding-right: 0px; }
}
.project-column {
  padding-right: 16px;
  padding-left: 16px;
}

.project-container {
  margin-bottom: 52px;
}
</style>
