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

function isInView(w: Window, el: Element): boolean {
  const rect = el.getBoundingClientRect();
  return rect.top < w.innerHeight && rect.bottom >= 0;
}

function updateClasses(el: Element, classNames: string, remove: boolean) {
  const classes = classNames.split(' ');
  if (!remove) classes.forEach((c) => el.classList.add(c));
  else classes.forEach((c) => el.classList.remove(c));
}

type VueRef = Vue | Element | Vue[] | Element[];

/**
 * Check if given element is within the window bounds (aka "in view") and attach classnames to it
 * if it is. Useful for making animations.
 * 
 * @param w window instance
 * @param ref element to check and update, retrieved from `this.$refs`
 * @param classNames string of classnames (e.g. 'animated fadeInleft')
 * @param removeIfNot optionally indicate that classes should be removed if the element has left the view
 */
export function attachClassesIfInView(w: Window, ref: VueRef, classNames: string, removeIfNot?: boolean) {
  if (ref instanceof Element) {
    if (isInView(w, ref)) updateClasses(ref, classNames, false);
    else if (removeIfNot) updateClasses(ref, classNames, true);
  } else if (ref instanceof Array) {
    ref.forEach((r: Vue | Element) => {
      if (r instanceof Element) {
        if (isInView(w, r)) updateClasses(r, classNames, false);
        else if (removeIfNot) updateClasses(r, classNames, true);
      }
    });
  }
}


/**
 * Describes the state of a modal
 */
export interface ModalState {
/**
 * if the modal is open or closed
 */
  isActive: boolean;
/**
 * The name of the select team 
 */
  activeTeamName: string;
}