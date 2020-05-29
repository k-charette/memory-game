import { path } from 'ramda';

export function getFromTheme (themePath = '') {
    return function getFromThemeProps (props = {}) {
        return path(themePath.split('.'), props.theme);
    }
}


// getFromTheme is a helper function for grabbing nested props in styled components 