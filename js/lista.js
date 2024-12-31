function mostrarProductos() {
    const productos = [
        { ID: 1, Name: "El Señor Presidente", Description: "Libro de 'El Señor Presidente'", Amount: 10 },
        { ID: 2, Name: "El Principito", Description: "Libro de 'El Principito", Amount: 15 },
        { ID: 3, Name: "Cien Años De Soledad", Description: "Libro de 'Cien Años De Soledad'", Amount: 7 },
        { ID: 4, Name: "1984", Description: "Libro de '1984'", Amount: 12 },
        { ID: 5, Name: "La Sombra Del Viento", Description: "Libro de 'La Sombra Del Viento'", Amount: 5 },
        { ID: 6, Name: "El Poder Del Ahora", Description: "Libro de 'El Poder Del Ahora'", Amount: 20 }
    ];

    console.log(productos);

    return productos;
}

mostrarProductos();
