import TestUtils from 'react-addons-test-utils';

export function renderShallow(component) {
  const renderer = TestUtils.createRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
}
