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
 *        goTo(anchor: string) { goTo(document, anchor); },
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
export function goTo(document: HTMLDocument, id: string): void {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function isInView(w: Window, el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect();
  return rect.top < w.innerHeight && rect.bottom >= 0;
}

function updateClasses(el: HTMLElement, classNames: string, remove: boolean) {
  const classes = classNames.split(' ');
  if (!remove) classes.forEach((c) => el.classList.add(c));
  else classes.forEach((c) => el.classList.remove(c));
}

/**
 * Check if given element is within the window bounds (aka "in view") and attach classnames to it
 * if it is. Useful for making animations.
 * 
 * @param w window instance
 * @param el element to check and update
 * @param classNames string of classnames (e.g. 'animated fadeInleft')
 * @param removeIfNot optionally indicate that classes should be removed if the element has left the view
 */
export function attachClassesIfInView(w: Window, el: HTMLElement | null, classNames: string, removeIfNot?: boolean) {
  if (el) {
    if (isInView(w, el)) updateClasses(el, classNames, false);
    else if (removeIfNot) updateClasses(el, classNames, true);
  }
}
