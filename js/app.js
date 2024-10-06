function calculate() {
  //  el importe
  const importe = parseFloat(prompt('Ingrese el importe a solicitar: '));
  
  // validar que el importe sea un número positivo
  if (isNaN(importe) || importe <= 0) {
    console.log('Solo ingrese números');
    return;
  }

  // porcentaje de interés
  let interes;
  while (true) {
    interes = parseFloat(prompt('Ingrese el porcentaje de interés (sin %): '));
    if (!isNaN(interes) && interes >= 0) break;
    console.log('Entrada inválida. Por favor ingrese un porcentaje de interés válido.');
  }

  // meses o años
  let monthsOrYears;
  while (true) {
    monthsOrYears = prompt("Seleccione 1 para 'meses' o 2 para 'años': ");
    if (monthsOrYears === '1' || monthsOrYears === '2') break;
    console.log('seleccione 1 para "meses" o 2 para "años".');
  }

  // cantidad de meses o años
  let qtyTimeUnits;
  if (monthsOrYears === '1') {
    // si selecciona 1, pedir cantidad de meses
    while (true) {
      qtyTimeUnits = parseInt(prompt('Ingrese la cantidad de meses: '), 10);
      if (!isNaN(qtyTimeUnits) && qtyTimeUnits > 0) break;
      console.log('Entrada inválida. Por favor ingrese una cantidad válida de meses.');
    }
  } else {
    // si selecciona 2, pedir cantidad de años
    while (true) {
      qtyTimeUnits = parseInt(prompt('Ingrese la cantidad de años: '), 10);
      if (!isNaN(qtyTimeUnits) && qtyTimeUnits > 0) break;
      console.log('Entrada inválida. Por favor ingrese una cantidad válida de años.');
    }
    // convertir años a meses
    qtyTimeUnits *= 12;
  }

  // calcular el importe total con interés
  const importeTotal = importe + (importe * interes / 100);
  
  // calcular el pago mensual
  const cuotaMensual = (importeTotal / qtyTimeUnits).toFixed(2);

  // mostrar el resultado
  console.log(`El importe solicitado es: ${importe}`);
  console.log(`El porcentaje de interés es: ${interes}%`);
  console.log(`El importe total a pagar es: ${importeTotal.toFixed(2)}`);
  console.log(`Se calcularán cuotas mensuales durante ${qtyTimeUnits} meses.`);
  console.log(`El pago mensual será de: ${cuotaMensual}`);
}

calculate();