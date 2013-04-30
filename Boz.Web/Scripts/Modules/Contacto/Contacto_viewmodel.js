define([], function () {
    function inicioViewmodel() {
        var self = this;

        self.title = 'Contacto';
        self.headerImage = 'DivImageContacto';
        self.headerText = 'Siempre disponibles <br />Para servirte';
        self.content = '<form><div><label class="ContactLabel">Nombre :</label><input class="InputField"/></div><div><label class="ContactLabel">Correo :</label><input class="InputField"/></div><div><label class="ContactLabel">Pregunta :</label><textarea class="InputMultiLineField" rows="5"></textarea></div><div><input style="margin-left:300px;" class="Button" type="button" value="Enviar"/></div></form>';
    }

    return inicioViewmodel;
});