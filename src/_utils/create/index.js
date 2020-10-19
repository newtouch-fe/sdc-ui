import { createBEM } from './bem';
import { createComponent } from './component';
export function createNamespace(name) {
  name = 'sdc-' + name;
  return [createComponent(name), createBEM(name)];
}