const conn = require('../Model/conn').promise();
const bcryp = require('bcrypt')

const Buscar_Evento = async (req, res) => {
    try {
        // Decodifica el nombre del evento
        const nombre_evento = decodeURIComponent(req.params.nombre_evento);
        const nombre_evento_m = nombre_evento.toLowerCase();
        
        const connection = await conn;
        const query = `
            SELECT e.*, u.Nombres, u.Apellidos, l.nombre_lugar
            FROM eventos e
            JOIN usuario u ON e.usuario_id = u.id_usuario
            JOIN lugar l ON e.lugar_id = l.id_lugar
            WHERE LOWER(e.nombre_evento) = ?
        `;
        const [resultados] = await connection.query(query, [nombre_evento_m]);
        
        if (resultados.length > 0) {
            res.json(resultados[0]);
        } else {
            res.status(404).json({ message: "Evento no encontrado" });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const RegistrarEvento = async (req, res) => {
    try {
        const { usuario_id, nombre_evento, fecha_e, hora_inicio, hora_fin, lugar_id, participantes_e, descripcion_e } = req.body;   
        const resultado = await conn.query("INSERT INTO eventos (usuario_id, nombre_evento, fecha_e, hora_inicio, hora_Fin, lugar_id, participantes_e, descripcion_e) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [usuario_id, nombre_evento, fecha_e, hora_inicio, hora_fin, lugar_id, participantes_e, descripcion_e]);
        console.log('Evento registrado con éxito');
        res.status(200).json({ message: 'Evento registrado con éxito' });
    } catch (error) {
        console.error('Error al registrar evento:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const RegistrarUsuario = async (req, res) => {
    try {
        const { pkfk_tdoc, numero_id, Nombres, Apellidos, correo, celular } = req.body;
        
        const resultado = await conn.query("INSERT INTO usuario (pkfk_tdoc, numero_id, Nombres, Apellidos, correo, celular) VALUES (?, ?, ?, ?, ?, ?)", [pkfk_tdoc, numero_id, Nombres, Apellidos, correo, celular]);
        console.log('Usuario registrado con éxito');
        res.status(200).json({ message: 'Usuario registrado con éxito' });
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports={
    Buscar_Evento,
    RegistrarEvento,
    RegistrarUsuario
}
