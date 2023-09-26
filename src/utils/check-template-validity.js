import { templates } from '../types';
export function checkTemplateValidity(template) {
    return typeof template === 'undefined' || templates.includes(template);
}
