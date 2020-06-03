var diasdelasemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
var horasdelasemana = ['07:30', '08:20', '09:10', '10:00', '10:50', '11:40', '12:30', '13:20',
    '14:10', '15:00', '15:50', '16:40', '17:30', '18:20', '19:10', '20:00', '20:50'
];
var cursosGuias = [{
        Nombre: 'ORGANIZACION Y METODOS',
        Ciclo: 5,
        Codigo: 'AD326',
        Creditos: 3,
        Color: 'green',
        Hora: [{
                dia: 'Jueves',
                horas: ['12:30', '13:20'],
                aula: 'Mlt.01'
            },
            {
                dia: 'Martes',
                horas: ['12:30', '13:20'],
                aula: 'Aul.32'
            }
        ]
    },
    {
        Nombre: 'FISICA III',
        Ciclo: 5,
        Codigo: 'FF311',
        Creditos: 3,
        Color: 'lime',
        Hora: [{
                dia: 'Miercoles',
                horas: ['14:10', '15:00'],
                aula: 'L.I.03'
            },
            {
                dia: 'Viernes',
                horas: ['14:10', '15:00'],
                aula: 'L.I.03'
            }
        ]
    },
    {
        Nombre: 'SISTEMAS ELECTRICOS Y ELECTRONICOS 48B',
        Ciclo: 5,
        Codigo: 'IS332',
        Creditos: 4,
        Color: 'orange',
        Hora: [{
                dia: 'Lunes',
                horas: ['07:30', '08:20', '09:10'],
                aula: 'L.I.06'
            },
            {
                dia: 'Lunes',
                horas: ['10:00', '10:50'],
                aula: 'L.I.06'
            }
        ]
    },
    {
        Nombre: 'TALLER DE PROGRAMACION 48B',
        Ciclo: 5,
        Codigo: 'IS334',
        Creditos: 3,
        Color: 'deep-orange',
        Hora: [{
            dia: 'Miercoles',
            horas: ['07:30', '08:20', '09:10', '10:00', '10:50', '11:40'],
            aula: 'L.I.02'
        }]
    },
    {
        Nombre: 'SISTEMICA 48B',
        Ciclo: 6,
        Codigo: 'IS354',
        Creditos: 4,
        Color: 'red lighten-3',
        Hora: [{
                dia: 'Lunes',
                horas: ['16:40', '17:30', '18:20'],
                aula: 'Mlt.01'
            },
            {
                dia: 'Martes',
                horas: ['16:40', '17:30'],
                aula: 'L.I.02'
            }
        ]
    },
    {
        Nombre: 'SISTEMAS PRODUCTIVOS 48B',
        Codigo: 'IS355',
        Ciclo: 6,
        Creditos: 4,
        Color: 'purple lighten-3',
        Hora: [{
                dia: 'Viernes',
                horas: ['09:10', '10:00', '10:50'],
                aula: 'Mlt.01'
            },
            {
                dia: 'Jueves',
                horas: ['10:00', '10:50'],
                aula: 'L.I.05'
            }
        ]
    },
    {
        Nombre: 'DISEÑO DE EXPERIMENTOS 48B',
        Codigo: 'IS413',
        Ciclo: 7,
        Creditos: 4,
        Color: 'teal lighten-3',
        Hora: [{
                dia: 'Jueves',
                horas: ['14:10', '15:00'],
                aula: 'Mlt.02'
            },
            {
                dia: 'Viernes',
                horas: ['07:30', '08:20'],
                aula: 'L.I.04'
            }
        ]
    }
];


function cargar() {
    var html = document.getElementById('horario');
    html.innerHTML = '';
    var html1 = '';

    for (var i = 0; i < horasdelasemana.length; i++) {
        html1 += '<tr>';
        for (var j = 0; j < diasdelasemana.length + 1; j++) {
            html1 += (i === 0 && j === 0) ? '<th class="grey lighten-1 center-align">Hora</th>' : '';
            html1 += (i === 0 && j !== 0) ? '<th class="grey lighten-1 center-align">' + diasdelasemana[j - 1] + '</th>' : '';
            html1 += (j === 0 && i !== 0) ? '<th class="grey lighten-1 center-align">' + horasdelasemana[i - 1] + '</th>' : '';
            html1 += (j !== 0 && i !== 0) ? '<td style="padding: 0px" class="grey lighten-3 center-align" id="cel-' + (i - 1) + '' + (j - 1) + '"></td>' : '';
        };
        html1 += '</tr>';
    };
    document.getElementById('horario').innerHTML = html1;
};

