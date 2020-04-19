<template>
  <div id="container" class="container is-widescreen">
    <div class="columns is-vcentered">
      <div class="pad-32 column is-one-third has-text-centered">
        <h2>Our Teams</h2>
        <img src="@/assets/screen.png" width="300px" />

        <div class="level">
          <div v-for="s in stats" :key="s.description" class="level-item has-text-centered">
            <div>
              <h2 class="margin-bottom-16">{{ s.value }}</h2>
              <p class="pad-sides-8">{{ s.description }}</p>
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
        <div class="tile project-columns is-pulled-right">
          <div v-for="(col, i) in columns" :key="'column-'+i" class="tile is-vertical project-column">
            <div v-for="(r, j) in col" :key="'row-'+i+'-'+j" class="tile project-container">
              <TeamProjectCard :team="r" />
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
import TeamProjectCard from '@/components/TeamProjectCard.vue';

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
    description: 'Designers',
  },
  {
    value: '1',
    description: 'Tech Lead',
  },
];

export default Vue.extend({
  name: 'Teams',
  components: {
    TeamProjectCard,
  },
  props: {
    memberCount: Number,
    teams: {
      type: Object as () => Team[],
    },
  },
  data: () => ({ stats }),
  computed: {
    columns: function() {
      const perRow = 2;
      const perColumn = Math.ceil(this.teams.length / perRow);
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
.project-column {
  padding-right: 16px;
  padding-left: 16px;
}
.project-container {
  margin-bottom: 36px;
}
</style>
