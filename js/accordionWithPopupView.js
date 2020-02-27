define([
  'core/js/adapt',
  'core/js/views/componentView'
], function(Adapt, ComponentView) {

  var AccordionWithPopupView = ComponentView.extend({

    events: {
      'click .js-toggle-item': 'onClick',
      'click a[id]': 'openPopup',
    },

    preRender: function() {
      this.checkIfResetOnRevisit();

      this.model.resetActiveItems();

      this.listenTo(this.model.get('_children'), {
        'change:_isActive': this.onItemsActiveChange,
        'change:_isVisited': this.onItemsVisitedChange
      });
    },

    postRender: function() {
      this.setReadyStatus();

      if (this.model.get('_setCompletionOn') === 'inview') {
        this.setupInviewCompletion();
      }
    },

    checkIfResetOnRevisit: function() {
      var isResetOnRevisit = this.model.get('_isResetOnRevisit');

      // If reset is enabled set defaults
      if (isResetOnRevisit) {
        this.model.reset(isResetOnRevisit);
      }
    },

    onClick: function(event) {
      event.preventDefault();

      this.model.toggleItemsState($(event.currentTarget).parent().data('index'));
    },

    onItemsActiveChange: function(item, isActive) {
      this.toggleItem(item, isActive);
    },

    onItemsVisitedChange: function(item, isVisited) {
      if (!isVisited) return;

      var $item = this.getItemElement(item);

      $item.children('.accordionwithpopup__item-btn').addClass('is-visited');
    },

    toggleItem: function(item, shouldExpand) {
      var $item = this.getItemElement(item);
      var $body = $item.children('.accordionwithpopup__item-content').stop(true, true);

      $item.children('.accordionwithpopup__item-btn')
        .toggleClass('is-selected is-open', shouldExpand)
        .toggleClass('is-closed', !shouldExpand)
        .attr('aria-expanded', shouldExpand);

      if (!shouldExpand) {
        $body.slideUp(this.model.get('_toggleSpeed'));
        return;
      }

      $body.slideDown(this.model.get('_toggleSpeed'));
    },

    getItemElement: function(item) {
      var index = item.get('_index');

      return this.$('.accordionwithpopup__item').filter('[data-index="' + index +'"]');
    },

    openPopup: function(event) {
      event && event.preventDefault();

      var acordeonPopupItems = this.model.activePopupItems();
      var currentPopup = event.target;
      this.setPopUpContent(acordeonPopupItems,currentPopup);
    },

    setPopUpContent: function(popups,target) {
      var popup = {},
      popupObject = {};

      for (var i = 0; i < popups.length; i++) {
        popup = popups[i];
        if ( popup.id === target.id ) {
          popupObject = {
            title: popup.title,
            body: popup.body
          };
        }
      }
          
      Adapt.notify.popup(popupObject);
    }

  });

  return AccordionWithPopupView;

});
