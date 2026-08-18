// ==========================================
// DATOS INICIALES
// ==========================================

let productos = [
    {
        id: 1,
        nombre: "AirPods Pro 2",
        categoria: "Audio",
        stock: 10,
        compra: 20000,
        venta: 30000
    },

    {
        id: 2,
        nombre: "JBL GO 4",
        categoria: "Audio",
        stock: 5,
        compra: 25000,
        venta: 35000
    },

    {
        id: 3,
        nombre: "Cargador USB-C",
        categoria: "Cargadores",
        stock: 15,
        compra: 10000,
        venta: 15000
    },

    {
        id: 4,
        nombre: "Cable USB-C",
        categoria: "Accesorios",
        stock: 3,
        compra: 5000,
        venta: 9000
    }
];


// ==========================================
// CARGAR LA PÁGINA
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    actualizarTodo();

});


// ==========================================
// FORMATEAR PESOS
// ==========================================

function formatoPesos(numero) {

    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0
    }).format(numero);

}


// ==========================================
// CALCULAR GANANCIA
// ==========================================

function gananciaProducto(producto) {

    return producto.venta - producto.compra;

}


// ==========================================
// ESTADO DEL STOCK
// ==========================================

function obtenerEstado(stock) {

    if (stock === 0) {

        return {
            texto: "Agotado",
            clase: "agotado"
        };

    }

    if (stock <= 5) {

        return {
            texto: "Stock bajo",
            clase: "bajo"
        };

    }

    return {
        texto: "Disponible",
        clase: "disponible"
    };

}


// ==========================================
// ACTUALIZAR DASHBOARD
// ==========================================

function actualizarDashboard() {

    const totalProductos = productos.length;

    const stockTotal = productos.reduce(
        (total, producto) => total + producto.stock,
        0
    );

    const valorInventario = productos.reduce(
        (total, producto) =>
            total + (producto.stock * producto.compra),
        0
    );

    const gananciaTotal = productos.reduce(
        (total, producto) =>
            total + (gananciaProducto(producto) * producto.stock),
        0
    );


    document.getElementById("totalProductos").textContent =
        totalProductos;

    document.getElementById("stockTotal").textContent =
        stockTotal;

    document.getElementById("valorInventario").textContent =
        formatoPesos(valorInventario);

    document.getElementById("gananciaTotal").textContent =
        formatoPesos(gananciaTotal);


    document.getElementById("gananciaPagina").textContent =
        formatoPesos(gananciaTotal);


    const valorVenta = productos.reduce(
        (total, producto) =>
            total + (producto.stock * producto.venta),
        0
    );

    document.getElementById("valorVenta").textContent =
        formatoPesos(valorVenta);

}


// ==========================================
// MOSTRAR PRODUCTOS
// ==========================================

function mostrarProductos(lista = productos) {

    const tabla =
        document.getElementById("tablaProductos");

    const tablaInicio =
        document.getElementById("tablaProductosInicio");


    tabla.innerHTML = "";
    tablaInicio.innerHTML = "";


    lista.forEach(producto => {

        const estado = obtenerEstado(producto.stock);

        const ganancia =
            gananciaProducto(producto);


        const fila = `
            <tr>

                <td>
                    <strong>${producto.nombre}</strong>
                </td>

                <td>
                    ${producto.categoria}
                </td>

                <td>
                    ${producto.stock}
                </td>

                <td>
                    ${formatoPesos(producto.compra)}
                </td>

                <td>
                    ${formatoPesos(producto.venta)}
                </td>

                <td>
                    ${formatoPesos(ganancia)}
                </td>

                <td>
                    <span class="estado ${estado.clase}">
                        ${estado.texto}
                    </span>
                </td>

                <td>

                    <button
                        class="btn-editar"
                        onclick="editarProducto(${producto.id})"
                    >
                        ✏️
                    </button>

                    <button
                        class="btn-eliminar"
                        onclick="eliminarProducto(${producto.id})"
                    >
                        🗑️
                    </button>

                </td>

            </tr>
        `;


        tabla.innerHTML += fila;
        tablaInicio.innerHTML += fila;

    });

}


// ==========================================
// STOCK BAJO
// ==========================================

function mostrarStockBajo() {

    const contenedor =
        document.getElementById("listaStockBajo");

    const productosBajoStock =
        productos.filter(producto => producto.stock <= 5);


    if (productosBajoStock.length === 0) {

        contenedor.innerHTML = `
            <div class="stock-item">
                <div>
                    <h3>Todo está bien 👍</h3>
                    <p>No hay productos con stock bajo.</p>
                </div>
            </div>
        `;

        return;

    }


    contenedor.innerHTML = "";


    productosBajoStock.forEach(producto => {

        contenedor.innerHTML += `

            <div class="stock-item">

                <div>

                    <h3>
                        ${producto.nombre}
                    </h3>

                    <p>
                        Categoría: ${producto.categoria}
                    </p>

                </div>

                <strong>
                    ${producto.stock} unidades
                </strong>

            </div>

        `;

    });

}


