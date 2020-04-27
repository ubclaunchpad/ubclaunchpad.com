/**
 * This script generates Netlify redirects for some relevant links. It is run as part of the post-build
 * step in `npm run build` (more specifically, `npm run redirects`).
 */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./node.d.ts" />
import { writeFileSync } from 'fs';
import { clubConfig, sponsorshipConfig, recruitmentConfig, redirectsConfig } from '../src/config';

// Redirects have format: '/path' + '\t' + 'targetURL'
const redirects = [
  // socials
  `/facebook\t${clubConfig.socials.facebook}`,
  `/instagram\t${clubConfig.socials.instagram}`,
  `/github\t${clubConfig.socials.github}`,
  `/medium\t${clubConfig.socials.medium}`,
  `/linkedin\t${clubConfig.socials.linkedin}`,

  // sponsorship package
  `/sponsorship\t${sponsorshipConfig.packageURL}`,
];

// applications
if (recruitmentConfig.applicationsOpen) {
  recruitmentConfig.positions.forEach((p) => {
    redirects.push(`/apply/${p.name.toLowerCase()}\t${p.applicationURL}`);
  });
}

// custom redirects
redirectsConfig.forEach((r) => {
  redirects.push(`${r.path}\t${r.target}`);
});

// write to Netlify `_redirects`, as well as a `redirects.txt` that we can access
console.log('generated redirects', redirects);
writeFileSync('./dist/_redirects', redirects.join('\n'));
writeFileSync('./dist/redirects.txt', `# redirects.txt
#
# This file lists all currently active redirects for https://ubclaunchpad.com - on the left of each
# row is the path that gets redirected, and on the right is the destination.
#
# For example, 'https://ubclaunchpad.com/facebook' will redirect to '${clubConfig.socials.facebook}'.

${redirects.join('\n')}
`);
