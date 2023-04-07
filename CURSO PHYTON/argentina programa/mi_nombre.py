# Cree un script que, sabiendo cuántos pesos argentinos tiene una persona
# ahorrada en su cuenta (almacenando ese monto en una variable), muestre
# en pantalla los montos convertidos en dólares (U$1 = $80.5), reales ($R1 =
# $14.1), y euros (€1 = $69.5). La salida del programa debe tener el siguiente
# formato:

almacenado = int(input ("ingrese el monto que dispone en pesos: "))
cambio_dolares = 200
cambio_euros = 400
cambio_reales = 14.1

uds = almacenado // cambio_dolares
euro = almacenado // cambio_euros
reales = almacenado // cambio_reales

print ("el valor en dolares es: ", uds)
print ("el valor en euro es: ", euro)
print ("el valor en reales es: ", reales)