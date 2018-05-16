define([
    "dojo/_base/declare",
    "dojo/when",
    "dijit/_Widget",
    "dijit/_TemplatedMixin",
    "epi/shell/_ContextMixin"
], function (
    declare, 
    when,
    _Widget,
    _TemplatedMixin,
    _ContextMixin
) {
    return declare([_Widget, _TemplatedMixin, _ContextMixin], {

        textbox:null,
        templateString:'<div> \
                      <input type="text" data-dojo-attach-point="textbox" data-dojo-attach-event="onchange:_onChange" /> \
                     </div>',
		constructor: function() {
			when(this.getCurrentContext(),
				function(context) {
					console.log("we have context\n dataType:"+context.dataType+"\n context:"+JSON.stringify(context));
				});
		},
		buildRendering: function () {
			this.inherited(arguments);

			// it won't work
			/* when(this.getCurrentContext(),
				 function (context) {
					 this.contextName.innerHTML = "we have context\n dataType:" +
						 context.dataType +
						 "\n context:" +
						 JSON.stringify(context);
				 }.bind(this));*/

			var name = this.name; // name of the property
			var contextParentType = this.context_parentType; // it will be your block
			var contextLink = this.context_link; // when creating the block from ContentArea this will be ""
			if (contextLink === "") {
				console.log("creating block from ContentArea");
				// do something special
			}
		},
        postCreate: function () {
            // summary:
            //    Set the value to the textbox after the DOM fragment is created.
            // tags:
            //    protected

            this.set('value', this.value);

        },

        _setValueAttr: function (value) {
            // summary:
            //    Sets the value of the widget to "value" and updates the value displayed in the textbox.
            // tags:
            //    private

            this._set('value', value);
            this.textbox.value = this.value || '';
        },
        _onChange: function (event) {
            // summary:
            //    Handles the textbox change event and populates this to the onChange method.
            // tags:
            //    private

            this._set('value', event.target.value);
            this.onChange(this.value);
        }
    });
});