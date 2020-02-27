define([
  'core/js/adapt',
  './accordionWithPopupModel',
  './accordionWithPopupView'
], function(Adapt, AccordionWithPopupModel, AccordionWithPopupView) {

  return Adapt.register('accordionwithpopup', {
    model: AccordionWithPopupModel,
    view: AccordionWithPopupView
  });

});
