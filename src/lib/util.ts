/**
 * Turns a single array into an array of arrays, each one representing a column.
 * 
 * Useful for displaying grids, for example:
 * 
 *    <div class="tile">
 *      <div v-for="(col, i) in columns" :key="'column-'+i" class="tile is-vertical">
 *        <div v-for="(s, j) in col" :key="'row-'+i+'-'+j" class="tile">
 *          <!-- s is of type T -->
 *        </div>
 *      </div>
 *    </div>
 * 
 * @param data array of data to sort out
 * @param perColumn items per column
 */
export function generateColumns<T>(data: T[], perColumn: number): T[][] {
  const columns: T[][] = [];
  for (let i = 0; i < data.length; i+=perColumn) {
    const col = [data[i]];
    for (let j = 1; j < perColumn; j+=1) {
      if (i+j < data.length) col.push(data[i+j]);
    }
    columns.push(col);
  }
  return columns;
}

/**
 * Scroll smoothly to an element. Add it to `methods`:
 * 
 *    export default Vue.extend({
 *      name: 'Nav',
 *      methods: {
 *        goTo: function(anchor: string) { goTo(document, anchor); },
 *      },
 *    });
 * 
 * Then, for example it, bind it to an `v:on:click`:
 * 
 *    <a v-on:click="goTo('teams')">Click me!</a>
 * 
 * @param document HTML document (in vue components, just provide `document`)
 * @param id element to find and scrhool to
 */
export function goTo(document: HTMLDocument, id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
