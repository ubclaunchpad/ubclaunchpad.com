import Vue from 'vue';
import { Team } from '@/data/types';
import { TeamProjectModalState, getURLParams } from '@/lib/util';

/**
 * This mixin provides a controller for handling TeamProjectModalState.
 * 
 * See Projects.vue, Teams.vue for examples.
 */
export default Vue.extend({
  props: {
    teams: {
      type: Array as () => Team[],
    },
  },
  data: () => ({ isActive: false, activeTeamName: '0' }),
  methods: {
    getTeamByName(name: string): Team | undefined {
      return this.teams.find((team: Team) =>
        team.project.name.toLowerCase() === name.toLowerCase());
    },
    setModalState(state: TeamProjectModalState) {
      this.isActive = state.isActive;
      this.activeTeamName = state.activeTeamName;
    },
    closeModal() {
      this.isActive = false;
    },
  },
  computed: {
    activeTeam(): Team | undefined {
      return this.getTeamByName(this.activeTeamName);
    },
  },
  created() {
    // jump to linked project if one is provided, AND if the project exists
    const linkedProject = getURLParams(window.location).get('project');
    if (linkedProject && this.getTeamByName(linkedProject)) {
      this.$gtag.event('direct-project-link', {
        event_category: this.$options.name,
        event_label: linkedProject,
      });
      this.setModalState({
        isActive: true,
        activeTeamName: linkedProject,
      });
    }
  },
});
