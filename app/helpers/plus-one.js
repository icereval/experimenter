import Ember from 'ember';

export function plusOne(params/*, hash*/) {
    return params[0] + 1;
}

export default Ember.Helper.helper(plusOne);
