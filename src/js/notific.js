import { toggleRef } from './theme-switch';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import {
  info,
  alert,
  notice,
  error,
  defaultModules,
} from '@pnotify/core/dist/PNotify.js';

const notific = {
  myError(text) {
    error({
      text: text,
      styling: 'brighttheme',
      icons: 'brighttheme',
      mode: chooseTopic(),
      maxTextHeight: null,
      delay: 3000,
    });
  },
  myAlert(text) {
    alert({
      text: text,
      styling: 'brighttheme',
      icons: 'brighttheme',
      mode: chooseTopic(),
      maxTextHeight: null,
      delay: 3000,
    });
  },
};

function chooseTopic() {
  if (toggleRef.checked) {
    return 'dark';
  }
  return 'light';
}

export { notific };