// ==========================================
// GANANCIAS
// ==========================================

function mostrarGanancias() {

    const tabla =
        document.getElementById("tablaGanancias");

    tabla.innerHTML = "";


    productos.forEach(producto => {

        const gananciaUnidad =
            gananciaProducto(producto);

        const gananciaTotal =
            gananciaUnidad * producto.stock;


        tabla.innerHTML += `

            <tr>

                <td>
                    <strong>
                        ${producto.nombre}
                    </strong>
                </td>

                <td>
                    ${producto.stock}
                </td>

                <td>
                    ${formatoPesos(producto.compra)}
                </td>

                <td>
                    ${formatoPesos(producto.venta)}
                </td>

                <td>
                    ${formatoPesos(gananciaUnidad)}
                </td>

                <td>
                    <strong>
                        ${formatoPesos(gananciaTotal)}
                    </strong>
                </td>

            </tr>

        `;

    });

}


// ==========================================
// ACTUALIZAR TODO
// ==========================================

function actualizarTodo() {

    actualizarDashboard();

    mostrarProductos();

    mostrarStockBajo();

    mostrarGanancias();

}


// ==========================================
// CAMBIAR SECCIÓN
// ==========================================

function mostrarSeccion(seccion, boton) {

    document.querySelectorAll(".seccion")
        .forEach(elemento => {

            elemento.classList.remove("activa");

        });


    document.getElementById(seccion)
        .classList.add("activa");


    document.querySelectorAll(".menu-item")
        .forEach(elemento => {

            elemento.classList.remove("active");

        });


    boton.classList.add("active");


    const titulos = {

        inicio: [
            "Dashboard",
            "Resumen general de tu negocio"
        ],

        productos: [
            "Productos",
            "Administrá todos tus productos"
        ],

        stock: [
            "Control de Stock",
            "Revisá el estado de tu inventario"
        ],

        ganancias: [
            "Ganancias",
            "Calculá las ganancias de tu negocio"
        ]

    };


    document.getElementById("tituloPagina")
        .textContent = titulos[seccion][0];


    document.getElementById("subtituloPagina")
        .textContent = titulos[seccion][1];

}


// ==========================================
// ABRIR MODAL
// ==========================================

function abrirModal() {

    document.getElementById("modal")
        .classList.add("mostrar");

}


// ==========================================
// CERRAR MODAL
// ==========================================

function cerrarModal() {

    document.getElementById("modal")
        .classList.remove("mostrar");

    document.getElementById("formProducto")
        .reset();

}


// ==========================================
// AGREGAR PRODUCTO
// ==========================================

document.getElementById("formProducto")
    .addEventListener("submit", function (event) {

        event.preventDefault();


        const nombre =
            document.getElementById("nombre").value;

        const categoria =
            document.getElementById("categoria").value;

        const stock =
            Number(document.getElementById("stock").value);

        const compra =
            Number(document.getElementById("compra").value);

        const venta =
            Number(document.getElementById("venta").value);


        const nuevoProducto = {

            id: Date.now(),

            nombre: nombre,

            categoria: categoria,

            stock: stock,

            compra: compra,

            venta: venta

        };


        productos.push(nuevoProducto);


        actualizarTodo();

        cerrarModal();


        alert("Producto agregado correctamente ✅");

    });


// ==========================================
// ELIMINAR PRODUCTO
// ==========================================

function eliminarProducto(id) {

    const producto =
        productos.find(producto => producto.id === id);


    if (!producto) return;


    const confirmar =
        confirm(
            `¿Querés eliminar "${producto.nombre}"?`
        );


    if (!confirmar) return;


    productos =
        productos.filter(producto => producto.id !== id);


    actualizarTodo();

}


// ==========================================
// EDITAR PRODUCTO
// ==========================================

function editarProducto(id) {

    const producto =
        productos.find(producto => producto.id === id);


    if (!producto) return;


    const nuevoStock =
        prompt(
            `Stock actual de ${producto.nombre}:`,
            producto.stock
        );


    if (nuevoStock === null) return;


    const stockNumero =
        Number(nuevoStock);


    if (
        isNaN(stockNumero) ||
        stockNumero < 0
    ) {

        alert("Ingresá un número válido.");

        return;

    }


    producto.stock = stockNumero;


    actualizarTodo();


    alert("Stock actualizado correctamente ✅");

}


// ==========================================
// BUSCAR PRODUCTOS
// ==========================================

function buscarProducto() {

    const texto =
        document.getElementById("buscarProducto")
            .value
            .toLowerCase();


    const categoria =
        document.getElementById("filtroCategoria")
            .value;


    const resultados =
        productos.filter(producto => {

            const coincideNombre =
                producto.nombre
                    .toLowerCase()
                    .includes(texto);


            const coincideCategoria =
                categoria === "" ||
                producto.categoria === categoria;


            return coincideNombre &&
                   coincideCategoria;

        });


    mostrarProductos(resultados);

}