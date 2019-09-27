// Definición de los seleccionadores de los elementos del DOM.
const   formRegistrar = document.getElementById('formRegistrar'),
        checkProvincias = document.getElementById('checkProvincias'),
        idProvincia = document.getElementById('provincia'),
        idTabla = document.getElementById('tabla')

class Persona {
    constructor(nombre, primerApe, segundoApe, fechaNaci, sexo, edad, provincia) {
        this.nombre = nombre, 
        this.primerApe = primerApe,
        this.segundoApe = segundoApe,
        this.fechaNaci = fechaNaci,
        this.sexo = sexo,
        this.edad = edad,
        this.provincia = provincia
    }
}

class Desarrollador extends Persona {
    constructor (nombre, primerApe, segundoApe, fechaNaci, sexo, edad, provincia, areas) {
        super(nombre, primerApe, segundoApe, fechaNaci, sexo, edad, provincia),
        this.areas = areas
    }

    areasPlantilla () {
        let plantilla = ''
        
        this.areas.map( area => plantilla += `<td>${area}</td>`)
        
        return plantilla
    }

    desarrolladorPlantilla () {
        return `<tr>
                    <td>${this.nombre} ${this.primerApe} ${this.segundoApe}</td>
                    <td>${this.sexo}</td>
                    <td>${this.edad}</td>
                    <td>${this.fechaNaci}</td>
                    ${this.areasPlantilla()}
                    <td>${this.provincia}</td>
                </tr>`
    }
}

class Provincia {
    constructor(id, value, nombre) {
        this.id = id,
        this.value  = value,
        this.nombre = nombre
    }
}

let desarrolladores = []

const   provincias =    [new Provincia('sanJose', 1, 'San José'), 
                        new Provincia('alajuela', 2, 'Alajuela'), 
                        new Provincia('cartago', 3, 'Cartago'), 
                        new Provincia('heredia', 4, 'Heredia'), 
                        new Provincia('guanacaste', 5, 'Guanacaste'), 
                        new Provincia('puntarenas', 6, 'Puntarenas'), 
                        new Provincia('limon', 7, 'Limón')]

// Plantilla de HTML
const optionsPlantilla = options => {
    let plantilla = ''

    options.map(option => plantilla += `<option value=${option.value}>${option.nombre}</option>`)

    return plantilla
}

const checkboxsPlantilla = checkboxs => {
    let plantilla = ''

    checkboxs.map( checkbox => {
        plantilla +=    `<label>
                            <input type="checkbox" id=${checkbox.id} value=${checkbox.value}>${checkbox.nombre}
                        </label>`
    })
    return plantilla
}

const tbodyPlantilla = () => {
    return '<tbody id="tbody"></tbody>'
}

// Eventos

const registrar = () => {
    formRegistrar.addEventListener('submit', e => {
        e.preventDefault()

        const   selectorAreas = Array.from(formRegistrar.querySelectorAll('input[type="checkbox"]')),
                selectorNombre = Array.from(formRegistrar.querySelectorAll('input[type="text"]')), 
                idFechaNaci = document.getElementById('fechaNacimiento'), 
                selectorSexo = Array.from(formRegistrar.querySelectorAll('input[type="radio"]')), 
                idEdad = document.getElementById('edad')
        
        let areas = [],
            sexo,
            provincia

        selectorAreas.map( area => { if (area.checked) areas.push(area.name) })
        selectorSexo.filter( radio => { if (radio.checked) sexo = radio.value })
        
        provincias.map(codigo => {if (parseInt(idProvincia.value) === codigo.value) provincia = codigo.nombre})

        desarrolladores.push(new Desarrollador( selectorNombre[0].value, 
                                            selectorNombre[1].value, 
                                            selectorNombre[2].value, 
                                            idFechaNaci.value, 
                                            sexo, 
                                            idEdad.value, 
                                            provincia, 
                                            areas ) )
        formRegistrar.reset()
        alert('Se guardo sin problemas')   
    })
}

const agregarDesarrolladores = (id, array) => {
    id.addEventListener( 'change', e => {

        let idTbody = document.getElementById('tbody')

        if (e.target.checked) {
            let nomProvincia,
                trPlantilla = ''
            provincias.map(provincia => {
                if (parseInt(id.value) === provincia.value) nomProvincia = provincia.nombre})
            array.map( el => {
                if ( el.provincia === nomProvincia)
                    trPlantilla += el.desarrolladorPlantilla()
                })
            idTbody.insertAdjacentHTML('beforeend', trPlantilla)
        } else {
            let selectorCheckboxs = Array.from(formTabla.querySelectorAll('input[type="checkbox"]')),
                valueCheckboxs = [],
                nomProvincias = [],
                trPlantilla = ''

            selectorCheckboxs.map( checkbox => { if(checkbox.checked) valueCheckboxs.push(parseInt(checkbox.value)) })
            provincias.map(provincia => valueCheckboxs.map( checkbox => { 
                if (checkbox === provincia.value) nomProvincias.push(provincia.nombre) }) )
            array.map( el => {
                nomProvincias.map(nomProvincia => {
                    if ( el.provincia === nomProvincia)
                    trPlantilla += el.desarrolladorPlantilla()
                })
            })

            idTbody.remove()
            idTabla.insertAdjacentHTML('beforeend', tbodyPlantilla())
            idTbody = document.getElementById('tbody')
            idTbody.insertAdjacentHTML('beforeend', trPlantilla)
        } 
   })
} 

// Ejecuciones

idProvincia.insertAdjacentHTML('beforeend', optionsPlantilla(provincias))
checkProvincias.insertAdjacentHTML('beforeend', checkboxsPlantilla(provincias))
registrar()
agregarDesarrolladores(document.getElementById(provincias[0].id), desarrolladores)
agregarDesarrolladores(document.getElementById(provincias[1].id), desarrolladores)
agregarDesarrolladores(document.getElementById(provincias[2].id), desarrolladores)
agregarDesarrolladores(document.getElementById(provincias[3].id), desarrolladores)
agregarDesarrolladores(document.getElementById(provincias[4].id), desarrolladores)
agregarDesarrolladores(document.getElementById(provincias[5].id), desarrolladores)
agregarDesarrolladores(document.getElementById(provincias[6].id), desarrolladores)