import Ember from 'ember';
import layout from '../templates/components/pbi-icon';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  layout,
  tagName: 'i',
  classNames: [
    'glyphicon'
  ],
  classNameBindings: [
    'iconName',
    'iconSize'
  ],

  size: 'medium',
  name: 'unknown',

  iconName: computed('name', function () {
    return `pbi-glyph-${this.get('name')}`;
  }),

  iconSize: computed('size', function () {
    return `glyph-${this.get('size')}`;
  })
});
