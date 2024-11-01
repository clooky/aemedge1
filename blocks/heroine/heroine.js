import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const div = document.createElement('div');
  div.className = 'heroine-body';
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
    });
  });
  block.append(div);
}
