var titulo_card_1 = prompt('Coloque el nombre del titulo de la card 1', 'Titulo card 1')
var year_nacimiento = Number(prompt('Coloque su fecha de nacimiento', '1988'))
var year_actual = new Date().getFullYear()
var edad_actual = year_actual - year_nacimiento



document.write('<section class="container">')
document.write('  <h1>Hello, world!</h1>')
document.write('  <div class="row row-cols-1 row-cols-md-2 g-4">')
document.write('    <div class="col">')
document.write('      <div class="card">')
document.write('        <img src="..." class="card-img-top" alt="...">')
document.write('        <div class="card-body">')
document.write('          <h5 class="card-title">' + titulo_card_1 + '</h5>')
document.write('          <p class="card-text">Tienes: ' + edad_actual + ' años</p>')
document.write('        </div>')
document.write('      </div>')
document.write('    </div>')
document.write('    <div class="col">')
document.write('      <div class="card">')
document.write('        <img src="..." class="card-img-top" alt="...">')
document.write('        <div class="card-body">')
document.write('          <h5 class="card-title">Titulo card 2</h5>')
document.write('          <p class="card-text">Ejemplo texto 2</p>')
document.write('        </div>')
document.write('      </div>')
document.write('    </div>')
document.write('    <div class="col">')
document.write('      <div class="card">')
document.write('        <img src="..." class="card-img-top" alt="...">')
document.write('        <div class="card-body">')
document.write('          <h5 class="card-title">Titulo card 3</h5>')
document.write('          <p class="card-text">Ejemplo texto 3</p>')
document.write('        </div>')
document.write('      </div>')
document.write('    </div>')
document.write('    <div class="col">')
document.write('      <div class="card">')
document.write('        <img src="..." class="card-img-top" alt="...">')
document.write('        <div class="card-body">')
document.write('          <h5 class="card-title">Titulo card 4</h5>')
document.write('          <p class="card-text">Ejemplo texto 4</p>')
document.write('        </div>')
document.write('      </div>')
document.write('    </div>')
document.write('  </div>')
document.write('')
document.write('</section>')
// document.write("")
/*
Tipos de variables:
- Boolean: Verdadero o Falso (true, false)
- Number: tipo numérico, que yo lo puedo sumar, restar, multiplicar y operar usando aritmética
- String: cadenas de caracteres
 */
