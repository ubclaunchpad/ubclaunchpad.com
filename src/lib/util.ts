/**
 * Turns a single array into an array of arrays, each one representing a column.
 * 
 * Useful for displaying grids, for example:
 * 
 *    <div class="columns is-multiline">
 *      <div v-for="(col, i) in columns" :key="'column-'+i" class="column">
 *        <div v-for="(s, j) in col" :key="'row-'+i+'-'+j">
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
  if (!remove) el.classList.add(...classes);
  else el.classList.remove(...classes);
}

export type VueRef = Vue | Element | Vue[] | Element[] | null;

/**
 * Check if given element is within the window bounds (aka "in view") and updates classnames to it
 * if it is. Useful for making animations:
 * 
 *     // ...
 *     methods: {
 *       handleScroll() {
 *         updateClassesIfInView(window, this.$refs['position-animated'], {
 *           addClasses: 'animated fadeInLeft',
 *         });
 *       },
 *     },
 *     created() {
 *       window.addEventListener('scroll', this.handleScroll);
 *     },
 *     // ...
 * 
 * For elements animating elements that might load a bit slower, such as the elements including
 * images, it might be useful to mark them as `.hidden` beforehand and removing the classes on
 * scroll by using `removeClasses: 'hidden'`.
 * 
 * @param w window instance
 * @param ref element to check and update, retrieved from `this.$refs`
 * @param classNames string of classnames (e.g. 'animated fadeInleft')
 * @param removeIfNot optionally indicate that classes should be removed if the element has left the view
 */
export function updateClassesIfInView(w: Window, ref: VueRef, options: {
  addClasses?: string;
  removeClasses?: string;
}) {
  if (ref instanceof Element && isInView(w, ref)) {
    if (options.addClasses) updateClasses(ref, options.addClasses, false);
    if (options.removeClasses) updateClasses(ref, options.removeClasses, true);
  } else if (ref instanceof Array) {
    ref.forEach((r: Vue | Element) => {
      if (r instanceof Element) {
        if (isInView(w, r)) {
          if (options.addClasses) updateClasses(r, options.addClasses, false);
          if (options.removeClasses) updateClasses(r, options.removeClasses, true);
        }
      }
    });
  }
}

/**
 * Retrieves search params from window location.
 * 
 * @param location `window.location` instance
 */
export function getURLParams(location: Location): URLSearchParams {
  const uri = location.search.substring(1);
  return new URLSearchParams(uri);
}

/**
 * Generates normalized URL search parameters encoding the given arguments.
 * 
 * @param args arguments to encode in URL
 */
export function createURLParams(args: object): string {
  return new URLSearchParams(args as Record<string, string>).toString().toLowerCase();
}
