import Ember from 'ember';
import TooltipEnabled from '../mixins/tooltip-enabled';

/**
 * @module components
 * @class sl-input
 */
export default Ember.Component.extend( TooltipEnabled, {

    /**
     * Object containing action functions
     */
    actions: {

        /**
         * Sends the primary bound action when `enter` is pressed
         * @method enter
         */
        enter: function () {
            this.sendAction();
        }
    },

    /**
     * Class names for the containing div
     * @property {array} classNames
     */
    classNames: [ 'form-group', 'sl-input' ],

    /**
     * ID for the actual input element
     * @property {string} inputId
     */
    inputId: function () {
        return this.get( 'elementId' ) + 'Input';
    }.property( 'elementId' ),

    /**
     * Type attribute for the containing div
     * @property {string} type
     * @default "text"
     */
    type: 'text'
});
