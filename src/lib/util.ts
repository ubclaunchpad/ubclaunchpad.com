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
