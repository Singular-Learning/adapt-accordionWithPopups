# adapt-accordionWithPopups  

**Accordion With Popups** is a *presentation component* based on [adapt-contrib-accordion](https://github.com/adaptlearning/adapt-contrib-accordion), bundled with the [Adapt framework](https://github.com/adaptlearning/adapt_framework).  

**Accordion With Popups**' purpose is to display a vertically stacked list of headings. Each heading is associated with a collapsible content panel. Clicking a heading toggles the visibility of its content panel. Content panels may contain text with words that can be linked to open an integrated popup and/or an image.

<img src="https://gitlab.com/SingularLearning/documentation/-/raw/master/adapt_learning/plugins/images/adapt-accordionWithPopups.gif" alt="Accordion With Popup in action">

To use this component in the Adapt authoring tool, once you have written the text in the item body field, you have to select the text that you want to open a popup. With the selected text, click in the "link" button. Then you have to set the link type as "link to anchor in the text". Afterwards you have to click in the "advanced" tab and set an unique id. The last step is to set this unique id in the field "id" of the popup.
You can add as many popups as you want, but keep in mind that the id must be unique throughout the course.

## Installation

Like all external compontents it has to be installed in the Adapt framework and in the Adapt authoring tool in order to be used.

With the [Adapt CLI](https://github.com/adaptlearning/adapt-cli) installed, run the following from the command line: 
`adapt install adapt-accordionWithPopups `


    Alternatively, this component can also be installed by adding the following line of code to the *adapt.json* file:
    `"adapt-accordionWithPopups": "*"`
    Then running the command:
    `adapt install`
    (This second method will reinstall all plug-ins listed in *adapt.json*.)

In order to use **Accordion With Popups** in the Adapt authoring tool, you have to install it using the [Plug-in Manager](https://github.com/adaptlearning/adapt_authoring/wiki/Plugin-Management).

* If **Accordion With Popups** has been uninstalled from the Adapt framework or Adapt authoring tool, it may be reinstalled as above.

## Settings Overview

The attributes listed below are used in *components.json* to configure **Accordion With Popups**, and are properly formatted as JSON in [*example.json*](https://gitlab.com/singular-adapt/adapt-accordionWithPopups/blob/master/example.json).

### Attributes

[**core model attributes**](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes): These are inherited by every Adapt component. [Read more](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes).

**\_component** (string): This value must be: `accordionwithpopup`.

**\_classes** (string): CSS class name to be applied to **Accordion With Popups**’ containing div. The class must be predefined in one of the Less files. Separate multiple classes with a space.

**\_layout** (string): This defines the horizontal position of the component in the block. Acceptable values are `full`, `left` or `right`.

**instruction** (string): This optional text appears above the component. It is frequently used to
guide the learner’s interaction with the component.

**\_shouldCollapseItems** (boolean): Used to control the auto-collapse of other expanded Accordion items whenever an item is clicked/expanded. Defaulted to 'true'

**\_setCompletionOn** (string): Determines when the component registers as complete. Acceptable values are `"allItems"` and `"inview"`. `"allItems"` (the default) requires the learner to view every single accordion item; `"inview"` requires only that the component has been viewed (i.e. passed completely through the browser viewport).

**\_items** (array): Multiple items may be created. Each _item_ represents one element of the accordion and contains values for **title**, **body**, **\_graphic**, **\_popups** and **\_classes**.

>**title** (string): This text is displayed as the element's header. It is displayed at all times, even when the **body** has been collapsed.

>**body** (string): This content will be displayed when the learner opens this accordion element. It may contain HTML.

>**\_graphic** (object): An optional image which is displayed below the item body when the learner opens this accordion element. It contains values for **src**, **alt**, and **attribution**.

>>**src** (string): File name (including path) of the image. Path should be relative to the *src* folder (e.g., *course/en/images/c-45-1.jpg*).

>>**alt** (string): This text becomes the image’s `alt` attribute.

>>**attribution** (string): Optional text to be displayed as an [attribution](https://wiki.creativecommons.org/Best_practices_for_attribution). By default it is displayed over the bottom of the image. Adjust positioning by modifying CSS. Text can contain HTML tags, e.g., `Copyright © 2020 by <b>John Doe</b>`.


>**\_popups**(array): Multiple items may be created. Each item represents one popup and contains values for the element (**id**, **title**, **body**).

>>**id** (string): This value is the identificator for this popup element.

>>**title** (string): This value is the title for this popup element.

>>**body** (string): This is the main text for this popup element. HTML is permitted.

>**\_classes** (string): An optional class that will be applied to the Accordion Item. Supported classes are `"align-image-left"` and `"align-image-right"` which aligns the item image to the left or right in desktop view. On smaller screens the item image defaults underneath the item body text. Additional classes can be used but they must be predefined in one of the Less files. Separate multiple classes with a space.

### Accessibility
**adapt-accordionWithPopups** has been assigned a label using the [aria-label](https://github.com/adaptlearning/adapt_framework/wiki/Aria-Labels) attribute: **ariaRegion**. This label is not a visible element. It is utilized by assistive technology such as screen readers. Should the region's text need to be customised, it can be found within the **globals** object in [*properties.schema*](https://github.com/adaptlearning/adapt-contrib-accordion/blob/master/properties.schema).


## Limitations

No known limitations.

----------------------------
**Version number:**  1.0.0   <a href="https://singularlearning.com/" target="_blank"><img src="https://singularlearning.com/logo/singularLearning.png" alt="singularLearning logo" align="right"></a>  
**Version number Plugin Based** : 5.0.0  
**Framework versions:** 5+  
**Author / maintainer:** Singularlearning Team  
**Accessibility support:** WAI AA  
**RTL support:** Yes  
**Cross-platform coverage:** Chrome, Chrome for Android, Firefox (ESR + latest version), Edge, IE11, Safari 12+13 for macOS/iOS/iPadOS, Opera  
