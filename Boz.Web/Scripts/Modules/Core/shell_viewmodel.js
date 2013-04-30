define(["knockout","sammy", "jquery" ], function (ko, sammy) {
    function shellViewModel() {
        var self = this;
         self.views = ['Inicio', 'Servicios', 'Nosotros', 'Contacto', 'LOG IN'];
        self.currentViewId = ko.observable();
        self.currentViewData = ko.observable();

        self.goToView = function(view) { location.hash = view; };

        sammy(function() {
            this.get('#:view', function() {
                self.currentViewId(this.params.view);
                
                if (this.params.view == 'LOG IN') return;

                var modulePath = 'Modules/'+this.params.view + '/' + this.params.view + '_viewmodel';
                require([modulePath], function(model) {
                    self.currentViewData(new model());
                });
            });
            
            this.get('', function () { this.app.runRoute('get', '#Inicio');});
        }).run();
    }

    return shellViewModel;
});