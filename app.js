(function() {
  return {
    events: {
      'ticket.custom_field_{{from}}.changed': 'onFromChanged'
    },
    onFromChanged: function() {
      var fromLabel = helpers.fmt('custom_field_%@', this.setting('from')),
        toLabel = helpers.fmt('custom_field_%@', this.setting('to')),
        supportIdLabel = helpers.fmt('custom_field_%@', this.setting('supportId')),
        fromValue = this.ticket().customField(fromLabel),
        toValue = '';
      if (!_.isEmpty(fromValue) && fromValue.indexOf("||") !== -1) {
        toValue = (fromValue.split('||')[1]);
        var supportIdValue = (fromValue.split('||')[2]);
        var nuFrom = (_.first(fromValue.split('||')));
        console.log(toValue);
        this.ticket().customField(toLabel, toValue);
        this.ticket().customField(fromLabel, nuFrom);
        this.ticket().customField(supportIdLabel, supportIdValue);
      }
    }
  };
}());