function rellenar() {

    for (var i = 0; i < cursosGuias.length; i++) {
        for (var j = 0; j < cursosGuias[i].Hora.length; j++) {
            for (var k = 0; k < diasdelasemana.length; k++) {
                if (cursosGuias[i].Hora[j].dia === diasdelasemana[k]) {
                    for (var m = 0; m < cursosGuias[i].Hora[j].horas.length; m++) {
                        for (var n = 0; n < horasdelasemana.length; n++) {
                            var pintar2 = 'cel-';
                            if (cursosGuias[i].Hora[j].horas[m] === horasdelasemana[n]) {
                                pintar2 += n + '' + k;
                                //console.log(pintar2);
                                var casillero1 = document.getElementById(pintar2);
                                var tablacasillero;
                                if (document.getElementById('tabl-' + pintar2) !== null) {
                                    tablacasillero = document.getElementById('tabl-' + pintar2);
                                } else {
                                    tablacasillero = document.createElement('table');
                                    tablacasillero.setAttribute('id', 'tabl-' + pintar2);
                                }
                                var tr1 = document.createElement('tr');

                                var td1 = document.createElement('td');
                                td1.setAttribute('class', 'tooltipped ' + cursosGuias[i].Color + ' white-text center-align');
                                td1.setAttribute('data-position', 'bottom');
                                td1.setAttribute('data-tooltip', cursosGuias[i].Nombre + "\n" + 'Aula: ' + cursosGuias[i].Hora[j].aula);
                                var texto1 = document.createTextNode(cursosGuias[i].Codigo);
                                td1.appendChild(texto1);
                                tr1.appendChild(td1);
                                tablacasillero.appendChild(tr1);
                                casillero1.appendChild(tablacasillero);



                                //document.getElementById(pintar2).innerHTML = cursosGuias[i].Codigo;
                            };
                        };
                    };
                };
            };
        };
    };
    listar();
};

function listar() {
    var lista = document.getElementById('listaCursos');
    lista.innerHTML = '';

    /*Creditos matriculados*/

    var SumaDeCreditos = document.createElement('li');
    SumaDeCreditos.setAttribute('id', 'totalCred');
    var total = 0;
    lista.appendChild(SumaDeCreditos);


    for (var i = 0; i < cursosGuias.length; i++) {
        total += cursosGuias[i].Creditos;
        var curso = document.createElement('li');
        curso.setAttribute('id', 'cu-' + cursosGuias[i].Codigo);
        /*Header*/
        var header = document.createElement('div');
        header.setAttribute('class', 'collapsible-header grey lighten-1');

        var icon = document.createElement('i');
        icon.setAttribute('class', 'material-icons');
        var nameIcono = 'filter_';
        nameIcono += (cursosGuias[i].Ciclo <= 9) ? cursosGuias[i].Ciclo : '9_plus';
        var iconTitle = document.createTextNode(nameIcono);
        icon.appendChild(iconTitle);
        header.appendChild(icon);
        var bold1 = document.createElement('b');
        var contenido1 = document.createTextNode((i + 1) + '.- ' + cursosGuias[i].Nombre);
        bold1.appendChild(contenido1);
        header.appendChild(bold1);
        curso.appendChild(header);

        /*Body*/
        var body = document.createElement('div');
        body.setAttribute('class', 'collapsible-body white');

        var span = document.createElement('span');
        var texto1 = '<b>Codigo: </b>' + cursosGuias[i].Codigo + '<br>' +
            '<b>Cred: </b>' + cursosGuias[i].Creditos + ' cred<br>' +
            '<b>Horas: </b><br>';
        for (var ii = 0; ii < cursosGuias[i].Hora.length; ii++) {
            texto1 += '-(<i><b>' + cursosGuias[i].Hora[ii].dia + '</b> [' + cursosGuias[i].Hora[ii].aula + ']' + '</i>) ';
            for (var iii = 0; iii < cursosGuias[i].Hora[ii].horas.length; iii++) {
                texto1 += cursosGuias[i].Hora[ii].horas[iii] + " ";
                texto1 += (iii !== cursosGuias[i].Hora[ii].horas.length - 1) ? ', ' : '';
            };
            texto1 += (ii !== cursosGuias[i].Hora.length - 1) ? '<br>' : '';
        };

        texto1 += '<br><b>Color: </b> <div class="' + cursosGuias[i].Color + ' white-text">' + cursosGuias[i].Color + '</div>';
        span.innerHTML = texto1;
        body.appendChild(span);
        curso.appendChild(body);

        lista.appendChild(curso);

    };

    var SumaDeCreditos = document.getElementById('totalCred');
    var headercred = document.createElement('div');
    headercred.setAttribute('class', 'collapsible-header grey lighten-1');
    var iconcred = document.createElement('i');
    iconcred.setAttribute('class', 'material-icons');
    var iconTitlecred = document.createTextNode('credit_card');
    iconcred.appendChild(iconTitlecred);
    headercred.appendChild(iconcred);
    var bold1cred = document.createElement('b');
    var contenido1cred = document.createTextNode('Total Cred: ' + total);
    bold1cred.appendChild(contenido1cred);
    headercred.appendChild(bold1cred);

    var bodycred = document.createElement('div');
    bodycred.setAttribute('class', 'collapsible-body white');
    SumaDeCreditos.appendChild(headercred);
    SumaDeCreditos.appendChild(bodycred);
};

window.addEventListener('load', function() {
    console.log('JS creado en java');
    console.log('Nombre: script.js');
    console.log('Ubicacion: C:\Users\MARIANO\Desktop\HTML - CREADO\ProyectoHorarioResponsivo\js');
    console.log('Luis M. V. Fuentes');
    console.log('Tue Aug 28 22:07:21 COT 2018');

    if (document.getElementById('horario') !== null) {
        cargar();
        rellenar();
    };

    if (document.getElementById('listaCursos') !== null) {
        listar();
    };

    $(document).ready(function() {
        $('.materialboxed').materialbox();
        $('.collapsible').collapsible();
        $('.modal').modal();
        $('select').formSelect();
        $('.tooltipped').tooltip();
        $('.fixed-action-btn').floatingActionButton();
    });

});