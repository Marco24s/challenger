def string_mas_corto(a, b):
    if len(a) <= len(b):
        return a
    else:
        return b

# Pedir al usuario que ingrese los strings
texto1 = input("Ingrese el primer texto: ")
texto2 = input("Ingrese el segundo texto: ")

# Calcular el string más corto entre los dos textos ingresados
resultado = string_mas_corto(texto1, texto2)

# Mostrar el resultado en la pantalla
print(f"El texto más corto es: {resultado}")
