/**
 * Declare icons to use in the website here. See https://antonreshetov.github.io/vue-unicons/ for
 * list of available icons.
 * 
 * In general, the naming scheme is for some icon `name="some-icon"`, you will need to import and
 * add `uniSomeIcon`.
 * 
 * To use in a component:
 * 
 * ```
 * <unicon name="github-alt" class="icon-medium"></unicon>
 * ```
 * 
 * Styles are available in `util.scss` under `.unicon`.
 */

import Unicon from 'vue-unicons';
import {
  uniTimes, // times
  uniAppleAlt, // apple-alt
  uniGithubAlt, // github-alt
  uniAndroidAlt, // android-alt
  uniWindow, // window
  uniFacebookF, // facebook-f
  uniLinkedin, // linkedin-alt
  uniInstagram, // instagram
  uniAngleDown, // angle-down
  uniNotebooks, // notebooks
  uniMediumM, // medium-m
  uniShareAlt, // share-alt
} from 'vue-unicons/src/icons';

Unicon.add([
  uniTimes,
  uniAppleAlt,
  uniGithubAlt,
  uniAndroidAlt,
  uniWindow,
  uniFacebookF,
  uniLinkedin,
  uniInstagram,
  uniAngleDown,
  uniNotebooks,
  uniMediumM,
  uniShareAlt,
]);

export default Unicon;