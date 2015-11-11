var NgoController = {
    getNgos: function () {
        var $element = $('#page-ngo');
        var ngos = NgoModel.getNgos();
        NgoView.renderNgos($element,ngos);        
    }
}


