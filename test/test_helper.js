import jsdom from 'jsdom';
import React from 'react/addons';
import TestUtils from 'react-addons-test-utils';

export function setupFakeDOM() {
  global.document = jsdom.jsdom("<!doctype html><html><body></body></html");
  global.window = document.parentWindow;
  global.navigator = { userAgent: 'node.js' };
  // There is a small hack for this, but is probably not needed
  // post 0.14 beta
  // require('react/lib/ExecutionEnvironment').canUseDom = true;
}

export function renderShallow(component) {
  const renderer = TestUtils.createRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
}
