(function() {
	return {
		events: {
			'ticket.custom_field_{{from}}.changed': 'onFromChanged'
		},
		onFromChanged: function() {
			var fromLabel = helpers.fmt('custom_field_%@', this.setting('from')),
				toLabel = helpers.fmt('custom_field_%@', this.setting('to')),
				fromValue = this.ticket().customField(fromLabel),
				toValue = '';
			if (!_.isEmpty(fromValue) && fromValue.indexOf("||") !== -1) {
				toValue = _.last(fromValue.split('||'));
				var nuFrom = (_.first(fromValue.split('||')));
				this.ticket().customField(toLabel, toValue);
				this.ticket().customField(fromLabel, nuFrom);
			}
		}
	};
}());